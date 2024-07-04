import { saveEndProgress, scenarioManager, timer } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { whiteFlash } from '../../../../Components/Slide/Slide'
import { choiceDone, getChoice, resetChoices } from '../../../../Functions/5Choices'

scenarioManager.addScenario({ storyName: EStoriesEn.MM, chapterName: 'Глава 1', partName: 'Часть 2', code: '0' }, [
  {
    id: 0,
    text:
      `
        Что такое <i>долго</i>? Тянущиеся в бесконечной веренице месяцы, годы? Быть может, протяженные, бесцельные часы за пустыми делами?
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    message: 'Допросная комната',
    music: require('../../../../Sounds/MM/Jonathan.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 1,
    text:
      `
        Маргарита вот уже несколько минут смотрела куда-то мимо Джонатана. В воздухе буквально ощущалась неправильность ситуации. Повисло нестерпимо <i>долгое молчание</i>, по-своему угнетающее.
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 2,
    text:
      `
        — Что вы имеете в виду?
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 3,
    text:
      `
        Голос девушки никак не обозначил того, что крутилось в мыслях, не выдал очевидного беспокойства. Детектив теряла контроль, но понимала — показывать это перед мужчиной крайне недальновидно.
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 4,
    text:
      `
        Лишь руки, покоившиеся в карманах брюк, становились уликами тревожного состояния Марго. Ногти до отрезвляющей боли впились в ладонь.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 5,
    text:
      `
        Мужчина лишь закатил глаза, будто сам этот вопрос был слишком скучным, не достойным внимания.
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 6,
    text:
      `
        — Вы столько времени обдумывали эту реплику? Видимо у меня были завышенные ожидания от вас, Маргарита.
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 7,
    text:
      `
        Мужчина вновь буравил взглядом детектива, и в этом немом спектакле проносились тысячи невысказанных слов, тысячи несовершенных действий.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 8,
    text:
      `
        — Вы замечали сколько в вас ненужного тщеславия, спеси и напыщенности, мистер Джонатан?
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 9,
    text:
      `
        Девушка ощутила прилив сил, на лице замерла печать непроницаемости. В тусклом помещении свет неяркой лампы невинно играл на волосах Маргариты, отливая угольным оттенком. 
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 10,
    text:
      `
        — Вы не первая, кто об этом мне говорит.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 11,
    text:
      `
        Он чуть прищурился — насмешливо, дерзко.
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 12,
    text:
      `
        — В таком случае вам бы стоило задуматься о собственном поведении. Благо, я не ваш учитель, и мне от вас нужен лишь ответ на вопрос, поставленный ранее.
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 13,
    text:
      `
        Детектив подняла руки, поставила их на стол, сцепив в замок. Джонатан откинулся на стуле, чуть покачивая головой.
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 14,
    text:
      `
        Возвратившись в исходную позу, посмотрел прямо в глаза девушке. Не найдя в них ничего, что могло бы выдать скрытые намерения детектива или хоть как-то прояснить ее чувства, он негромко вздохнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 15,
    text:
      `
        Нечасто успешному бизнесмену попадались люди с нечитаемыми эмоциями. Внимательность и наблюдательность, с которыми Джонатан привык подходить к анализу собеседника, помогали в работе при заключении контрактов.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 16,
    text:
      `
        Бегающий взгляд, подрагивающие ресницы, поправление галстука, несвоевременный кашель — клиент явно что-то недоговаривает, скрывает, умалчивает. Конечно, это может быть абсолютно не имеющее к профессии вранье.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 17,
    text:
      `
        Допустим, до приезда на собеседование клиент припарковался на запрещенной территории, и теперь не находит себе места. Или скрылся от жены, чуть не попавшись с любовницей — впрочем, так или иначе, с такими людьми лучше не вести дела.
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 18,
    text:
      `
        В этих чрезвычайно коротких, своеобычных наблюдениях Джонатан выносил единственный приговор, и в этом он был неколебим, никаких условий и компромиссов.
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 19,
    text:
      `
        Сам же он привык молчать и оценивать напротив сидящего человека. Но попадать под прицел девушки, которая, как и он, затаившись изучает, улавливаяет эмоции в разговоре, абсолютно ново и, как ни странно, интересно, пытливо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 20,
    text:
      `
        — Серьга, ваша, на месте преступления, а еще записка.
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 21,
    text:
      `
        Короткое предложение, простое, то, что Марго и так знает. Но краткая нить доверия, что хранится в душе девушки, порвалась на тысячи осколков, рождая новый вопрос.
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 22,
    text:
      `
        — <i>Как он узнал?
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 23,
    text:
      `
        Собственно, вслух она произнесла идентичную фразу.
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 24,
    text:
      `
        — Откуда у вас эти данные?
      `,
    buttons: [
      {
        text: 'Кто-то слил информацию. У нас завелась крыса?',
        goTo: 25,
        func: () => { timer.stop() }
      },
      {
        text: 'Пока рано делать выводы',
        goTo: 33,
        func: () => { timer.stop() }
      },
      {
        text: 'Неужели Джонатан замешан в преступлении?',
        goTo: 34,
        func: () => { timer.stop() }
      }],
    beforeBegin: () => {
      timer.set(15, () => { scenarioManager.beginScene(33) })
    },
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 25,
    text:
      `
        Интуиция в детективной сфере вещь не пустая. Часто полагаясь на нее и некоторые косвенные доказательства, можно вычислить преступника.
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    message: 'Вы мыслите в правильном направлении',
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Effect', id: 'Investigation' }],
    achievement: { story: EStoriesEn.MM, name: 'JudasInOffice' },
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 26,
    text:
      `
        Чувства не из приятных — ее укутало вязкое ощущение предательства. Перед глазами пронеслась картина со стороны: кто-то наставил холодный, острый нож прямо в спину.
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 27,
    text:
      `
        Оружие отнюдь не предмет метафорический, а вполне реальный. Словно стоящий позади человек выждал идеальный момент, чтобы исподтишка нанести удар.
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 28,
    text:
      `
        — <i>Предательство…
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 29,
    text:
      `
        — <i>Откуда человеку, пусть и такому влиятельному, знать о моей связи с убитым?
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 30,
    text:
      `
        — <i>Человек, сливший информацию, может быть из полиции, конечно. Но это не меняет сути.
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 31,
    text:
      `
        — <i>Полиция или детективный отдел. Попала… Что за идиот это сделал? А главное — зачем? Из-за денег?
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 32,
    text:
      `
        — <i>Черт, столько мыслей…
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 33,
    text:
      `
        — <i>Слишком мало вводной информации. Спешить не нужно.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 34,
    text:
      `
        — <i>Эта мысль, конечно, имеет место быть, но как-то все слишком просто: первый подозреваемый, сын убитого, конфликт отца и сына и излюбленный мотив — месть?
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 35,
    text:
      `
        — <i>Мда, я словно героиня турецкого сериала… Мои рассуждения без доказательной базы не годятся, даже если этому мерзавцу известны такие детали дела…
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 36,
    text:
      `
        Лицо мужчины тронула улыбка, почти что искренняя. Но приглядевшись к ней, замечаешь странность — улыбка в точности напоминает болезненный оскал.
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 37,
    text:
      `
        — Иногда вы до безумия наивны. Я не стану отвечать на этот вопрос.
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 38,
    text:
      `
        Нарочито растягивая звуки, Джонатан оглянулся по сторонам.
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 39,
    text:
      `
        — Долго мне сидеть в этой клетке?
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 40,
    text:
      `
        — Столько, сколько потребуется. Пишите письменный отчет, где, с кем, со скольки и до скольки были в период 14, 15 и 16 сентября. Ближайшее окружение отца, враги.
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 41,
    text:
      `
        Более не смотря в сторону Джонатана, Марго поднялась со стула, рваными действиями поправила волосы и вышла из допросной.
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 42,
    text:
      `
        Прижавшись спиной к двери, девушка старалась успокоить себя, дать самой себе эти короткие секунды, чтобы прийти в норму. Если бы можно было в этот момент заглянуть в ее глаза, то увидеть ярко-полыхающую ярость, сменяемую непрерывным раздражением, не составило бы труда.
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    music: require('../../../../Sounds/MM/Fast.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 43,
    text:
      `
        Детектив запустила руки в волосы, будто этот несложный ритуал способен привести мысли к стройному ряду суждений.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 44,
    text:
      `
        — Энергетический вампир.
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 45,
    text:
      `
        Дилан тихо подошел к напарнице, с едва заметным сочувствием разглядывая ее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 46,
    text:
      `
        Марго ответила быстрее, жестче, чем успела подумать над его выражением. В словах сквозила еле прикрытая злоба.
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 47,
    text:
      `
        — Что?
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 48,
    text:
      `
        — Я про Джонатана. Непростой диалог, тебя вымотало.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 49,
    text:
      `
        — Я не фарфоровая, Дилан, не хрупкая. А этот экземпляр намного лучше серийных убийц и маньяков, которые нам с тобой попадались.
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 50,
    text:
      `
        — Тем более, он не замешан в преступлении.
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 51,
    text:
      `
        Чуть приподняв брови, Дилан с сомнением произнес следующую фразу.
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 52,
    text:
      `
        — И ты это, прости, успела понять за десять минут разговора, где он почти ничего внятного не сказал?
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 53,
    text:
      `
        — Не удивляйся, но мне так показалось. Посмотрим, что он напишет, проверим его алиби.
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 54,
    text:
      `
        В голове напарника возникло короткое:
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 55,
    text:
      `
        — <i>Одиночка… И всегда такой была.
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 56,
    text:
      `
        — Я схожу в кабинет, проветрюсь. Подумаю.
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 57,
    text:
      `
        — Без проблем, скоро должна прийти информация из участка, по поводу результатов дактилоскопии.
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    message: 'Дактилоскопия — метод, который позволяет идентифицировать человека по уникальным рисункам отпечатков пальцев (папиллярным узорам), а также ладоней',
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 58,
    text:
      `
        — Представь, что убийца уже будет найден. Какой-нибудь бывалый преступник совершил рецидив.
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 59,
    text:
      `
        Глаза мужчины заискрились, так, будто он поймал удачу. Девушка же не разделила эту радость.
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 60,
    text:
      `
        — Сомневаюсь.
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 61,
    text:
      `
        Дилан давно успел соприкоснуться с этой стороной девушки. Когда ту тяготят мысли, она предпочитает ото всех замкнуться.
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 62,
    text:
      `
        И даже в этих минутах, пока Маргарита произносила слова, чувствовалась ее отстраненность, а во взгляде порой пробегала глубокая отрешенность.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 63,
    text:
      `
        Все это Дилан видел, и предпочитал не мешать способу Марго справляться с трудностями работы.
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 64,
    text:
      `
        Хлопнула дверь комнаты, но Дилан не заметил, как детектив покинула место. Он устало протер глаза, подошел к мониторам, ставя на паузу записывающиеся видео и аудиоустройства, и вошел в допросную.
      `,
    buttons: [
      {
        text: 'Продолжить',
        gift: true,
        goTo: 65
      }],
    simple: require('../../../../Sounds/MM/Close_Door.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 65,
    text:
      `
        Джонатан привык к своеобразному узилищу. Но так показалось лишь на первый взгляд. Ноги, как и, впрочем, руки, слегка дернулись, выдавая явное раздражение, вызванное ситуацией.
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    message: 'Допросная комната',
    music: require('../../../../Sounds/MM/Sad_Stress.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 66,
    text:
      `
        — Мы так не договаривались.
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 67,
    text:
      `
        Мужчина становился дерганым, истерзанным сомнениями, а руки в карманах брюк не находили покоя.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 68,
    text:
      `
        — Мы об <i>этом</i> не договаривались. Зачем ты вообще сказал ей, что знаешь про эти улики?
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 69,
    text:
      `
        — Какого хрена, а?!
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 70,
    text:
      `
        На последнем слоге у Дилана сперло дыхание. Непривыкшему к агрессии детективу сложно было контролировать голос, звуки срывались, становясь громче.
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 71,
    text:
      `
        — Успокойся, я не собирался раскрывать тебя. Мы все еще работаем вместе.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 72,
    text:
      `
        — После того как твоего отца убили, а ты в числе подозреваемых?
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 73,
    text:
      `
        — Что-то ты не подумал об этом раньше, когда передавал такую информацию. Но да ладно, оставим этот фарс.
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 74,
    text:
      `
        Джонатан поднялся на ноги, отдавая исписанные ровным почерком бумаги Дилану. Острословие покинуло его, умолкло, сменяясь спокойной уверенностью.
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 75,
    text:
      `
        — Ты же не думаешь, что я — убийца? 
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 76,
    text:
      `
        — Какая уже к черту разница? Если Марго узнает…
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 77,
    text:
      `
        — То что, Ромео? Она не сможет больше доверять тебе? Не нужно так отчаиваться.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 78,
    text:
      `
        Мужчина не привык подбирать выражения, чем злил Дилана. Видя его реакцию, бизнесмен закатил глаза, но поспешил объясниться.
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 79,
    text:
      `
        — Она не узнает, по крайней мере точно не от меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 80,
    text:
      `
        Мужчины смотрели друг на друга, и в этом молчании пришли хоть к какому-то соглашению. Дилан, сдавшись, небрежно кивнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 81,
    text:
      `
        Детектив быстро пробежал взглядом по бумагам, верхняя губа чуть дернулась.
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 82,
    text:
      `
        — Что не так?
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 83,
    text:
      `
        — Здесь нет ни одного слова о том, с кем твой отец мог быть в плохих отношениях, кто мог желать ему смерти.
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 84,
    text:
      `
        — И?
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 85,
    text:
      `
        — Нужны имена, в этом и состоит цель этого отчета. Марго спросит с меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 86,
    text:
      `
        — Даже не думай, я не собираюсь выдавать тех девушек. Не сейчас.
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 87,
    text:
      `
        Детектив убрал листы в папку, обдумывая, как лучше поступить. Не найдя иных вариантов махнул рукой.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 88,
    text:
      `
        — Свободен, уходи.
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 89,
    text:
      `
        — А как же твоя напарница?
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 90,
    text:
      `
        — Справлюсь. Только обойди этаж стороной, спустись на лифте.
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 91,
    text:
      `
        Непривычно озорная улыбка тронула лицо Джонатана.
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 92,
    text:
      `
        — Не знал, что Марго предпочитает заниматься спортом даже на работе. Ходить по лестницам — это такой способ справиться со стрессом?
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 93,
    text:
      `
        Дилан с легким презрением посмотрел в сторону уходящего мужчины.
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 94,
    text:
      `
        — Для тебя она Маргарита.
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 95,
    text:
      `
        — Скоро она для тебя может стать <i>Маргаритой.
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 96,
    text:
      `
        Опять специально растягивая слова, Джонатан сделал акцент на имени детектива. Дилан захотел что-то ответить на это, но замолчал. Слова так и не сорвались с губ.
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 97,
    text:
      `
        Он постепенно осознал — во фразе мужчины есть не столь язвительная насмешка, сколь обезоруживающая, горькая правда, не самая сладкая истина.
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 98,
    text:
      `
        — <i>Она не поймет, не простит…
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 99,
    text:
      `
        — <i>Скажет, предал доверие, и будет в этом права.
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 100,
    text:
      `
        Стук удаляющихся шагов донесся до Дилана, а следом и он сам вышел из кабинета, прикрывая дверь допросной.
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 101,
    text:
      `
        Папка с глухим звуком упала на стол, включились видео и аудиозаписи. И все вроде бы встало на свои места, но только не чувства Дилана, впрочем, они и не смогут прийти в норму. <i>Такое</i> никогда не станет нормой, не для него.
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    message: 'Кабинет рядом с допросной',
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 102,
    text:
      `
        Детектив, снедаемый виной, тщетно пытался унять глубоко угнездившуюся боль.
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 103,
    text:
      `
        — <i>Я обо всем расскажу, но позже. Она возненавидит меня… Что ж, и я этого буду достоин.
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
        Утренние часы, когда вокруг не проносятся шумные машины, когда не спешат вечно недовольные жизнью люди — самое приятное время.
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    beforeBegin: whiteFlash,
    message: 'За десять часов до убийства Томаса Брауна',
    music: require('../../../../Sounds/MM/Spring.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 105,
    text:
      `
        По крайней мере именно так думал Джонатан Браун, пробегая по периметру дикого парка, так напоминающим лес.
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 106,
    text:
      `
        Иногда на известного директора банка находило странное предчувствие отрешения от мира, и когда это чувство возобладало над иными суждениями и эмоциями, он спешил поскорее пробежаться по парку, находя в нем надежное пристанище.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 107,
    text:
      `
        Ветер, обычно необоримый, присмирел, уже не сбивал с ног. Сейчас парк стоял тихий, воздев к небу бесчисленные извилистые ветви.
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 108,
    text:
      `
        И впрямь, это лесное место успокаивало, а вместе с тем будоражило воображение. Что-то таинственное, непостижимое таил он. 
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 109,
    text:
      `
        Изредка в парке попадались люди, которые, как и Джонатан, решили заняться утренним спортом. Среди них были миловидные девушки, строившие невинные глазки.
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 110,
    text:
      `
        Изучая мужчину с головы до пяток, проходясь по фигуре цепким взглядом, они кокетливо крутили локоны на пальцах. Останавливались рядом, нарочито медленно, чтобы завязать идеальный шнурок или сделать вид, что сейчас необходим отдых.
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 111,
    text:
      `
        Самое веселое было в том, что Джонатан и правда мог завязать с ними пустой диалог, чтобы только обуздать плотские утехи, ничего более. Девушки же явно полагали, что зацепили мужчину, покорили чем-то особенным.
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 112,
    text:
      `
        Его не привлекали слова девушек, их речи, так старающиеся быть заумными, показными, уникальными.
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 113,
    text:
      `
        Джонатан снова заметил пристальное внимание к его персоне. Он уже мысленно приготовился к подобному флирту, но, этому действию не суждено было случиться. Ведь, как известно, планы имеют привычку рушиться, не спрашивая людей.
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 114,
    text:
      `
        Зазвонил телефон, на экране высветилось имя — Томас Браун. Даже эта деталь могла натолкнуть на размышления.
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    simple: require('../../../../Sounds/MM/Telephone_Ring.mp3'),
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 115,
    text:
      `
        Почему родной отец, вырастивший сына в одиночку, подаривший сыну учебу в самом престижном учебном заведении Лондона, не был записан, как «папа» или «Томас»?
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 116,
    text:
      `
        Почему столь формальное «Томас Браун»?
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 117,
    text:
      `
        — <i>Как вовремя…
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 118,
    text:
      `
        Джонатан хотел смахнуть вызов, написав сообщение о том, что занят, но что-то неопределенное все же заставило его принять вызов, возобладав над собственным желанием.
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 119,
    text:
      `
        Внутренне борясь с ненавистью, он выдавил из себя кургузое приветствие.
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 120,
    text:
      `
        — Слушаю.
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 121,
    text:
      `
        Послышался неприятный смех, а затем прозвучал властный голос отца.
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 122,
    text:
      `
        — Мой дорогой, занятой сын… Только сегодня читал новостную сводку про твой банк. Он снова в топе, мои искренние поздравления.
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    speaker: 'Томас Браун',
    imageFront: require('../../../../Images/MM/Persons/Thomas.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'right',
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 123,
    text:
      `
        Каждое слово отца — словно удар по выстроенной броне Джонатана, и эта броня начала давать новые трещины.
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 124,
    text:
      `
        — Ближе к делу, зачем ты звонишь?
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 125,
    text:
      `
        И вновь отголоски противного смеха, от которого хочется сбежать, оставив и бросив позади все.
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 126,
    text:
      `
        — Ты не замечал, как мы похожи, Джон?
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    speaker: 'Томас Браун',
    imageFront: require('../../../../Images/MM/Persons/Thomas.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'right',
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 127,
    text:
      `
        — <i>Никогда, никогда я не стану похож на тебя.
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 128,
    text:
      `
        Разумеется, вслух он этого не произнес. Потребовались секунды, которые четко отмерял в уме Джонатан, чтобы не сорваться на отца.
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 129,
    text:
      `
        — <i>…шесть, семь, восемь… Фух.
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 130,
    text:
      `
        Томас, вероятно, воспринял молчание — как особое согласие, поэтому, чуть откашлявшись, продолжил:
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 131,
    text:
      `
        — Я составил завещание, подумал, тебе будет интересно узнать о том, кому я оставлю весь контрольный пакет акций, благотворительный фонд, загородные дома и машины.
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    speaker: 'Томас Браун',
    imageFront: require('../../../../Images/MM/Persons/Thomas.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'right',
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 132,
    text:
      `
        — Ничуть.
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 133,
    text:
      `
        — Тебе, сынок, после моей кончины все перейдет тебе.
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    speaker: 'Томас Браун',
    imageFront: require('../../../../Images/MM/Persons/Thomas.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'right',
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 134,
    text:
      `
        Джонатан не издал ни звука, на лице не появились даже подобия эмоций радости или восторга. Ничего. Пустота. Пропасть.
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 135,
    text:
      `
        Мужчина отключил звонок, а в голове лихим вихрем пронесся несмолкающий вопрос.
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 136,
    text:
      `
        — <i>Зачем, зачем я вообще поддерживаю с ним подобие родственной связи…?
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    achievement: { story: EStoriesEn.MM, name: 'FathersAndSons' },
    imageBack: require('../../../../Images/MM/Backgrounds/Morning_Park.jpg')
  },

  {
    id: 137,
    text:
      `
        — Дилан, твою мать, зачем ты выпустил Джонатана?
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    beforeBegin: whiteFlash,
    music: require('../../../../Sounds/MM/Calm.mp3'),
    ambient: require('../../../../Sounds/MM/Clock_Ticking.mp3'),
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 138,
    text:
      `
        — Ты знаешь, что по закону мы бы все равно не смогли держать его долго. А так, проявили сочувствие, может теперь он охотнее пойдет на сотрудничество.
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 139,
    text:
      `
        Тяжело дыша, Маргарита заново задала один и тот же вопрос, надеясь получить новый ответ, который удовлетворил бы ее.
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 140,
    text:
      `
        — Хорошо, хорошо. Черт, допустим. Но скажи на милость, почему в отчете ни слова о том, кто может быть замешан в преступлении?
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 141,
    text:
      `
        — Я думала, ты уже давно прошел обучение и стажерскую практику, чтобы запомнить один из важных пунктов в таких делах.
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 142,
    text:
      `
        Дилан чуть не улыбнулся, ведь он знал, как щепетильно Марго подходила к допросу, поэтому внутренне ликуя, понял, что заранее предсказал ее слова. Однако вовремя одернул себя.
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 143,
    text:
      `
        — Я ведь не робот, Марго. Просто потерялся в мыслях, знаю, это мой косяк. Но уверяю, что все разрешу.
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 144,
    text:
      `
        Маргарита, не успокоившись, захотела продолжить спор, но в кабинет зашел начальник.
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 145,
    text:
      `
        — Добрый день, мист…
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 146,
    text:
      `
        Но не успела она закончить реплику, как ее перебил Артур.
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 147,
    text:
      `
        — Не стоит. Меньше приветствий — больше времени на расследование. Пришли результаты отпечатков пальцев из бюро, не густо. Никаких совпадений.
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 148,
    text:
      `
        — Наш преступник не из бывалых.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 149,
    text:
      `
        — А что по документам, с них взяли образцы отпечатков пальцев Джонатана?
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 150,
    text:
      `
        — Взяли и сравнили — тоже мимо. Убийца Томаса Брауна не его сын.
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    message: 'Новая улика добавлена в инвентарь',
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Item', id: 'Jonathan_Report' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 151,
    text:
      `
        — Ну хоть что-то…
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 152,
    text:
      `
        При упоминании имени Джонатана, Дилан съежился, но эта короткая перемена осталась незамеченной.
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 153,
    text:
      `
        — Мне не дает покоя письмо в твоей квартире, Марго. И сережка. Кто-то подобрался очень близко.
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 154,
    text:
      `
        — Я думала о том, кто это может быть. Но, честно говоря, все безрезультатно. Из ближайшего круга общений это только сестра и Дилан.
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 155,
    text:
      `
        — Я в последние месяцы ни с кем не контактирую. Работа, дом, семья.
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 156,
    text:
      `
        — Плохо. Может, преследователь появился раньше. Тогда наше дело становится сложнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 157,
    text:
      `
        — Случай неординарный. Боюсь, при отсутствии каких-либо доказательств и улик, придется обращаться к старому доброму фотографу.
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 158,
    text:
      `
        — Иного выхода не останется…
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 159,
    text:
      `
        Бобби Перри — известный серийный убийца, отличающийся особой жестокостью. Всех своих жертв он убивал по-разному, изощренно, мерзко.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 160,
    text:
      `
        А после убийства фотографировал жертв в изогнутых позах, будто те выступали в какой-то театральной постановке. Поэтому прозвали его коротко, не менее жутко — фотограф.
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 161,
    text:
      `
        На его руках нестираемая, вечная кровь 45 убитых людей, и в течение 5 лет ему удавалось умело ускользать от полиции, судей, законов правосудия, детективов.
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 162,
    text:
      `
        Поначалу фотографа хотели отправить на смертную казнь, сотни тысяч людей ждали этой пытки, желали смерти хладнокровному убийце, собирали митинги, но казнь отменили, заменив на пожизненное заключение.
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 163,
    text:
      `
        А все потому, что Перри согласился содействовать с государством, помогая следователям находить убийц и преступников. И, надо сказать, ему это хорошо удавалось.
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 164,
    text:
      `
        Маргарита сглотнула застывший в горле ком.
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 165,
    text:
      `
        — Когда мы обратимся к нему за помощью?
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 166,
    text:
      `
        — Через три дня, если все будет паршиво. Но, надеюсь, до этого все же не дойдет.
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 167,
    text:
      `
        Уснуть у детектива не получилось, все время лезли тревожные мысли. Ворочаясь из стороны в сторону, и в конец переставая верить в волшебно-преходящий сон, девушка со всей силой швырнула подушку в стену.
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    music: require('../../../../Sounds/MM/Alone.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 168,
    text:
      `
        — <i>Как расслабиться…
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 169,
    text:
      `
        Пришлось встать с кровати и подойти к окну. Небо затянуло грозными набрякшими тучами, ветер рвал в клочья, и пронесся дождь — не быстрый дождик, а упорный, точно властвующий потоп, очищая дороги от пыли и грязи.
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 170,
    text:
      `
        Жители Илинга говорят, что дождь уносит с собой все плохое, что накопилось, дает начало чему-то новому и живому.
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 171,
    text:
      `
        — <i>Судя по погоде наш район должен был очиститься уже раз 100, но что-то пошло не так.
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 172,
    text:
      `
        Марго выдохнула теплый воздух на окно, а руки потянулись, чтобы успеть запечатлеть простоватый рисунок на стекле.
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 173,
    text:
      `
        Кожа соприкоснулась с холодном окна, создавая яркий контраст, пуская мурашки по всему телу. Получилось неровно, а девушка лишь глупо рассмеялась над своим занятием, теряя счет времени.
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 174,
    text:
      `
        Узоры сплелись в неясный образ, но именно это занятие помогло ей наконец вздохнуть полной грудью, отбрасывая мысли в сторону.
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    beforeBegin: () => { resetChoices() },
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 175,
    text:
      `
        — <i>И почему на ум приходит…
      `,
    buttons: [
      {
        text: 'Дилан',
        goTo: 176,
        func: () => {
          choiceDone(0)
        }
      },
      {
        text: 'Джонатан',
        goTo: 182,
        func: () => {
          choiceDone(1)
        }
      },
      {
        text: 'Бабушка',
        goTo: 190,
        func: () => {
          choiceDone(2)
        }
      }],
    beforeBegin: () => {
      scenarioManager.changeSceneButtonStatus(175, 0, getChoice(0))
      scenarioManager.changeSceneButtonStatus(175, 1, getChoice(1))
      scenarioManager.changeSceneButtonStatus(175, 2, getChoice(2))
    },
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 176,
    text:
      `
        — <i>Он бы точно удивился тому, как я прожигаю свое время.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    music: require('../../../../Sounds/MM/Romantic.mp3'),
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: 1, category: 'Person', id: 'Dylan' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 177,
    text:
      `
        — <i>Хотя, уверена, что потом с радостью присоединился бы ко мне. И стояли бы мы так, два глупца, рисуя на окне странные картины.
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 178,
    text:
      `
        Почему-то эта мысль заставила Маргариту покраснеть, хотя это явно не то состояние, в которое девушка привыкла входить.
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 179,
    text:
      `
        Глаза блеснули смущением, она едва сдерживала желанную улыбку.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 180,
    text:
      `
        — <i>Какая же ты дурочка, Марго. Нормальные люди в это время спят, а ты воображаешь ерунду.
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 181,
    text:
      `
        Мысли еще клубились, но девушка решила спрятать их в долгий ящик. Разбираться с этим ей явно не хотелось, по крайней мере не сейчас.
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 182,
    text:
      `
        Сердце начало пульсировать быстрее.
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    music: require('../../../../Sounds/MM/Jonathan.mp3'),
    stats: [
      { story: EStoriesEn.MM, value: 1, category: 'Person', id: 'Jonathan' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 183,
    text:
      `
        — <i>Это от раздражения, которое он во мне вызывает.
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 184,
    text:
      `
        Решила девушка, и начала пытаться сосредоточиться на чем угодно, только бы избавиться от навязчивого образа мужчины.
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 185,
    text:
      `
        — <i>Напыщенный индюк, уверена, с ним не может ужиться ни одна девушка. А если бы такая нашлась, то ее имя Мать Тереза и ей определенно стоило бы дать медаль за терпение.
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 186,
    text:
      `
        На стекле вспыхнуло отражение глаз Джонатана, девушка несколько раз моргнула, пытаясь вернуть зрение в норму.
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 187,
    text:
      `
        Хотя в памяти уже отпечатались две горящие точки-глаза хамелеоны, отливающие серо-зеленым оттенком. Они проникли в сознание, изрядно туманя мысли.
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 188,
    text:
      `
        — <i>Брысь из моей головы…
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 189,
    text:
      `
        Наваждение пропало так, словно ничего не было. А вместо него пришло чувство неопределённости, чего-то недосказанного.
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 190,
    text:
      `
        Ее уже давно нет в живых, но воспоминания о ней самые, что ни на есть, живые и трогательные.
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    music: require('../../../../Sounds/MM/Alone.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 191,
    text:
      `
        Благодаря воспитанию бабушки — Элеонор Петровски — Маргарита получила первые уроки жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 192,
    text:
      `
        Именно из-за Элеонор маленькая Марго начала увлекаться литературой, философией, пристрастилась к джазу и живописи.
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 193,
    text:
      `
        Зачастую слыша на улицах сплетение звуков саксофона и контрабаса, девушке так сильно хотелось рассказать о них бабушке, поделиться ощущениями, что возникали при этой изящной игре музыки.
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 194,
    text:
      `
        Взращенная на тонких традициях Возрождения в искусстве, Марго и правда может поддержать беседу в различных кругах общества — и в этом заслуга ее любимой Элеонор.
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 195,
    text:
      `
        И именно сейчас, стоя босиком у холодного окна, так сильно взыграло желание поговорить с тем, кто понял бы без слов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 196,
    text:
      `
        — <i>Я скучаю, ба…
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  },

  {
    id: 197,
    text:
      `
        Постояв у окна еще несколько минут, девушка легла спать, так и оставляя подушку лежать в углу. А новое утро, которое поначалу улыбчиво привечало Марго предрассветными ласковыми лучами солнца, принесло за собой вереницу новых встреч и новых проблем.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('MM', 'Глава 1', 'Часть 3', '0')
        }
      }],
    music: require('../../../../Sounds/MM/Alone.mp3'),
    achievement: { story: EStoriesEn.MM, name: 'Chapter01Part02Completed' },
    imageBack: require('../../../../Images/MM/Backgrounds/Margo_Bedroom.jpg')
  }
])
