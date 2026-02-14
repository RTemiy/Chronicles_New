import { saveEndProgress, scenarioManager, statsManager } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'

scenarioManager.addScenario({ storyName: EStoriesEn.ROR, chapterName: 'Глава 1', partName: 'Часть 4', code: '0' }, [
  {
    id: 0,
    text:
      `
        Мы старались идти неторопливо. Постепенно я настраивал себя на роль высокомерного аристократа. Во время обучения в университете мне приходилось общаться с подобными. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Media/Audio/ROR/City.mp3'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Underground.jpg')
  },

  {
    id: 1,
    text:
      `
        «Так, главное ногу держать повыше, как на марше». 
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Underground.jpg')
  },

  {
    id: 2,
    text:
      `
        Марта повторяла за мной, и получалось у нее неплохо. Но я был уверен, что долго так не выдержу. В один момент даже почувствовал легкую немоту в конечностях, как будто нервы напряглись до предела.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Underground.jpg')
  },

  {
    id: 3,
    text:
      `
        Впрочем, это чувство быстро сошло на нет, лишь только с другого конца мрачного коридора послышалась музыка. Угрожающая, но одновременно завораживающая. Странное чувство, ничего в этой мелодии не было пугающего. Может, атмосфера самого места располагала?
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    music: require('../../../../Media/Audio/ROR/Ball.mp3'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Underground.jpg')
  },

  {
    id: 4,
    text:
      `
        И действительно, выглядело помещение весьма… занимательно. Архитектура совсем не напоминала серые дворцы и деревянные домики Крейса. Нет, это место принадлежало куда более древним временам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 5,
    text:
      `
        Когда я вышел из тоннеля, на мгновение встал как вкопанный. Пышность красок контрастировала с упадком города наверху. 
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 6,
    text:
      `
        Пол был покрыт мраморными плитами, исписанные колонны украшали «бальный зал». Верхняя часть стен, что они поддерживали, полнилась фресками необычайной красоты. По крайней мере для глаза контрабандиста.
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 7,
    text:
      `
        От замешательства отвлекла Марта. Она дернула за рукав костюма и уставилась мне в глаза. Было тяжело определить из-за маски, но мог поклясться, что она страшно обеспокоена. Прокашлявшись, я продолжил путь дальше.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 8,
    text:
      `
        Внутри зала собралась немалая толпа из костюмированных гостей. Удивительно даже, как в не самом крупном городе Крейса имелось столь много аристократов, которые входили в жуткий культ. 
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 9,
    text:
      `
        «Многие теряли рассудок из-за происходящего на улицах ужаса, но неужели столько народу опустилось до происходящей вокруг низости?»
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 10,
    text:
      `
        Видимо, на самое начало мероприятия мы не успели. Часть гостей сидела за немногочисленными столиками, часть неторопливо прохаживалась вдоль колонн, некоторые просто стояли и общались друг с другом.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 11,
    text:
      `
        При всей депрессивной атмосфере, что можно заметить днем… возникало ощущение, будто мы угодили в совершенно иной мир. И почему-то он показался нам не менее жутким, чем та похоронная процессия и заколоченные дома на улицах города. 
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 12,
    text:
      `
        Марта разделяла мое волнение, это было заметно по ее дерганым движениям. Она была напряжена как струна скрипки, готовая оборваться. Испугавшись, что девушка может в любой момент упасть в обморок, я решил несколько ее отвлечь.
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 13,
    text:
      `
        Осмотревшись по сторонам в поисках места, где людей было поменьше, я приметил одну из колонн. Быстро отведя Марту туда, сделал вид, что решил получше рассмотреть фреску на каменной кладке. На деле она была мало примечательна, всего лишь сцена охоты. Но по крайней мере мы могли поговорить вдали от всех.
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 14,
    text:
      `
        — Марта, с вами всё в порядке? 
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 15,
    text:
      `
        — Нет… это место просто пропитано злом.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 16,
    text:
      `
        — Да… я понимаю. Но не забывайте, зачем мы здесь. Без этого никак не выбраться отсюда. В зачумленном городе мы долго не протянем.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 17,
    text:
      `
        — Я… я надеюсь, что моя вера будет достаточно сильна.
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 18,
    text:
      `
        В это мгновение к нам приблизился один из местных слуг, одетый в бархатный костюм. Дорогой даже для элиты Крейса. По всей видимости, богатство бургомистра было куда больше, нежели кто-либо привык считать.
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 19,
    text:
      `
        Нам предложили по бокалу шампанского. Я решил не выходить из образа и принял его. Благо, что доктор Мортимер научил меня, как можно быстро откреплять клюв маски и принимать пищу и воду. 
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 20,
    text:
      `
        Подняв бокал, как бы в знак признательности, я облокотился спиной о колонну, всматриваясь вдаль.
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 21,
    text:
      `
        Но дальше произошло то, чего я никак не ожидал. Марта с силой выхватила бокал у слуги, чуть было не опрокинув все другие. Она спешно ослабила крепления, раскрыв маску птицы, после чего залпом осушила шампанское. 
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 22,
    text:
      `
        Из-за раскрытого клюва маски стало заметно, что и я сам открыл рот в изумлении. Странностей в поведении монахини становилось всё больше, но не успел я произнести хоть слово, Марта спешно проговорила:
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 23,
    text:
      `
        — Я… мне это нужно. Позволит лучше справиться со всем этим.
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 24,
    text:
      `
        — Я думал, у вас обет…
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 25,
    text:
      `
        — Это нужно для дела… я не должна выходить из образа, к тому же. Уверена, мне удастся замолить этот грех усердной службой.
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 26,
    text:
      `
        Интонация Марты была искренней, но меня не покидали старые подозрения. Чем дольше мы проводили время наедине, тем меньше она напоминала мне ту монашку, что тряслась от каждого скверного слова, в ее присутствии.
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 27,
    text:
      `
        — Только не переборщите… для успокоения хватит двух… и залпом пить все же не следовало, маска душная, на жаре… 
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 28,
    text:
      `
        — Прошу меня извинить, — послышался голос позади.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    darkSilhouette: true,
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 29,
    text:
      `
        В этот момент у меня самого душа ушла в пятки. Дыхание перехватило, и я повернулся так резко, что казалось, будто клюв на маске вот-вот слетит. Сразу в голове начали роиться мысли.
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 30,
    text:
      `
        «Неужели нас раскрыли? Но что нас выдало? Из-под масок были видны лица? Или в приличном обществе так бокалы не пьют? Да не, бред какой-то… так, соберись».
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 31,
    text:
      `
        Передо мной стоял крупный и крепкий человек. Лицо его занимала серебряная маска волка. Одет он был в красивый кафтан, а плечи и спину укрывала меховая мантия. Таковые обычно носила знать на востоке страны. В лесистой местности эти люди славились своим охотничьим мастерством.
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 32,
    text:
      `
        Лишь только незнакомец заговорил, я понял, что не ошибся в своих догадках. Он и правда был с востока, его выдавал небольшой акцент. Также было отчетливо слышно, что человек этот уже пьян.
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 33,
    text:
      `
        — Прошу прощения, что прерываю ваше общение со спутницей, господин, но я не мог не заметить вашу заинтересованность этой фреской.
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 34,
    text:
      `
        После этих слов человек в маске волка указал на изображение, что красовалось над колоннами. Мысленно я задался вопросом: неужели этого парня может интересовать простая картина с охотой? Тем не менее нужно постараться ответить столь же учтиво.
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 35,
    text:
      `
        — Да… поразительно, как древние могли так живо передать мастерство охоты.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 36,
    text:
      `
        — Ха! Вот именно, господин! Ну наконец-то кто-то обратил внимание на самое главное. Посмотрите на это движение, посмотрите на эти взгляды. Я как будто снова очутился в Вальсбурге… впрочем, я увлекся. Барон Моргнер, к вашим услугам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 37,
    text:
      `
        Я почувствовал легкое смятение, но за ним меня быстро нагнало осознание одного простого факта: если этот тип начнет что-то подозревать, то пиши пропало. Потому я попытался припомнить хоть то немногое, чему обучался в академии.
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 38,
    text:
      `
        Я учтиво поклонился, насколько низко это следует делать с людьми его сословия. Судя по удовлетворенной улыбке, память меня не подвела.
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 39,
    text:
      `
        — Для меня честь познакомиться с вами. Эрнст Фрост, к вашим услугам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 40,
    text:
      `
        Я опасался, что Марта окончательно растеряется и не догадается, что надо делать. Но как ни странно, девушка протянула ладонь, которую Моргнер учтиво чмокнул поклонившись. То ли ей алкоголь так сразу уверенности придал, либо же к монахам ее сплавили родители-аристократы.
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 41,
    text:
      `
        Марта знала еще об одном правиле светского общества. Представить ее должен был я. Она бросила на меня выжидающий взгляд.
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 42,
    text:
      `
        — Прошу знакомиться. Моя дражайшая супруга: леди Фрида. 
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 43,
    text:
      `
        — Премного рад знакомству, уважаемые. И пользуясь случаем, не могу не изъявить восторг по поводу вашего костюма. Как же уморительна ваша шутка.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 44,
    text:
      `
        После этого барон громко расхохотался, но не привлек этим ровно никакого внимания со стороны других гостей. Все видимо привыкли к подобным выходкам.
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 45,
    text:
      `
        Я решил подыграть этому психопату и тоже засмеялся, правда потише. Еще не хватало, чтобы кто-то действительно стал таращиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 46,
    text:
      `
        Захлебываясь смехом от шутки, что была понятна только одному ему, Моргнер пытался проговорить:
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 47,
    text:
      `
        — Там… снаружи… чернь рвет на себе волосы… боится этой дурацкой простуды… а доктора же все здееесь! И как же они их боятся, да как огня! Эх, чего это мужичье знает о страданиях и удовольствии!
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 48,
    text:
      `
        — Вы в точности разгадали нашу идею, милорд.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 49,
    text:
      `
        — Ох, Фрост! Ну вы действительно не дурак! Но скажите, какого вы рода? 
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 50,
    text:
      `
        Меня прошиб холодный пот. Благо, что маска скрывала выражение лица, иначе Моргнер тотчас бы приметил мое испуганное лицо. Нужно было быстро придумать ответ, и желательно, как можно более убедительный. 
      `,
    buttons: [
      {
        text: 'Представиться военным',
        goTo: 52
      },
      {
        text: 'Представиться торговцем',
        goTo: 66
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 52,
    text:
      `
        Откашлявшись, я статно поклонился и заговорил с отчетливо слышным армейским говором:
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    parallax: 'right',
    achievement: { story: EStoriesEn.ROR, name: 'Warrior' },
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg'),
    stats: [{ story: EStoriesEn.ROR, value: +1, category: 'Choice', id: 'IntroduceAsMilitary' }]
  },

  {
    id: 53,
    text:
      `
        — Мой род служил в кавалерии Его императорского величества со времен битвы под Сакро. 
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 54,
    text:
      `
        На пьяном лице Моргнера засияла смесь чувств удивления и восторга. Он протянул мне ладонь для рукопожатия.
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 55,
    text:
      `
        — Премного рад нашему знакомству! Но признаюсь в своей необразованности, я не слышал о роде Фрост.
      `,
    buttons: [
      {
        text: '',
        goTo: 510
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 510,
    text:
      `
        — Увы, усобицы 30-х годов знатно подкосили наши ряды. Мой предок взял себе иную фамилию, дабы отмежеваться от недостойных родственников. Нам пришлось вновь кровью и потом доказывать силу службой!
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 56,
    text:
      `
        Для пущей уверенности я сжал кулак и ударил им себя в грудь. Судя по лицу Моргнера, этот жест привел его в детский восторг.
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 57,
    text:
      `
        — Значит, мы с вами хлебаем из одной тарелки! Как отрадно встретить среди этих неженок настоящего воина!
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 58,
    text:
      `
        — Эх, жаль маски пока нельзя снимать… но ваш голос мне кажется знакомым. Я не мог видеть вас на приеме графа Миттлабуржского? 
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 59,
    text:
      `
        — Нет, ваша светлость, я несу службу в северных землях, в герцогстве Нортфхельм.
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 60,
    text:
      `
        — Ах! Тоже хорошее местечко! Только вместо волков и медведей знать охотится за ведьмами и колдунами! Скажите, Фрост, доводилось ли вам коптить одну из этих мразей?
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 61,
    text:
      `
        Краем глаза я заметил, что Марта вновь напряглась. Ей наверно было противно слушать о подобных издевательствах. Еще бы, церковь за последние годы столь рьяно их преследовала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 62,
    text:
      `
        — Эм… да, сэр. Хотя азарта в этом мало. И то, не сказать, что принимал активное участие. Еще ни одна не призвала на помощь темные силы… но если не считать попытку оглушить меня своими воплями. Но поверьте, мне это приносило больше удовольствия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 63,
    text:
      `
        После моих слов Моргнер вновь захохотал. Даже столь неумелая ложь как моя убедила этого здоровяка. Он с силой похлопал меня по плечу, шмыгнул носом и пробасил:
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 64,
    text:
      `
        — Ух, славный ты малый Фрост. Я пока погуляю, пообщаюсь. А потом я тебя познакомлю с великолепными господами! Ух, приглянешься ты им точно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 65,
    text:
      `
        После этих слов Моргнер, поправив свой плащ, с самодовольным хмыканием направился в другую сторону зала.
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 66,
    text:
      `
        — Мой род ведет торговлю в южных морях. Иногда приходится и рапирой помахать против заносчивых южан.
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    achievement: { story: EStoriesEn.ROR, name: 'Bartender' },
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 67,
    text:
      `
        Мой ответ, казалось, разочаровал Моргнера. И тем не мене, он оживился, когда речь зашла о борьбе с южанами.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 68,
    text:
      `
        — Хо, так вы не промах и саблей помахать? 
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 69,
    text:
      `
        — С пиратами иначе никак, Ваша светлость. Настоящий мужчина должен всегда быть готов пустить холодную сталь в дело.
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 70,
    text:
      `
        — Ох, не скажите, Фрост. Вот видите того прыща у колонны, что девок лапать пытается? Тоже торгаш, да только сил у него никаких. Он от одного веса меча наверняка на землю повалится.
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 71,
    text:
      `
        После этих слов Моргнер шумно расхохотался, и мне пришлось его в этом поддержать. Даже Марта тихо захихикала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 72,
    text:
      `
        — Что ж… ну, думаю, вы тут со многими найдете общий язык. Например, со старухой Аделаидой, графиней Дамндорфа. Стерва еще та, но кажется, знает всё обо всем по вашей части.
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 73,
    text:
      `
        Я коротко кивнул и поклонился барону. Еще бы понять, кто из собравшихся ведьм был той самой Аделаидой, но наверно это дело времени… 
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 74,
    text:
      `
        — Благодарю за помощь, милорд.
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 75,
    text:
      `
        — Но какая жалость, что вы не из моих родных земель. Скажите, не доводилось ли вам бывать в Миттлабурге? 
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 76,
    text:
      `
        — Эм… нет, сэр. Однако я бывал в Нортфхельме.
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 77,
    text:
      `
        — О! Нортфхельм! Скажите, а посещали ли вы прекрасную забаву местных по сожжению ведьм?! 
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 78,
    text:
      `
        Краем глаза я заметил, что Марта вновь напряглась. Ей наверно было противно слушать о подобных издевательствах. Еще бы, церковь за последние годы столь рьяно их преследовала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 79,
    text:
      `
        — Да, сэр… да. Как забавно они шкварчат, когда пытаются взывать к пощаде. Только к кому? За треском огня-то и не услышит никто, кроме зрителей и палача.
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 80,
    text:
      `
        После моих слов Моргнер вновь захохотал. Даже столь неумелая ложь убедила этого здоровяка. Он с силой похлопал меня по плечу, шмыгнул носом и пробасил:
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 81,
    text:
      `
        — Ух, славный ты малый Фрост. Я пока погуляю, пообщаюсь. А потом я тебя познакомлю с великолепными господами! Ух, приглянешься ты им точно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 82,
    text:
      `
        После этих слов Моргнер, поправив свой плащ, с самодовольным хмыканьем направился в другую сторону зала.
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 83,
    text:
      `
        «Какой же индюк тупой… но похоже, мы нашли наш билет в высший свет». 
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 84,
    text:
      `
        Я увидел, что на меня пристально смотрят черные глаза маски Марты. Неужели ее в самом деле настолько оскорбили мои слова? Да монашки должны вроде поощрять такое отношение к ведьмам.
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 85,
    text:
      `
        — С вами всё в порядке? 
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 86,
    text:
      `
        — Не думала, что вы могли бы сказать такие омерзительные вещи. Даже ради конспирации.
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 87,
    text:
      `
        — Какие? Вы про… ведьм? Вы же… вы же против них сама?
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 88,
    text:
      `
        — Это заблудшие души, нуждающиеся в спасении… и я… я против насилия даже темнейшей души. Мне… мне нужно время побыть одной. Извините. 
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 89,
    text:
      `
        После этих слов Марта отошла в сторону, вновь подойдя к слуге с алкоголем. Я лишь проводил ее взглядом, некоторое время не понимая, что вообще предпринять. 
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 90,
    text:
      `
        «Похоже, мне никогда не удастся понять святош».
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 91,
    text:
      `
        Когда я был маленький, отец привел меня на казнь какого-то колдуна. Сказал, что будет полезно на это посмотреть. Я не спал после этого месяц. Не столько из-за несчастного, что бился в агонии и задыхался от дыма, но от священника, который в экстазе причитал слова проклятия.
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 92,
    text:
      `
        «Марте бы стоило пообщаться с тем парнем».
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 93,
    text:
      `
        Нельзя было оставлять ее одну. Наша конспирация строилась на том, что мы пара. И вот так бы мы сразу разошлись после разговора с одним зазнавшимся бароном? Нет, если уж начали этот спектакль — доведем до конца. 
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 94,
    text:
      `
        Я решил не действовать в лоб, а предложить ей какой-нибудь из местных десертов, благо, что неподалеку шныряли и другие слуги. В частности, мое внимание привлек худощавый юноша в маске кота, что вышагивал среди гостей и раздавал какие-то кексы.
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 95,
    text:
      `
        Приблизившись к нему, я заметил знакомые черты во внешности. Хотя вроде и парень был не сильно примечательный… но меня не покидало ощущение, что мы встречались.
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Hugo_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 96,
    text:
      `
        — Оох! Господин Гарнер! Господин Гарнер! — прокричал слуга, отложив поднос на ближайший стол, — какими судьбами?! 
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Hugo_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 97,
    text:
      `
        Он приблизился ко мне как будто хотел обнять как старого друга, но я отстранился. Как этот сумасшедший узнал меня? И кто он… хотя…
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Hugo_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 98,
    text:
      `
        «Этот голос…»
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 99,
    text:
      `
        — Господин Эбер? 
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 100,
    text:
      `
        — Ох, вы меня запомнили. Какая прелесть! Так какими же… а… ой… я же совсем забыл, правила маскарада… не раскрывать имена гостей… вы же никому не расскажете, что я дал себе слабину? 
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Hugo_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 101,
    text:
      `
        Хьюго говорил скороговоркой, и у меня не выходило поспеть за ходом его мыслей. Я знал этого парня всего ничего, но он всякий раз умудрялся застать меня врасплох. Не в силах найти в закромах разума хоть одну адекватную мысль для ответа, я только и мог вымолвить, что…
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Hugo_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 102,
    text:
      `
        — Да… 
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 103,
    text:
      `
        Я осмотрелся по сторонам, пытаясь понять, слышал ли кто-либо нас. Перед Моргнером-то я представился иначе. Но всё было тихо. По всей видимости, музыка перекрывала громкий голос Хьюго.
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 104,
    text:
      `
        — Итак… чем я могу вам услужить? Десертик? — тут же Хьюго схватился за свой поднос и чуть ли не сунул мне под нос свои кексы.
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Hugo_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 105,
    text:
      `
        — Да… пожалуйста, — брезгливо проговорил я, забирая парочку.
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 106,
    text:
      `
        — О! Вы пришли не одни? Могу ли я поинтересоваться, кто ваша дама сердца? 
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Hugo_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 107,
    text:
      `
        — Ч-что?
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 108,
    text:
      `
        — Ой, бросьте, я же знаю правила. Сюда не приходят одни. Ох, не говорите, я знаю. Такой деловой человек мог бы прийти только с госпожой Аделаидой… графиней Дамндорфа.
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Hugo_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 109,
    text:
      `
        Прежде, чем я смог хоть что-то ответить Хьюго, тот подошел ко мне поближе и жестом указал на скучающую старуху вдалеке. Она была похожа на мумию, съежившуюся и лишенную какой-либо воли в жизни. Старуха безучастно смотрела на стол и перебирала в руках какие-то бусины.
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Adelaida.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 110,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Choice', id: 'IntroduceAsMilitary' }) >= 1
        },
        goTo: 112
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Choice', id: 'IntroduceAsMilitary' }) <= 0
        },
        goTo: 111
      }
    ],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 111,
    text:
      `
        «Похоже, это та ведьма, о которой рассказывал Моргнер».
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 112,
    text:
      `
        Я отвел взгляд, чтобы никто ненароком не подумал ничего лишнего.
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 113,
    text:
      `
        — Ох, простите… вы так отвернулись. Неужели я ошибся? 
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Hugo_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 114,
    text:
      `
        — Вы позволяете себе лишнего, господин Хьюго. Я прибыл с другой госпожой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 115,
    text:
      `
         Важно приподняв взгляд, я высокомерно посмотрел на Хьюго.
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 116,
    text:
      `
        — Я хочу, чтобы мне и моей госпоже преподнесли по бокалу шампанского. Потрудитесь выполнить.
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 117,
    text:
      `
        Слуга почтительно поклонился, чуть не выронив содержимое подноса, и удалился.
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Hugo_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 118,
    text:
      `
        Я же направился к Марте, попутно рассматривая прочих гостей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 119,
    text:
      `
        Мое внимание привлек молодой юноша с короткими черными волосами, что носил небольшую карнавальную маску. Руки его были синими и бледными как у мертвеца. Вокруг него столпились дамы, что подавали ему запрещенные снадобья. Сидящий господин пребывал в забытьи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Longman_S.png'),
    darkSilhouette: true,
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 120,
    text:
      `
        Следующая яркая особа была жгучая длинноволосая брюнетка, которую окружила группа молодцев в черных капюшонах. Они наносили ей порезы на руках и припадали к хлещущей крови, в то время как центральный чуть ли не насильно поил ее вином, к бокалу которого она жадно припадала.
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Girl_S.png'),
    darkSilhouette: true,
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 121,
    text:
      `
        Сильнее всего мне въелась в память сцена, когда в центр зала вывели огромного медведя. Но для дикого зверя он двигался крайне неестественно. Лишь спустя пару секунд я понял, что передо мной живой человек. Точнее, живым он пробыл не слишком долго. 
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Man_Bear.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 122,
    text:
      `
        Его обступила хохочущая толпа молодых господ в масках в виде черепа с кинжалами наперерез. Человека в шкуре медведя держали цепями слуги и не давали ему улизнуть. Как бы тот ни старался, он не мог справиться с нападавшими.
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Man_Bear.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 123,
    text:
      `
        Мрачные фигуры начали кружиться вокруг него как в некоем ритуале, затем быстро нанесли ему несколько ударов по конечностям, повалив того на колени. 
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Man_Bear.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 124,
    text:
      `
        И лишь затем сверкнул последний кинжал, что обрушился на затылок несчастного, прерывая его мучения и даруя сумасшедшим аристократам повод для громкого хохота.
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Man_Bear.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 125,
    text:
      `
        Подавив в себе рвотный позыв, я подошел к Марте, которая стояла, чуть ли не уткнувшись клювом маски в стену. Нужные мысли поддержки не приходили в голову. Если я еле сдерживался, глядя на это зверье, то каково же было ей? 
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 126,
    text:
      `
        Девушка сама сделала первый шаг, повернув ко мне взгляд. По ее дерганым движениям и звукам из-под маски, я понял, что она плачет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 127,
    text:
      `
        Не знаю, что тогда нашло на меня, но я приблизил свое лицо ближе к ее маске и тихо прошептал.
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 128,
    text:
      `
        — Я рядом, Марта. Они не посмеют вас тронуть, пока я здесь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 129,
    text:
      `
        Девушка что-то невнятно промямлила, опустив взгляд, а затем снова подняв.
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 130,
    text:
      `
        — Спасибо, Генрих… я знаю. 
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 131,
    text:
      `
        Немного было странно, что она назвала меня по имени. До этого она так не делала. Но, возможно, так подействовали эмоции… и шампанское.
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 132,
    text:
      `
        Которое наверняка следовало закусить, потому я протянул ей один из кексов.
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageFront: require('../../../../Media/Images/ROR/Items/Cupcake.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 133,
    text:
      `
        — Прошу. Поешьте. Сладкое помогает при плохом настроении. 
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 134,
    text:
      `
        Она бросила взгляд на десерт и благодарно приняла его, тихо прошептав.
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    imageFront: require('../../../../Media/Images/ROR/Items/Cupcake.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 135,
    text:
      `
        — Спасибо.
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 136,
    text:
      `
        В ее голосе определенно звучало умиление. Она начала неторопливо поедать сладость, как вдруг, я заметил, что к нам приближаются.
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 137,
    text:
      `
        Это был Хьюго, что на сей раз нес с собой бокалы шампанского. С поклоном он вручил нам парочку, а затем удалился со словами:
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Hugo_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 138,
    text:
      `
        — Я в восхищении.
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Hugo_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 139,
    text:
      `
        Проводив бывшего торгаша взглядом, я повернулся к Марте и предложил чокнуться, когда мы оба доели свои десерты. 
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 140,
    text:
      `
        Девушка не отказалась. Наши бокалы зазвенели, и их содержимое было осушено до дна за считанные секунды.
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 141,
    text:
      `
        Вдруг я услышал громкий возглас, правда я не разглядел от кого:
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 142,
    text:
      `
        — Вальс! Вальс, дамы и господа!
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Pointing_Man_S.png'),
    darkSilhouette: true,
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 143,
    text:
      `
        Слегка замявшись, я бросил взгляд на Марту. Сейчас мы могли привлечь к себе внимание. Если я еще помнил пару движений с уроков танцев, то вот Марта явно их не проходила. Вряд ли они в монастыре плясали.
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 144,
    text:
      `
        Но и на сей раз девушка взяла инициативу на себя, протянув мне руку. Я был поражен. Неужели она и правда была из аристократических кругов до того как очутилась при церкви?
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 145,
    text:
      `
        Я послушно принял ее ладонь, и мы оба вышли в центр зала. Я не видел лица девушки сквозь маску, но то ли алкоголь ударил мне в голову, то ли наше примирение так подействовало, но сейчас, я не хотел отрывать от нее взгляда.
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 146,
    text:
      `
        Мрачный оркестр заиграл свою мелодию. И тут же проклятые души закружились в танце. Пышные платья развевались вокруг подобно крыльям летучей мыши. Господа в бархатных костюмах вели своих спутниц.
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    music: require('../../../../Media/Audio/ROR/Romantic.mp3'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 147,
    text:
      `
        Я присматривался к их движениям и старался повторять. Мы двигались с Мартой неуклюже, на первых порах. Пар раз я чуть было не наступил ей на ногу. Она же несколько раз отдавила мне носки.
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 148,
    text:
      `
        Из под мрачной маски птицы своей спутницы я услышал тихие вздохи и даже всхлипывания. Повинуясь непонятному на тот момент чувству, я на мгновение отвлекся от вальса и приставил ладонь к ее подбородку, приподняв его на уровень моих глаз.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 149,
    text:
      `
        Марта смотрела на меня долго и пронзительно, застыв, пока весь мир вокруг бесновался в безумной пляске. Затем, опустив голову вниз, она резко присоединилась к танцу, вливаясь в общий ритм.
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 150,
    text:
      `
        В этот момент уже скорее мне пришлось поспевать за ней. От ее былой неуклюжести не оставалось ни следа, мы кружились, меняли позиции, не отводили друг от друга взгляда.
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 151,
    text:
      `
        От нее пахло теми прелестными духами, что подарил ей доктор Мортимер. Зажмурившись на мгновение и поддавшись очарованию этой возвышенной музыки, я будто оказался в эфирном сне, в объятиях прекрасной дамы. Умерло всё: воспоминания о прошлом, о нашей цели. Оставался только танец.
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 152,
    text:
      `
        И в этом забытьи я не заметил как музыка смолкла, а Марта все еще удерживала меня в объятиях. Я не хотел их разрывать, и лишь громкие аплодисменты вырвали нас из царства снов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 153,
    text:
      `
        Толпа бесновалась и веселилась, обращая восторженные взгляды к музыкантам. Краем глаза, однако, я заметил ту самую старую графиню, на которую мне ранее указывал Хьюго. 
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    music: require('../../../../Media/Audio/ROR/Ball.mp3'),
    imageFront: require('../../../../Media/Images/ROR/Persons/Adelaida.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 154,
    text:
      `
        Она в танцах участия не принимала, скучающе ковыряя серебряной ложкой какой-то десерт. Из-за темного цвета ее платья мне показалось, что она пребывает в трауре, но эту мысль я быстро отбросил. 
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Adelaida.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 155,
    text:
      `
        Если бы она действительно носила траур, то вряд ли бы шлялась по таким увеселениям. Если пыталась так забыться… то вряд ли у нее это получалось. Да и потом, это же маскарад.
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Adelaida.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 156,
    text:
      `
        «Может, она так черную ворону изображает, хе». 
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 157,
    text:
      `
        И всё же я не забыл слова об исключительной важности данной дамочки. Быть может, мне бы удалось разговорить ее? Так хотя появится мнимый шанс покинуть город. 
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 158,
    text:
      `
        «Она же не из этих земель и наверняка не собирается здесь помирать с этим клоповником. Значит, у нее есть возможность выбраться из города?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 159,
    text:
      `
        Мое замешательство заметила и Марта, слишком уж долго я пялился на ту старуху. Она тихо прошептала мне, приблизив лицо так близко, что чуть было не ткнула своим птичьим клювом.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 160,
    text:
      `
        — На что вы обратили внимание, Генрих?
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 161,
    text:
      `
        — Видите ту даму? Ее мне презентовали как влиятельную торговку. Она явно не из здешних краев. И это нам на руку. Думаю, надо завязать с ней диалог, пока эта вакханалия не разгорелась сильнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 162,
    text:
      `
        — Д-да, да, вы правы. И лучше вам пойти одному. Но прошу, не задерживайтесь. Мне страшно оставаться здесь наедине с этими падшими душами.
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 163,
    text:
      `
        Однако ее согласие не могло скрыть стойкое нежелание расставаться со мной после танца. Признаться честно…  но мне самому не хотелось так быстро возвращаться к делам. И всё же я мог упустить необходимое время…
        
      `,
    buttons: [
      {
        text: 'Уединиться с Мартой',
        goTo: 164,
        gift: true
      },
      {
        text: 'Поговорить с Аделаидой сразу',
        goTo: 195
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 164,
    text:
      `
        Я решил побыть с Мартой еще немного. Несмотря на те ужасы, что я видел этим вечером, этот танец, ее испуг… мне очень хотелось не уходить от нее, боясь, что с ней что-то случится.
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    stats: [{ story: EStoriesEn.ROR, value: +1, category: 'Choice', id: 'GoWithMarthaBall' }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 165,
    text:
      `
        — Вы уверены? Вы выглядите встревоженными. 
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 166,
    text:
      `
        — Я встревожена с самого момента, как это всё началось. Я… я справлюсь. Идите, Генрих. 
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 167,
    text:
      `
        Покачав головой, я аккуратно взял ее под руку и повел в уединенный уголок зала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 168,
    text:
      `
        — Генрих? Что вы делаете? 
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 169,
    text:
      `
        — Пытаюсь вам помочь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 170,
    text:
      `
        Этого, по всей видимости, хватило, чтобы успокоить Марту. Добравшись до голой стены, я осмотрелся по сторонам. Стоявшая рядом колонна плотно закрывала нас от посторонних взглядов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 171,
    text:
      `
        После этого, скрепя сердце, я снял маску. Длинные волосы, собранные под капюшоном, мокрые от духоты помещения, упали мне на плечи, а сам я вытер потный лоб. 
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 172,
    text:
      `
        Марта испуганно ахнула и прижала руки ко рту.
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 173,
    text:
      `
        — Генрих, что вы делаете? Мы же нарушаем правила маскарада...
      `,
    buttons: [
      {
        text: '',
        goTo: 500
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 500,
    text:
      `
        — По-моему, это и самое интересное.
      `,
    buttons: [
      {
        text: '',
        goTo: 501
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 501,
    text:
      `
        Я по-глупому улыбнулся, что по всей видимости, напугало Марту еще сильнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 174,
    text:
      `
        — Немедленно оденьте… вам ударил алкоголь в голову? 
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 175,
    text:
      `
        Я положил руки ей на плечи, сдул непослушный локон с глаз и постарался выдать максимально добродушную улыбку, на которую только был способен.
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 176,
    text:
      `
        — Марта, успокойтесь. Нас никто не заметит. Я снял маску, чтобы вы могли увидеть мое лицо. Сейчас это важно.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    music: require('../../../../Media/Audio/ROR/Romantic.mp3'),
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 177,
    text:
      `
         <p>Она слегка одернулась, как будто испугалась, но затем перевела дух и продолжила смотреть мне в глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 178,
    text:
      `
        — Я понимаю, как вам страшно. Я понимаю, что вы совершенно были к такому не приспособлены. Происходящее вокруг ужасно даже для меня. Но я хочу вам сказать, вы держитесь молодцом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 179,
    text:
      `
        Она долго смотрела на меня, пока я умолк, а затем сама сняла маску. Только сейчас я увидел, как она раскраснелась, а с ее огненно-рыжими волосами так и вовсе казалось, будто ее покрыло пламя.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 180,
    text:
      `
        — Простите, если из-за меня вы переживаете еще сильнее. Я постараюсь унять свои эмоции.
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 181,
    text:
      `
        Повинуясь непонятному мне порыву чувств, я приставил два пальца к ее подбородку и зафиксировал ее уровень глаз так, чтобы она смотрела в мои. Я хотел показать ей свою искренность, надеялся, что она в них отпечаталась.
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 182,
    text:
      `
        — Я же уже сказал. Вы отлично справились. И… признаться честно, мне понравилось с вами танцевать. Хотя вас этому явно не учили. Но я чувствую, что это идет у вас от сердца. А оно у вас доброе и прекрасное как…
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 183,
    text:
      `
        — Как что? 
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 184,
    text:
      `
        «Как и вы сами».
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 185,
    text:
      `
        — Как и любовь нашего создателя.
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 186,
    text:
      `
        Марта смущенно заулыбалась приближаясь. Она положила свою руку на мое предплечье, и все же в ее взгляде будто бы сквозило какое-то разочарование. 
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 187,
    text:
      `
        — Спасибо вам за теплые слова, господин Гарнер. Быть может… вы бы могли научить меня? Сомневаюсь, что это помешает службе Создателю… если у меня к этому и правда талант.
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 188,
    text:
      `
        Я коротко кивнул и сам приблизился к ней, но вдруг осекся. Во-первых, меня смутил шумный смех вдали. И он же позволил мне слегка остыть.
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 189,
    text:
      `
        «Что ты делаешь, болван? Мало того, что сейчас такое происходит… так она же еще монашка».
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 190,
    text:
      `
        — Тогда договорились. А пока… мы можем вернуться к делам, если вы чувствуете себя спокойнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 191,
    text:
      `
        — Да… так гораздо лучше.
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 192,
    text:
      `
        Мы оба одели наши маски и вернулась в центр залы. Бросив последний взгляд на Марту, я коротко произнес.
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 193,
    text:
      `
        — Я не задержусь.
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 194,
    text:
      `
        — Я знаю. 
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    stats: [
      { story: EStoriesEn.ROR, value: +2, category: 'Person', id: 'Martha' }],
    message: 'Доверие Марты к вам значительно увеличивается',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 195,
    text:
      `
        Я позволил себе положить руку на плечо девушки и тихо проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    music: require('../../../../Media/Audio/ROR/Ball.mp3'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 196,
    text:
      `
        — Обещаю, что не задержусь надолго.
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 197,
    text:
      `
        Марта кивнула, и из-под ее маски я услышал тяжелый вздох. Как бы мне не хотелось подбодрить ее, все же время наше было не безгранично.
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 198,
    text:
      `
        Не тратя времени зря, я удалился от нее с поклоном и направился ближе к столику, где сидела та самая графиня Аделаида.
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    music: require('../../../../Media/Audio/ROR/Ball.mp3'),
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 199,
    text:
      `
        Поначалу аристократка не обращала на меня никакого внимания, и только лишь спустя полминуты как я встал возле ее столика, она подняла свое морщинистое лицо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Adelaida.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 200,
    text:
      `
        И лучше бы она этого не делала, ведь оно напоминало старого грифа, которого отвлекли от пожирания падали.
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Adelaida.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 201,
    text:
      `
        Я учтиво поклонился и скрестил руки со спиной:
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 202,
    text:
      `
        — Позвольте выразить свое почтение, госпожа Аделаида. 
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 203,
    text:
      `
        Она смерила меня презрительным взглядом, но затем махнула костлявой рукой и произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 204,
    text:
      `
        — Откуда вы меня знаете? Чем обязана, господин…? 
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Adelaida.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 205,
    text:
      `
        — Фрост. Эрнст Фрост, к вашим услугам. И позвольте, как же не узнать столь уважаемую графиню Дамндорфа, что выглядит столь вымотанной в радостный праздник.
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 206,
    text:
      `
        Старуха остановила меня жестом ладони, после чего проворчала скрипучим голосом:
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 207,
    text:
      `
        — Вакханалия и оргия, не более. Я вас не знаю, Фрост, и не желаю заводить знакомства. Лесть — явно не ваш конек. Говорите, что вам нужно, да побыстрее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Adelaida.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 208,
    text:
      `
        «Этого следовало ожидать. По одному лицу этой стервозной бабки было ясно, что нормального диалога с ней не выйдет. Ладно, меняем тактику». 
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 209,
    text:
      `
        — Деловой подход, я ценю это в знатных торговых домах. Госпожа, имею честь доложить, что я тоже владею небольшим торговым предприятием.
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 210,
    text:
      `
        — Слыхом не слыхивала ни о каких Фростах. Я знаю все торговые дома, и малые тоже. Либо вы мне врете, либо торгуете без соизволения императора. В любом случае, результат всё тот же. Мне с вами говорить не о чем.
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Adelaida.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 211,
    text:
      `
        «Ну молодец, Гарнер, отлично подготовился. Так, попробуем импровизацию». 
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 212,
    text:
      `
        — Прошу меня извинить, но я скорее посредник одного господина, из знатных. И он просил меня встретиться с вами.
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 213,
    text:
      `
        — То же мне… бальный сводник. Ну? И от кого вы?
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Adelaida.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 214,
    text:
      `
        Я откашлялся и проговорил вкрадчивым голосом:
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 215,
    text:
      `
        — Андреас Гарнер… вам о чем-либо говорит это имя?
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 216,
    text:
      `
        Старуха поморщилась, с недоверием смотря на меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 217,
    text:
      `
        — Да? И как нынче дела в Шварцгебете?
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Adelaida.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 218,
    text:
      `
        — Не могу знать. Господин проживает в Вездштадте.
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 219,
    text:
      `
        Аделаида длительное время продолжала изучать меня, но затем лицо ее стало куда более спокойным. Морщины разгладились.
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 220,
    text:
      `
        — Что ж… с этого и стоило начинать. Как поживает господин Гарнер?
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Adelaida.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 221,
    text:
      `
        «Надеюсь, сейчас валяется и вопит от своей мигрени». 
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 222,
    text:
      `
        — Усилились головные боли, но в остальном господин в добром здравии. 
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 223,
    text:
      `
        — Почему он лично не отправил письмо? Мы, конечно, давно не вели переписку, но в последний раз расстались в хороших отношениях.
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Adelaida.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 224,
    text:
      `
        — Я проезжал мимо по делам семьи, и до меня дошли слухи о вашей остановке здесь. Пришлось задержаться, а город закрылся на карантин. Потому я связался с господином для дальнейших инструкций, и вот, мне велели найти вас. 
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 225,
    text:
      `
        Графиня шумно вздохнула и махнула рукой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 226,
    text:
      `
        — Я отдыхаю. И завтра на рассвете уезжаю. Бургомистр дал такое разрешение. Сейчас у меня нет настроения на какие-либо сделки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Adelaida.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 227,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Item', id: 'Perfume' }) >= 1
        },
        goTo: 228
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Item', id: 'Perfume' }) <= 0
        },
        goTo: 246
      }
    ],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 228,
    text:
      `
        И тут же меня осенило!
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 229,
    text:
      `
        «Не зря я тогда потратился у того придурка Хьюго».
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 230,
    text:
      `
        — Прошу, ваша светлость. С южных морей, новейшая партия. Господин посчитал, что это вас заинтересует.
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 231,
    text:
      `
        Я выхватил из-под плаща небольшую бутыль с причудливым узором, поставив ее на стол перед графиней.
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    imageFront: require('../../../../Media/Images/ROR/Items/Perfume.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 232,
    text:
      `
        Если ранее лицо старухи разгладилось от морщин, сейчас оно, казалось, помолодело лет на 20. Она жадно вцепилась длинными костлявыми пальцами во флакон и принялась вертеть в руках.
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Adelaida.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: -1, category: 'Item', id: 'Perfume' }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 233,
    text:
      `
        В один момент она приоткрыла бутыль и принюхалась. От запаха зажмурилась и сладко заулыбалась. Теперь она не напоминала старую облезлую ворону, но самую что ни на есть приятную леди-старушку.
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Adelaida.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 234,
    text:
      `
        — Признаюсь, аромат меня заинтересовал…
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Adelaida.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 235,
    text:
      `
        «Да ты от него, старая сука, в мир грез улетела чуть ли не скорее, чем от твоего порошка».
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 236,
    text:
      `
        — Но меня волнует вопрос. Что господин Гарнер хочет за него взамен?
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Adelaida.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 237,
    text:
      `
        — Что вы, миледи. Это подарок. Так сказать, первая проба перед крупными поставками… однако, я бы хотел попросить об одной маленькой услуге…
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 238,
    text:
      `
        — Слушаю, юноша? — проговорила старуха с теплотой в голосе.
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Adelaida.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 239,
    text:
      `
        — К сожалению, я стеснен в возможности выехать из сего славного города. Господин надеялся, что вы поможете мне в этом. Просто возьмете обозом меня и моих слуг.
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 240,
    text:
      `
        — Сущие пустяки, милый. Приходите завтра в 8 утра, на Ткацкую улицу. Там будет стоять моя карета, не ошибетесь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Adelaida.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 241,
    text:
      `
        «Шикарно. Наконец-то, успех!»
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 242,
    text:
      `
        Я был на седьмом небе от счастья, и хорошо, что мою радость не было видно. Приподняв клюв, я протянул ладонь, чтобы поцеловать ладошку Аделаиды.
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 243,
    text:
      `
        Аделаида ухмыльнулась и протянула свою сморщенную руку, украшенную драгоценными каменьями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 244,
    text:
      `
        «Боже, я после этого рот с мылом помою». 
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 245,
    text:
      `
        Я вновь закрыл клюв на маске, после чего откланялся и отошел прочь с дозволения Аделаиды. Ее сейчас больше интересовал мой подарок.
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    achievement: { story: EStoriesEn.ROR, name: 'Busyman' },
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 246,
    text:
      `
        «Черт, нормально я пошел на сделку с торгашами. Что ей, шляпу Мортимера продать?»
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 247,
    text:
      `
        Я шумно вздохнул и отрицательно покачал головой:
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 248,
    text:
      `
        — Боюсь, господин только пожелал передать о возможности скорейшей встречи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 249,
    text:
      `
        Аделаида отмахнулась:
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Adelaida.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 250,
    text:
      `
        — Я уже сказала, выезжаю отсюда на рассвете. Если он хочет меня застать, пусть отправляет посыльного в поместье. Делами я занимаюсь там, а не на таких пошлых вечеринках.
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Adelaida.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 251,
    text:
      `
        После этого старуха отвернулась, явно давая понять, что дальше не желает продолжать диалог.
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 252,
    text:
      `
        Мысленно проклиная себя, я направился прочь раскланиваясь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 253,
    text:
      `
        «Теперь нужно придумать что-то еще… завести другие знакомства. Ночь только начинается, может, шанс еще есть?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 254,
    text:
      `
        Я уже собирался двинуться обратно к Марте, как вдруг путь мне преградил один из моих новых знакомых.
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 255,
    text:
      `
        По улыбке барона Моргнера можно было легко определить, что выпил он за сегодняшний вечер чрезмерно много, но это не мешало ему твердо стоять на ногах. Даже речь его была вполне нормальная, за исключением его тяги растягивать гласные.
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 256,
    text:
      `
        — Фрост! Ну сколько можно оставаться в обществе той ведьмы? Пойдем, я хочу вас с кое-кем познакомить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 257
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 257,
    text:
      `
        «Вот только этого мне не хватало».
      `,
    buttons: [
      {
        text: '',
        goTo: 258
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 258,
    text:
      `
        Я хотел было вежливо отказаться от предложения пьяницы, уже даже выставил руки для отрицательного жеста, но Моргнер даже и слова вымолвить не дал.
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 259,
    text:
      `
        Он схватил меня за руку и потащил к одному из столиков. Следовало признать, что хватка у него была крайне сильная. 
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 260,
    text:
      `
        Понимая, что отвязаться от этого идиота мне пока не удастся, я решил ему подыграть, но по возможности, покинуть его компанию.
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 261,
    text:
      `
        Моргнер довел меня до столика, где сидела парочка его дружков. Обоих он представил по очереди.
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 262,
    text:
      `
        — Фрост, прошу знакомиться — виконт Кёниг. Один из наиболее прославленных воинов Его императорского величества и гроза восточных свиней! Ха-ха!
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 263,
    text:
      `
        Передо мной сидел немолодой мужчина одетый в дорогие черные доспехи. У него был широкий лоб, длинные седые волосы аккуратно уложенные и покоящиеся на плечах. Острый, как у хищной птицы нос, и пронзительный взгляд был ей подстать.
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Konig.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 264,
    text:
      `
        Он носил небольшую черную маску, закрывающую его глаза. Недовольный взгляд Кёнига явно давал понять, что ему не слишком пришлась по душе характеристика от Моргнера, но он предпочел оставить свои мысли при себе.
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Konig.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 265,
    text:
      `
        — Рад знакомству, Фрост, Моргнер нам все уши за вечер прожужжал о вас.
      `,
    buttons: [
      {
        text: '',
        goTo: 266
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Konig.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 266,
    text:
      `
        Захохотав, барон указал мне на второго собеседника.
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 267,
    text:
      `
        — Милости просим, барон Шпильман. Недавно вернулся с западной границы на доклад лично Его императорскому величеству.
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 268,
    text:
      `
        Шпильман выглядел как коренастый и сложенный воин, примерно 40 лет от роду. У него были огненно-рыжие волосы. Всем своим видом он напоминал северного солдата, казалось даже, что его глаза прожигают собеседника словно пламя.
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Spieleman.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 269,
    text:
      `
        Шпильман носил вычурную маску, которую и описать было затруднительно. Когда он заговорил, я отчетливо услышал отсутствие нескольких зубов, из-за чего он глотал часть звуков.
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Spieleman.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 270,
    text:
      `
        — Пр’ятно познакомиться, Фхост! — фыркнул барон.
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Spieleman.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 271,
    text:
      `
        Мне ничего не оставалось, кроме как учтиво поклониться обоим. Представившись уже от своего лица, я послушно уселся за предложенный стул.
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 272,
    text:
      `
        «Что-то вы все сволочи далеко от столицы сидите. Неужели тут половина аристократов Крейса в Гласвер решила отправиться покутить?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 273,
    text:
      `
        — Итак, господа, чем моя скромная персона обязана столь пристальному вниманию знатных лиц?
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 274,
    text:
      `
        — Моргнер упомянул, что вы имели честь бывать на севере. Как нынче там обстоят дела? 
      `,
    buttons: [
      {
        text: '',
        goTo: 275
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Konig.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 275,
    text:
      `
        «Холодно, как и всегда, старый ты урод. Что ты хочешь именно услышать-то?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 276
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 276,
    text:
      `
        — Когда я был там в последний раз, всё более-менее пришло в норму. Чернь на время поутихла после восстания Крейна. Разве что морские бандиты иногда доставляют неудобства. 
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 277,
    text:
      `
        — Вот как? Я думал, с местными конунгами удалось заключить союз. Нам бы не хотелось, чтобы кто-то грабил наши тылы, когда на востоке неспокойно.
      `,
    buttons: [
      {
        text: '',
        goTo: 278
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Konig.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 278,
    text:
      `
        «И как раз, куда еду я». 
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 279,
    text:
      `
        — Скорее всего это те, кто отказываются подчиняться своим царькам. Думаю, их быстро усмирят свои же. Но что за проблемы на востоке? 
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 280,
    text:
      `
        — Его Императорское величество, в мудрости своей, пытается решить вопрос с распространением болезни. Как считается, какие-то лекари с востока уже научились с ней бороться…
      `,
    buttons: [
      {
        text: '',
        goTo: 281
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Konig.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 281,
    text:
      `
        — Как пить дать, от них всё и пошло. Они там у себя творят такое, что и в этом подземелье побледнели бы.
      `,
    buttons: [
      {
        text: '',
        goTo: 282
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Spieleman.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 282,
    text:
      `
        — Кхм-кхм. Так вот, к сожалению, делиться своими изысканиями они отказываются, заблокировав дипломатические каналы. На границах уже начали возникать стычки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Konig.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 283,
    text:
      `
        — А на западе тоже несладко. Я уверен, что это восточные свиньи всё устраивают. Болезнь они занесли, северян подкупили они. И вот, на западе крестьяне снова начинают волнения.
      `,
    buttons: [
      {
        text: '',
        goTo: 284
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Spieleman.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 284,
    text:
      `
        — И что такого? Раздавим как клопов, так было всегда.
      `,
    buttons: [
      {
        text: '',
        goTo: 285
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 285,
    text:
      `
        — А нельзя! Они не восстают, но отказываются работать, ходят как паломники и вопят о всеобщем покаянии. Этих психов церковь запрещает трогать, мол, святые люди. Только это и спасет нас от болезни.
      `,
    buttons: [
      {
        text: '',
        goTo: 286
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Spieleman.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 286,
    text:
      `
        — Пхе! От болезни нас спасут только запертые двери и хороший отдых в имениях.
      `,
    buttons: [
      {
        text: '',
        goTo: 287
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 287,
    text:
      `
        В который раз за вечер я был несравненно рад, что мое лицо не видно из-за плотной маски чумного доктора. 
      `,
    buttons: [
      {
        text: '',
        goTo: 288
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 288,
    text:
      `
        «Они что, хотят ввести меня в сводку военных кампаний? Самое то, на извращенных оргиях, когда все ужратые в хлам».
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 289,
    text:
      `
        Пока что моя новая компания переключилась на свои закуски и напитки, я решил все же вернуться к Марте. Благо, что она стояла неподалеку и периодически посматривала в мою сторону, как бы ожидая, когда я закончу.
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 290,
    text:
      `
        И только я уже собирался подняться и пойти прочь, как вдруг в зале послышался громкий голос.
      `,
    buttons: [
      {
        text: '',
        goTo: 291
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 291,
    text:
      `
        — Дамы и господа, прошу любить и жаловать. Владыка этого вечера и этой ночи! 
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Pointing_Man_S.png'),
    darkSilhouette: true,
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 292,
    text:
      `
        И лишь только голос глашатая смолк, в зал вошел, а вернее ввалился на коротких ножках, тот самый глава праздника. Бургомистр Лоренц Ульбрихт.
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    parallax: 'left',
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 293,
    text:
      `
        Сам он не носил маску, но выглядел столь вычурно, что этого и не требовалось. Он был чрезмерно толст, голова его была бритая, лишь на затылке были видны серые следы от волос.
      `,
    buttons: [
      {
        text: '',
        goTo: 294
      }],
    parallax: 'left',
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 294,
    text:
      `
        Всем своим видом этот человек напоминал довольную свинью. Голова его, казалось, была несколько больше тела, да и сам он был сложен несколько непропорционально, как будто то был некий жуткий гомункул.
      `,
    buttons: [
      {
        text: '',
        goTo: 295
      }],
    parallax: 'left',
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 295,
    text:
      `
        Толстяк шагнул в центр зала и медленно осмотрел присутствующих. Спустя несколько мгновений он расставил руки в приветственном жесте. Этот жест был встречен взрывом аплодисментов. Внимание каждой души было теперь обращено к этой персоне.
      `,
    buttons: [
      {
        text: '',
        goTo: 296
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 296,
    text:
      `
        — Я приветствую вас, мои дорогие гости, прошу простить за столь сильное опоздание. Слишком много дел нынче скопилось… надо же успеть многое, пока все не отправились в Царствие Истинное.
      `,
    buttons: [
      {
        text: '',
        goTo: 297
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 297,
    text:
      `
        Пока он произносил эту приветственную речь, я еле сдерживал позывы засмеяться. Эта жирная рослая детина квакал слова таким высоким голосом, что от него стекла могли бы треснуть. Правда дальше мне было совсем не до смеха.
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 298,
    text:
      `
        — Не в последнюю очередь меня задержало разбирательство с одним из безбилетников, что решился проникнуть на наш праздник! Но думаю, мы всё равно удовлетворим его желания. 
      `,
    buttons: [
      {
        text: '',
        goTo: 299
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 299,
    text:
      `
        Тут у меня перехватило дыхание, ибо с другого конца зала, люди в черном ввели в зал связанную фигуру с мешком на голове. Они остановились в центре.
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 300,
    text:
      `
        Быстро сняв «маску», слуги бургомистра явили собравшимся лицо Вига.
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Vig.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 301,
    text:
      `
        Я тут же перевел взгляд на Марту, которая, разумеется, вышла из образа и шумно вздохнула, приставив руки к лицу. Она начала медленно приближаться к центральной части зала, где и стоял бургомистр.
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 302,
    text:
      `
        «Чертов малолетний придурок… неужели все же решил последовать за нами?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 303
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 303,
    text:
      `
        Становилось очевидно, что ситуацию нужно было брать в свои руки, причем как можно скорее. Марта себя выдаст, как пить дать… да и еще не было до конца ясно, как поступят с Вигом.
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 304,
    text:
      `
        Я повернулся к Моргнеру и попытался состроить воодушевленный тон.
      `,
    buttons: [
      {
        text: '',
        goTo: 305
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 305,
    text:
      `
        — Хе-хе, да, тупой мальчишка. А что с ним сейчас будет?
      `,
    buttons: [
      {
        text: '',
        goTo: 306
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 306,
    text:
      `
        — О, сейчас будет самое интересное. Настоящее кровавое зрелище. Вон тот парень в черной маске, что возле бургомистра, может делать такое… ух, стены побледнеют от ужаса.
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 307,
    text:
      `
        Благо, мне хватило самообладание, и дыхание у меня не перехватило, но действовать нужно было быстро. И я выпалил первое, что пришло на ум.
      `,
    buttons: [
      {
        text: '',
        goTo: 308
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 308,
    text:
      `
        — Хм… какая жалость, что погибает такой материал. Мне бы пригодились слуги… и этот, судя по всему, как раз подойдет. А за ценой я не постою.
      `,
    buttons: [
      {
        text: '',
        goTo: 309
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 309,
    text:
      `
        ! Начало условия: Игрок выбрал “Представиться военным” / Игрок выбрал “Представиться торговцем”. 
      `,
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Choice', id: 'IntroduceAsMilitary' }) >= 1
        },
        goTo: 310
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Choice', id: 'IntroduceAsMilitary' }) <= 0
        },
        goTo: 353
      }
    ],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 310,
    text:
      `
        Барон бросил на меня вопросительный взгляд, его же примеру последовали и его дружки. В один момент мне показалось, что сейчас я совершил крупнейшую ошибку за последние несколько дней. 
      `,
    buttons: [
      {
        text: '',
        goTo: 311
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 311,
    text:
      `
        Но затем круглое лицо барона исказила улыбка, и тот тихо засмеялся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 312
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 312,
    text:
      `
        — Понимаю, Фрост, понимаю… в походах всегда нужен оруженосец. Как военный человек понимаю.
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 313,
    text:
      `
        Потерев подбородок, барон коротко закивал, жестом попросил меня встать и повел прямиком к бургомистру. 
      `,
    buttons: [
      {
        text: '',
        goTo: 314
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 314,
    text:
      `
        Следуя за Моргнером, я быстро отыскал в толпе Марту и чуть ли не силой потащил за собой, зашипев, чтобы она помалкивала.
      `,
    buttons: [
      {
        text: '',
        goTo: 315
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 315,
    text:
      `
        Моргнер достаточно быстро добрался до бургомистра, перед нами расступались все остальные гости. Вскоре он поравнялся перед жирным главой города.
      `,
    buttons: [
      {
        text: '',
        goTo: 316
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 316,
    text:
      `
        Судя по выражению лица Ульбрихта, барон был его старым приятелем. Он широко ему улыбнулся и положил руки на плечи.
      `,
    buttons: [
      {
        text: '',
        goTo: 317
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 317,
    text:
      `
        — О, мой любимый барон, решили понаблюдать за всем из первых рядов? 
      `,
    buttons: [
      {
        text: '',
        goTo: 318
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 318,
    text:
      `
        — Лоренц, дорогой друг. Позволь тебе представить сего славного господина и его спутницу. Фамилия — Фрост. И ты не представляешь, как он сегодня угодил нам этим вечером. Таких нужно держаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 319,
    text:
      `
        Бургомистр тепло нам улыбнулся и поклонился, потянув руку к ладони Марты, поцеловав ее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 320
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 320,
    text:
      `
        Я не услышал из под маски девушки ни звука. Хотя бы на мгновение мои переживания немного поутихли.
      `,
    buttons: [
      {
        text: '',
        goTo: 321
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 321,
    text:
      `
        — Премного рад знакомству, Фрост. 
      `,
    buttons: [
      {
        text: '',
        goTo: 322
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 322,
    text:
      `
        Я ответил на приветствие поклоном и важно проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 323,
    text:
      `
        — Не передать словами, как я рад знакомству с таким… славным мужем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 324
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 324,
    text:
      `
        — Ха-ха! Обходительности этому чертяке не занимать! Так вот, мой новый дорогой друг все уши прожужжал этим вечером, как ему бы хотелось заполучить в слуги кого-нибудь… Лоренц, я бы хотел закрепить нашу и вашу с ним дружбу, и выкупить мальчишку.
      `,
    buttons: [
      {
        text: '',
        goTo: 325
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 325,
    text:
      `
        Бургомистр поначалу оторопел, широко раскрыв рот. Он вытер со лба испарину и что-то пробурчал. По звуку было похоже, будто он вот-вот задохнется. 
      `,
    buttons: [
      {
        text: '',
        goTo: 326
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 326,
    text:
      `
        Но, к сожалению, этого не произошло, и толстяк перевел взгляд на меня. На его лице блеснула слабая улыбка.
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 327,
    text:
      `
        — Раз за вас поручился такой человек, то я не смею препятствовать столь чудной сделке и с радостью поделюсь этим живым даром… но сперва, Фрост… раз о вас столько хвалебных речей… мне не терпится поговорить с вами… ведь вы в первый раз на нашем празднике. Ваша спутница может подождать тут.
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 328,
    text:
      `
        «Всё или ничего».<p> <p>— Разумеется, ваша светлость, почту за честь.
      `,
    buttons: [
      {
        text: '',
        goTo: 329
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 329,
    text:
      `
        Ульбрихт коротко хмыкнул, после чего повел меня прочь из зала, в одну из комнат. 
      `,
    buttons: [
      {
        text: '',
        goTo: 330
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 330,
    text:
      `
        Помещение напоминало скорее жертвенный языческий алтарь. По центру комнаты красовалось углубление, наполненное засохшей кровью. 
      `,
    buttons: [
      {
        text: '',
        goTo: 331
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Burgomeister_Cabinet.jpg')
  },

  {
    id: 331,
    text:
      `
        Стена передо мной была в нескольких местах застеклена. На ней виднелись причудливые чудовищные фигуры. 
      `,
    buttons: [
      {
        text: '',
        goTo: 332
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Burgomeister_Cabinet.jpg')
  },

  {
    id: 332,
    text:
      `
        Ульбрихт встал рядом со мной и указал на витражи.
      `,
    buttons: [
      {
        text: '',
        goTo: 333
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Burgomeister_Cabinet.jpg')
  },

  {
    id: 333,
    text:
      `
        — Скажите, Фрост, вы знаете, кто здесь изображен? 
      `,
    buttons: [
      {
        text: '',
        goTo: 334
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Burgomeister_Cabinet.jpg')
  },

  {
    id: 334,
    text:
      `
        — Эм… нечисть, милорд? 
      `,
    buttons: [
      {
        text: '',
        goTo: 335
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Burgomeister_Cabinet.jpg')
  },

  {
    id: 335,
    text:
      `
        — Так бы сказал наш старик-иерарх или какая-нибудь чернь, что падка на его ложь. Нет, Фрост… Моргнер говорил, что вы не такой. Хотя… возможно, вы слышали о них в легендах, но никогда не видели вот так.
      `,
    buttons: [
      {
        text: '',
        goTo: 336
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Burgomeister_Cabinet.jpg')
  },

  {
    id: 336,
    text:
      `
        — Виноват, милорд. В моих владениях не так часто была возможность читать книги о подобном.
      `,
    buttons: [
      {
        text: '',
        goTo: 337
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Burgomeister_Cabinet.jpg')
  },

  {
    id: 337,
    text:
      `
        — Тогда послушайте. Величайшим существам поклонялись на этом капище. Всё это место было их храмом. Но их не называли богами. Хоть они и существа, неописуемой красоты, если уметь ее разглядеть под верным углом. Их звали альвами.
      `,
    buttons: [
      {
        text: '',
        goTo: 338
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Burgomeister_Cabinet.jpg')
  },

  {
    id: 338,
    text:
      `
        — Альвы настолько могущественны, что люди были для них забавной помехой, инструментом. Они — это истинные короли мира. И не слушая никого могли творить любые деяния. И при их владычестве человечество переживало золотой век.
      `,
    buttons: [
      {
        text: '',
        goTo: 339
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Burgomeister_Cabinet.jpg')
  },

  {
    id: 339,
    text:
      `
        — Не было страданий и боли, ибо они запивались нектаром. Не было различий, ибо все были равны перед величием альвов. Каждый день был настоящим празднеством, насмешкой над ограничениями, что пыталась накладывать природа на жизнь.
      `,
    buttons: [
      {
        text: '',
        goTo: 340
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Burgomeister_Cabinet.jpg')
  },

  {
    id: 340,
    text:
      `
        — И в конечном итоге, альвам просто стало скучно. Они испытали все дарованные блага и захотели получить последнее… высочайшее… наслаждение. Они собрались в этом самом здании и сожгли свое поселение дотла. 
      `,
    buttons: [
      {
        text: '',
        goTo: 341
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Burgomeister_Cabinet.jpg')
  },

  {
    id: 341,
    text:
      `
        — И ушли. Легенды гласят, что в последний миг существа пребывали в высочайшем экстазе.
      `,
    buttons: [
      {
        text: '',
        goTo: 342
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Burgomeister_Cabinet.jpg')
  },

  {
    id: 342,
    text:
      `
        Я стоял недвижимый, по спине пробежали мурашки от монолога этого психа. Не потому что легенда показалась жуткой. В немного другой, отредактированной церковью версию, я уже слышал… а сейчас этот психопат расставлял иные акценты.
      `,
    buttons: [
      {
        text: '',
        goTo: 343
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Burgomeister_Cabinet.jpg')
  },

  {
    id: 343,
    text:
      `
        Ульбрихт тяжело вздохнул и уставился на витраж, тихо прохрипев.
      `,
    buttons: [
      {
        text: '',
        goTo: 344
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Burgomeister_Cabinet.jpg')
  },

  {
    id: 344,
    text:
      `
        — Я уже оповестил остальных приближенных. Коли за вас поручился Моргнер, кто я такой, чтобы не доверять его выбору… вы будете среди вознесшихся.
      `,
    buttons: [
      {
        text: '',
        goTo: 345
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Burgomeister_Cabinet.jpg')
  },

  {
    id: 345,
    text:
      `
        — Я… не понимаю, господин.
      `,
    buttons: [
      {
        text: '',
        goTo: 346
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Burgomeister_Cabinet.jpg')
  },

  {
    id: 346,
    text:
      `
        — Этот мир трещит по швам. Он скоро сдохнет. А эти крики на улицах, их рыдания,  постоянные депеши из столицы… сильно утомляют. Больше не горячат старые забавы… потому я решил дать всему городу шанс вознестись в блаженстве… и вы будете среди первых!
      `,
    buttons: [
      {
        text: '',
        goTo: 347
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Burgomeister_Cabinet.jpg')
  },

  {
    id: 347,
    text:
      `
        «Он отвернулся. Вот мой шанс». 
      `,
    buttons: [
      {
        text: '',
        goTo: 348
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Burgomeister_Cabinet.jpg')
  },

  {
    id: 348,
    text:
      `
        Не удостоив толстяка ответом, я потянулся к оружию и тут же набросился со спины на бургомистра. Я попытался обхватить рукой его шею и приставить к ней кинжал. Заставить выпустить меня и команду, а то он никогда не «вознесется».
      `,
    buttons: [
      {
        text: '',
        goTo: 349
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Burgomeister_Cabinet.jpg')
  },

  {
    id: 349,
    text:
      `
        Но толстяк будто и ждал этого шага. С неожиданной прытью он обернулся и пихнул меня грузным телом, отчего я пошатнулся. Тут же он схватил меня за руку и вывернул ее, да так, что я почувствовал как хрустят мои кости.
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Burgomeister_Cabinet.jpg')
  },

  {
    id: 350,
    text:
      `
        — Как посредственно, — скучающе проговорил Ульбрихт, после чего со всей дури врезал мне кулаком по лицу.
      `,
    buttons: [
      {
        text: '',
        goTo: 351
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Burgomeister_Cabinet.jpg')
  },

  {
    id: 351,
    text:
      `
        И в последние мгновения, пока я оставался в сознании, я всё же мог расслышать:
      `,
    buttons: [
      {
        text: '',
        goTo: 352
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Darkness.jpg')
  },

  {
    id: 352,
    text:
      `
        — Но я всё равно удостою вас вознесением. Вы будете первым… вместе с вашей шлюхой и тем мальчишкой, за которого вы так печетесь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Darkness.jpg')
  },

  {
    id: 353,
    text:
      `
        Барон смотрел на меня непонимающе некоторое время, но затем лишь пожал плечами. В его глазах я прочитал… пренебрежение?
      `,
    buttons: [
      {
        text: '',
        goTo: 354
      }],
    music: require('../../../../Media/Audio/ROR/Ball.mp3'),
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 354,
    text:
      `
        — Простите, Фрост, но ничего не могу поделать. Праздник нельзя прервать, давайте я вам предоставлю кого-нибудь из своих…
      `,
    buttons: [
      {
        text: '',
        goTo: 355
      }],
    message: 'Будучи солдафоном, Моргнер не желает помогать простому торговцу',
    imageFront: require('../../../../Media/Images/ROR/Persons/Morgner.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 355,
    text:
      `
        Не желая слушать этого сукина сына дальше, я двинулся прямиком к бургомистру, тут же ко мне подоспела и Марта.
      `,
    buttons: [
      {
        text: '',
        goTo: 356
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 356,
    text:
      `
        Наше продвижение до поры до времени оставалось незамеченным. Вига начали уводить прочь люди в черных балахонах, пока виновник торжества о чем-то общался с гостями.
      `,
    buttons: [
      {
        text: '',
        goTo: 357
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 357,
    text:
      `
        «Гори оно все белым пламенем».
      `,
    buttons: [
      {
        text: '',
        goTo: 358
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 358,
    text:
      `
        Я спешно подбежал к одному из культистов в черном, после чего с силой огрел его по затылку. Тот рухнул навзничь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 359
      }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 359,
    text:
      `
        Разумеется, все внимание тут же оказалось сосредоточено на мне. Один из головорезов Ульбрихта подскочил и попытался нанести удар ножом, но я перехватил его руку и оттолкнул прочь.
      `,
    buttons: [
      {
        text: '',
        goTo: 360
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Figure_Hood.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 360,
    text:
      `
        Марта, явно от отчаяния, также решила мне помочь. Она оттолкнула одного из бандитов, что ринулся мне наперерез. Теперь дорога к Вигу была открыта! 
      `,
    buttons: [
      {
        text: '',
        goTo: 361
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Martha_Dress_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 361,
    text:
      `
        Подросток смотрел на меня умоляющим взглядом и пытался вырваться из своих пут самолично, злобно рыча и отпуская угрозы в сторону пленителей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 362
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Vig.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 362,
    text:
      `
        Но увы, лишь только среди врагов образовалась брешь, она тут же заполнилась новыми мрачными фигурами. Спустя непродолжительное время я и Марта оказались схвачены по рукам и ногам.
      `,
    buttons: [
      {
        text: '',
        goTo: 363
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Figure_Hood.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 363,
    text:
      `
        Бургомистр оценивающе смерил меня взглядом сверху-вниз, после чего повернулся к Марте. Тихо хмыкнув, он произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 364
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 364,
    text:
      `
        — Господин хотел наложить руку на мой трофей? Что ж… думаю, я поберегу вас для особого случая. Не беспокойтесь, господа, он наступит уже завтра вечером. Увести их!
      `,
    buttons: [
      {
        text: '',
        goTo: 365
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Ilbricht.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 365,
    text:
      `
        Я не вымолвил ни слова, только тихо зарычал. Взгляд мой упал на Вига, который все еще пытался сопротивляться. Но лишь только он посмотрел на меня, то поник и опустил голову, шагая уже послушно.
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Vig.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: +1, category: 'Person', id: 'Vig' }],
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 366,
    text:
      `
        Уносимый мрачными фигурами на более глубокие уровни подземелья, я тихо ругал себя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 367
      }],
    music: require('../../../../Media/Audio/ROR/Ball.mp3'),
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 367,
    text:
      `
        «Неужели не мог придумать что-то получше? Чертов пацан… ведь почти получилось… ладно, теперь-то у меня будет достаточно времени, чтобы всё обдумать получше… еще вся ночь впереди».
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('ROR', 'Глава 1', 'Часть 5', '0')
        }
      }],
    imageFront: require('../../../../Media/Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Media/Images/ROR/UI/Border.png'),
    achievement: { story: EStoriesEn.ROR, name: 'Chapter01Part04Completed' },
    imageBack: require('../../../../Media/Images/ROR/Backgrounds/Ball_Hall.jpg')
  }
])
