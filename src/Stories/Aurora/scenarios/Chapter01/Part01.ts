import { saveEndProgress, scenarioManager, statsManager } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { firstChoiceMessage } from '../../../../Utils/TextConsts'

scenarioManager.addScenario({ storyName: EStoriesEn.Aurora, chapterName: 'Глава 1', partName: 'Часть 1', code: '0' }, [
  {
    id: 0,
    text:
      `
        Я родилась в полной и любящей семье на окраине небольшого шведского городка. Нас было четверо: заботливые родители и старший брат, всегда спешивший на помощь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/Aurora/Lighthouse.mp3'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 1,
    text:
      `
        Для меня это было счастливым временем, которое не ускользало даже под гнетом тяжелых испытаний судьбы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 2,
    text:
      `
        Своего детства я практически не помню. Но мой подростковый период проходил далеко не в сказочных грезах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 3,
    text:
      `
        Чтобы прокормить семью, отец пробовался на разные работы: был поваром, строителем и даже грузчиком. 
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 4,
    text:
      `
        Но в маленьких городках жизнь будто бы заколдована на обреченность.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 5,
    text:
      `
        Уверенность в завтрашнем дне медленно ускользала, а на смену приходили голод и нестабильность.
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 6,
    text:
      `
        Однако все изменилось, когда папин хороший знакомый предложил ему работу. Она казалась перспективной и несложной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 7,
    text:
      `
        Необходимо было помогать пожилому человеку, работающему смотрителем маяка. А самое главное за нее обещали хорошо платить.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 8,
    text:
      `
        Мало кто хотел связывать свою жизнь со служением морю, если так можно выразиться. Быть вдали от всех цивилизованных благ, где единственными друзьями будут тишина и природа. 
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 9,
    text:
      `
        Но отцу было все равно. Благополучие семьи стояло на первом месте.
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 10,
    text:
      `
        В начале он работал в качестве помощника. Милый дедушка оказался не только хорошим учителем, но и прекрасным собеседником. Он обучил папу всем тонкостям работы и пророчил ему свое место. 
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 11,
    text:
      `
        Мы могли не видеть отца месяцами. Тоска по родному теплу росла с каждым днем. Но мы не сдавались.
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 12,
    text:
      `
        Мама была для меня примером стойкости и воли к жизни. Даже не смотря на свое слабое здоровье, она старалась быть сильной: подрабатывать, ухаживать за домом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 13,
    text:
      `
        Старший брат, по имени Ян, всегда вдохновлял меня и не давал падать духом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Yan.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 14,
    text:
      `
        В свои шестнадцать лет он не знал проблем с учебой, успевал работать в небольшой продуктовой лавке на полставки и оставаться крепким мужским плечом для меня и мамы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Yan.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 15,
    text:
      `
        Ян был моим самым близким другом. Я всегда делилась с ним сокровенными тайнами или безумными идеями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Yan.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 16,
    text:
      `
        А он, в свою очередь, поддерживал и наставлял, как положено старшему брату.  
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Yan.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 17,
    text:
      `
        Мы могли часами общаться и понимать друг друга практически без слов, а его любящие объятия берегли меня от грустных мыслей.
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Yan.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 18,
    text:
      `
        Он часто говорил мне: <p>— Вот увидишь, Аврора. Я построю нам мост в светлое будущее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Yan.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 19,
    text:
      `
        Но все изменилось, когда в один из дней, он не пришел домой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 20,
    text:
      `
        Это было не в его духе. Ян всегда сообщал нам о своих передвижениях или внезапных задержках. 
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Streets.jpg')
  },

  {
    id: 21,
    text:
      `
        Но именно в тот проклятый весенний день, когда брату было семнадцать лет — он будто бы испарился из нашего города. 
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Yan.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Streets.jpg')
  },

  {
    id: 22,
    text:
      `
        Отец был на работе, поэтому я и мама самостоятельно организовали поиски с помощью неравнодушных соседей. Мы обращались в полицию, развешивали плакаты с его изображением. 
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Missing_Poster.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Streets.jpg')
  },

  {
    id: 23,
    text:
      `
        Все жители нашего небольшого городка подключились к поискам Яна, но его как-будто и след простыл...
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Missing_Poster.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Streets.jpg')
  },

  {
    id: 24,
    text:
      `
        Полиция выдвинула банальные теории. Якобы брат просто сбежал из дома, захотел новой жизни и отправился покорять столицу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Missing_Poster.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Streets.jpg')
  },

  {
    id: 25,
    text:
      `
        И как бы мы не отрицали версию полиции, как бы не старались найти его, поиск не сдвигался с мертвой точки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Missing_Poster.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Aurora, value: 0, category: 'Person', id: 'Yan' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Streets.jpg')
  },

  {
    id: 26,
    text:
      `
        Никто не собирался сдаваться. Но чем больше времени проходило, тем быстрее угасала наша надежда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Streets.jpg')
  },

  {
    id: 27,
    text:
      `
        В условиях нестабильности мы прожили долгие годы. Нашу жизнь омрачила тоска по Яну и казалось бы, ничего не могло этого изменить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 28,
    text:
      `
        Однако когда мне исполнилось восемнадцать лет, будто бы по волшебству последовали первые положительные перемены. 
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 29,
    text:
      `
        В один дождливый день на пороге объявился отец. Полностью промокший он вошел в дом. То ли слезы текли по его щекам, то ли капли дождя. Скорее всего все вперемешку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 30,
    text:
      `
        Спустя несколько долгих секунд произнес всего одну фразу:<p>— Смотритель умер. 
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 31,
    text:
      `
        Дальнейшее решение перевернуло наш мир. Единственное, что мог сделать папа, чтобы мы жили в благополучии — это занять место смотрителя. Но это также означало, что мы совсем потеряем связь с друг другом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 32,
    text:
      `
        Я хорошо помню тот день. Мама кинулась в объятия отца, плача ему в плечо. Она произнесла лишь одно:<p>— Поехали. 
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 33,
    text:
      `
        У меня не было причин отказываться. В школе я не завела друзей, единственный по-настоящему близкий человек пропал, дальнейших планов на жизнь у меня не было.
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 34,
    text:
      `
        Но любящая семья, бережно относящаяся ко мне — вот, за что хотелось цепляться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 35,
    text:
      `
        Я отправилась в ванну, чтобы умыться и привести себя в порядок. Расчесала свои светлые, немного непослушные локоны. 
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Bath.jpg')
  },

  {
    id: 36,
    text:
      `
        Умылась и накрасила губы моим любимым розовым бальзамом — мамин подарок. Она всегда говорила, что мне очень идет этот цвет, да и выглядела я не такой бледной, как обычно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Bath.jpg')
  },

  {
    id: 37,
    text:
      `
        В отражении зеркала мне показалась немного растерянного вида девушка, которая абсолютно не представляла свою дальнейшую жизнь. Но которая четко осознавала — сейчас происходит непредсказуемый поворот в ее судьбе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Bath.jpg')
  },

  {
    id: 38,
    text:
      `
        И возможно именно благодаря этим переменам — все наладится. 
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Bath.jpg')
  },

  {
    id: 39,
    text:
      `
        Выйдя из ванны, я начала медленно обходить наш домик, с которым связано столько воспоминаний. 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 40,
    text:
      `
        Слегка касаясь вещей, я начала представлять картинки из моей жизни. 
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 41,
    text:
      `
        С одной стороны, испытывая чувство безмерной радости от переезда в новый дом и воссоединения семьи, а с другой стороны — чувство тоски, ведь это все такое привычное и родное.
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 42,
    text:
      `
        Мы быстро собрали те немногие вещи, которые у нас были и отправились в свой новый дом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 43,
    text:
      `
        Небольшой домик, находившийся рядом с маяком, стал нашей отдушиной. Наконец-то беззаботная семейная идиллия накрыла нас волной любви и счастья. 
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 44,
    text:
      `
        Да, мы были совершенно оторваны от других. Но наше уютное гнездышко и было всем этим гигантским миром. 
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 45,
    text:
      `
        Волны, ветер, свобода, семья. Я обрела гармонию и спокойствие на сердце. 
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 46,
    text:
      `
        И не забывала о своем хобби. <p>Я: 
      `,
    buttons: [
      {
        text: 'Любила рисование',
        goTo: 47
      },
      {
        text: 'Любила писательство',
        goTo: 55
      },
      {
        text: 'Любила музыку',
        goTo: 62
      }],
    message: firstChoiceMessage,
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 47,
    text:
      `
        Я не училась в художественной школе и не имела ни малейшего представления о тонкостях подобного искусства. Однако еще с детства мама с папой видели, какую радость мне доставляет передавать простые формы на бумагу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    stats: [{ story: EStoriesEn.Aurora, id: 'ChooseArtist', value: 1, category: 'Effect' }],
    imageFront: require('../../../../Images/Aurora/Objects/Album.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 48,
    text:
      `
        И хоть мы были небогатой семьей, но на альбом и несколько карандашей родители смогли найти деньги. 
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Album.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 49,
    text:
      `
        Рисование также помогало отвлекаться от тяжелых моментов в жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 50,
    text:
      `
        Легкое чирканье карандашом, блеклые наброски — мой мир, который я раскрашу в нужные цвета. 
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Album.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 51,
    text:
      `
        Жизнь на маяке стала для меня новым открытием и все заиграло более живыми красками. 
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 52,
    text:
      `
        Я часто садилась на лавочку, которая стояла рядом с маяком. Вид рассказывал о море и его тайнах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 53,
    text:
      `
        Каждый раз море открывалось для меня с новой стороны. Легкое покачивание волн, ровный горизонт, мирно летящие птицы. Или же бушующие потоки, сильный ветер, что сносил все на своем пути. 
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 54,
    text:
      `
        Эти мгновения навсегда запечатлены в моем альбоме.  
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Album.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    achievement: { story: EStoriesEn.Aurora, name: 'ChooseArtist' },
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 55,
    text:
      `
        Одним из немногих предметов в школе, которым я по-настоящему увлекалась, была литература. 
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    stats: [{ story: EStoriesEn.Aurora, id: 'ChooseWriter', value: 1, category: 'Effect' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/School.jpg')
  },

  {
    id: 56,
    text:
      `
        Для меня всегда оставалось загадкой, как же люди могут так искусно передавать свои мысли и идеи, влиять на разум читателя, внушать ту или иную мораль.
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/School.jpg')
  },

  {
    id: 57,
    text:
      `
        Как-то после уроков я набралась смелости и купила блокнот, который стал постепенно заполняться разного рода набросками для будущих историй. 
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Book.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Streets.jpg')
  },

  {
    id: 58,
    text:
      `
        Как и в жизни, я не могла придумать конечную цель или хотя бы продумать структуру произведения. Но это не мешало мне изливать свою душу в подобной форме. 
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Streets.jpg')
  },

  {
    id: 59,
    text:
      `
        Маяк стал для меня оплотом вдохновения. Я часто залезала на самый верх здания, где располагалась смотровая площадка. Садилась на стул и просто писала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation.jpg')
  },

  {
    id: 60,
    text:
      `
        Дракон, что мог обрушить свое зло на маленький никому ненужный городок или обычная бытовая жизнь смотрителя маяка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    parallax: 'Right',
    imageFront: require('../../../../Images/Aurora/Objects/Book.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation.jpg')
  },

  {
    id: 61,
    text:
      `
        Это было неважно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Book.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    achievement: { story: EStoriesEn.Aurora, name: 'ChooseWriter' },
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation.jpg')
  },

  {
    id: 62,
    text:
      `
        В школе я часто проводила время наедине с собой. Меня не привлекало общение с другими людьми, к тому же, они не были особенно расположены ко мне. 
      `,
    stats: [{ story: EStoriesEn.Aurora, id: 'ChooseMusician', value: 1, category: 'Effect' }],
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/School.jpg')
  },

  {
    id: 63,
    text:
      `
        Но в один из дней мой одноклассник, с которым мы делили парту, пришел неожиданно в хорошем настроении. Я тактично поинтересовалась о причине этого. 
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/School.jpg')
  },

  {
    id: 64,
    text:
      `
        — Наконец-то состоялся дебют «Kings & Queens». Это просто бомба. Все только о них и говорят, а их гитарист и по совместительству вокалист — настоящий прорыв. 
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Classmate.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/School.jpg')
  },

  {
    id: 65,
    text:
      `
        — Он вроде даже наш ровесник... Не верится. Почему я просиживаю за этой чертовой партой, когда в шестнадцать лет можно такие бабки рубить... 
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Classmate.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/School.jpg')
  },

  {
    id: 202,
    text:
      `
        — А можно послушать?
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/School.jpg')
  },

  {
    id: 66,
    text:
      `
        — Конечно! Я и забыл, что у тебя нет денег, — он протянул мне плеер и наушники. 
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Classmate.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/School.jpg')
  },

  {
    id: 67,
    text:
      `
        Я не обратила внимание на эту колкость. Люди почему-то норовят показать свое превосходство, но я к этому привыкла и отнеслась спокойно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/School.jpg')
  },

  {
    id: 68,
    text:
      `
        Надев наушники, меня тут же захватил звук гитары. Музыка, которую я слышала была чем-то новым для меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    music: require('../../../../Sounds/Aurora/KingQueens.mp3'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/School.jpg')
  },

  {
    id: 69,
    text:
      `
        Прекрасный проигрыш и не менее завораживающий голос вокалиста вызвали смешение различных эмоций. 
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/School.jpg')
  },

  {
    id: 70,
    text:
      `
        Впоследствии, я поделилась своим открытием с родителями. И не смотря на финансовое положение, на шестнадцатилетие мне подарили музыкальный плеер. 
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Walkman.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 71,
    text:
      `
        Я не переставая слушала разного рода музыку. Создавала плейлисты под свое настроение. Но «Kings & Queens» занимали в этом списке особенное место. 
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Walkman.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 72,
    text:
      `
        И даже сейчас, стоя перед бушующим морем, я все еще слушаю их песни. 
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Walkman.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 73,
    text:
      `
        Надеясь, что когда-нибудь у меня хватит смелости взять в руки гитару и сочинить свое произведение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Walkman.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    achievement: { story: EStoriesEn.Aurora, name: 'ChooseMusician' },
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 74,
    text:
      `
        Прошло несколько месяцев после нашего переезда. Мы действительно полюбили это место. 
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    music: require('../../../../Sounds/Aurora/Lighthouse.mp3'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse.jpg')
  },

  {
    id: 75,
    text:
      `
        Папа оставался прикован к маяку. Я и мама периодически ездили в город за покупками. Каждый вечер мы наслаждались обществом друг друга, будто бы наверстывая упущенное время. 
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse.jpg')
  },

  {
    id: 76,
    text:
      `
        Разговоры, игры. Совершенно неважно — что. Ведь главное — с кем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse.jpg')
  },

  {
    id: 77,
    text:
      `
        Все мы ощущали перемены, происходившие с нами. К примеру, родители говорили мне, что я стала более: 
      `,
    buttons: [
      {
        text: 'Романтичной',
        goTo: 78
      },
      {
        text: 'Прагматичной',
        goTo: 83
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse.jpg')
  },

  {
    id: 78,
    text:
      `
        — Аврора, — говорила мама, попивая горячий чай в один из вечеров. — Ты изменилась. Я все больше замечаю, какой ранимой и чуткой девушкой ты становишься. 
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    stats: [{ story: EStoriesEn.Aurora, id: 'BeRomantic', value: 1, category: 'Effect' }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse_Night.jpg')
  },

  {
    id: 79,
    text:
      `
        — Видимо, так на меня повлияло это место, — я пожала плечами и улыбнулась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse_Night.jpg')
  },

  {
    id: 80,
    text:
      `
        — Несомненно, — произнес отец, который что-то колдовал на кухне. — Ты все больше мечтаешь и мечтаешь. Твоим фантазиям мог бы позавидовать любой творец! 
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse_Night.jpg')
  },

  {
    id: 81,
    text:
      `
        — Ну что ты, папа... Это всего лишь ребячество... 
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse_Night.jpg')
  },

  {
    id: 82,
    text:
      `
        — Не говори так. Нужно больше верить в себя и свои силы. Уверен, тебя ждут великие открытия, — отец развернулся к нам с тарелками свежих фруктов. — А теперь, девочки мои, налетайте! 
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse_Night.jpg')
  },

  {
    id: 83,
    text:
      `
        — Аврора, — говорила мама, попивая горячий чай в один из вечеров. — Ты изменилась. Я все больше замечаю, как ты выросла и какой серьезной ты становишься. 
      `,
    stats: [{ story: EStoriesEn.Aurora, id: 'BePragmatic', value: 1, category: 'Effect' }],
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse_Night.jpg')
  },

  {
    id: 84,
    text:
      `
        — Видимо, так на меня повлияло это место, — я пожала плечами и улыбнулась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse_Night.jpg')
  },

  {
    id: 85,
    text:
      `
        — Несомненно, — произнес отец, который что-то колдовал на кухне. — Не смотря на твои мечтания, я вижу, как ты стала мыслить более рационально и взвешенно подходить ко многим вопросам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse_Night.jpg')
  },

  {
    id: 86,
    text:
      `
        — Ну что ты, папа... Это мало о чем говорит...
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse_Night.jpg')
  },

  {
    id: 87,
    text:
      `
        — Нужно больше верить в себя и свои силы. Уверен, тебя ждут великие открытия и твой подход тебе обязательно поможет, — отец развернулся к нам с тарелками свежих фруктов. — А теперь, девочки мои, налетайте! 
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse_Night.jpg')
  },

  {
    id: 88,
    text:
      `
        Через месяц после переезда, к нашему дому подъехала неизвестная машина. Не то, чтобы это было чем-то удивительным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 89,
    text:
      `
        Маяк часто проверяли на исправность разного рода службы. Но сейчас машина не выглядела как полуразбитый грузовик, а из ее салона вышел хорошо одетый молодой парень. 
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 90,
    text:
      `
        Отец, который находился на смотровой площадке маяка, тут же окликнул его: <p>— Артур, я сейчас спущусь! 
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 91,
    text:
      `
        Мама была в доме, поэтому я смело вышла встречать незнакомца. Мы обменялись стандартными приветствиями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 92,
    text:
      `
        Я не смогла не отметить его спокойную наружность, привлекательные черты лица и радушную улыбку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 93,
    text:
      `
        — Твой отец часто рассказывал о тебе, очень приятно наконец-то познакомиться лично, — проговорил Артур, облокачиваясь на капот своей машины. — Так ты живешь здесь вместе со своей семьей? 
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 94,
    text:
      `
        — Да! Здесь очень красивое и уединенное место, помогает расслабиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 95,
    text:
      `
        — Согласен с тобой, — задумчиво глядя в сторону произнес парень.
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 96,
    text:
      `
        Вскоре вернулся отец. Он обменялся с Артуром рукопожатием и спросил:<p>— Ты за вещами дедушки приехал? Я сохранил все как было. Пойдем в дом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 97,
    text:
      `
        — Благодарю. Родители так и не смогли найти время, вечно мотаются по своим командировкам. А я только сейчас смог выбраться сюда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 98,
    text:
      `
        — Понимаю. У тебя ведь учеба. 
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 99,
    text:
      `
        Мы зашли внутрь дома. Мама организовала всем по чашке чая и выставила на стол печенье. Отец вынес несколько запечатанных коробок. 
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse.jpg')
  },

  {
    id: 100,
    text:
      `
        — Это все его вещи. Я упаковал одежду и его книги с записями. Все, что смог найти. 
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse.jpg')
  },

  {
    id: 101,
    text:
      `
        — Спасибо, — Артур грустным взглядом окинул коробки. — До сих пор не могу поверить, что его не стало. И что меня не было рядом с ним. 
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse.jpg')
  },

  {
    id: 102,
    text:
      `
        — Жизнь — это цикл с чередой различных взлетов и падений. Он сейчас в лучшем мире. Нам важно сохранить память об этом человеке. Это меньшее, что мы можем сделать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse.jpg')
  },

  {
    id: 103,
    text:
      `
        — Вы правы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse.jpg')
  },

  {
    id: 104,
    text:
      `
        Разговор продолжился в более позитивном ключе. Я узнала, что Артур являлся внуком бывшего смотрителя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse.jpg')
  },

  {
    id: 105,
    text:
      `
        Он часто проводил время с дедушкой и был духовно связан с этим местом. Поэтому отец не раз подчеркивал — парень желанный гость нашего дома. 
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse.jpg')
  },

  {
    id: 106,
    text:
      `
        В течение нескольких месяцев Артур по возможности приезжал к нам в гости. Он проводил много времени с отцом, разговаривая о дедушке, о простых жизненных вещах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 107,
    text:
      `
        И со мной. Мы могли часами гулять и вести диалог на любые темы. Его компания была мне очень близка. Можно даже сказать, что мы стали друзьями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 108,
    text:
      `
        Я чувствовала себя очень комфортно в его обществе. Его доброта и ласковое обращение вызывали в душе ранее неизвестные мне чувства. 
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 109,
    text:
      `
        Иногда почитывая романтические книги про всяких принцев, я невольно проводила аналогии с нашими взаимоотношениями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 110,
    text:
      `
        Была ли это любовь или я видела в нем фигуру брата?
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 111,
    text:
      `
        На все эти противоречия у меня не было ответа. Я просто наслаждалась нашим времяпрепровождением и плыла по течению. 
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 112,
    text:
      `
        Это были прекрасные месяцы светлых эмоций. Но все не могло быть так гладко. 
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    music: require('../../../../Sounds/Aurora/Sad.mp3'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 113,
    text:
      `
        Спустя чуть больше полугода нашей жизни на маяке, мама сильно заболела. Никакие лекарства и напутствия врачей не смогли помочь ей выбраться из этого состояния. 
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse.jpg')
  },

  {
    id: 114,
    text:
      `
        Она умерла в больнице. Не мучаясь, не жалуясь, что так мало прожила. 
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse.jpg')
  },

  {
    id: 115,
    text:
      `
        И по сей день мне вспоминаются ее слова: <p>— Аврора, ты наша звездочка. Подобно помогающему свету на маяке, ты наш путеводитель в жизни. 
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse.jpg')
  },

  {
    id: 116,
    text:
      `
        Как жаль, что моего «света» не стало в тот день. 
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse.jpg')
  },

  {
    id: 117,
    text:
      `
        Смогу ли продолжать быть тем самым путеводным огнем для других?
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse.jpg')
  },

  {
    id: 200,
    text: '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, id: 'BeRomantic', category: 'Effect' }) >= 1
        },
        goTo: 118
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, id: 'BePragmatic', category: 'Effect' }) >= 1
        },
        goTo: 123
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse.jpg')
  },

  {
    id: 118,
    text:
      `
        На похоронах слезы душили меня, словно удавки. Я задыхалась. Терялась. От меня оторвали кусок чего-то настолько дорогого, что это никак не выразить словами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Funeral.jpg')
  },

  {
    id: 119,
    text:
      `
        Что я должна испытывать? Мне больно, мне паршиво. Остановите это поскорее. Как вернуть время назад? 
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Funeral.jpg')
  },

  {
    id: 120,
    text:
      `
        Отец обнимал меня, смотря куда-то опустошенным взглядом. Он не плакал. Не кричал во все горло от терзающей боли. 
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Funeral.jpg')
  },

  {
    id: 121,
    text:
      `
        Нет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Funeral.jpg')
  },

  {
    id: 122,
    text:
      `
        Возможно, он старался быть сильным ради меня, а может он просто не осознавал происходящее.  
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Funeral.jpg')
  },

  {
    id: 123,
    text:
      `
        На похоронах я стояла рядом с отцом с отчужденным лицом. Происходящее настолько не поддавалось чему-то логичному или закономерному, что я терялась в собственных эмоциях. 
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Funeral.jpg')
  },

  {
    id: 124,
    text:
      `
        Что я должна испытывать? Мне больно, мне паршиво. Остановите это поскорее. Как вернуть время назад? 
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Funeral.jpg')
  },

  {
    id: 125,
    text:
      `
        Отец обнимал меня, смотря куда-то опустошенным взглядом. Он не плакал. Не кричал во все горло от терзающей боли. 
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Funeral.jpg')
  },

  {
    id: 201,
    text:
      `
        Нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Funeral.jpg')
  },

  {
    id: 126,
    text:
      `
        Возможно, он старался быть сильным ради меня, а может он просто не осознавал происходящее.  
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Funeral.jpg')
  },

  {
    id: 127,
    text:
      `
        Артур, узнав о происходящем, незамедлительно приехал. Он не отходил от меня ни на шаг. Его поддержка в тот момент была как глоток свежего воздуха.
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse.jpg')
  },

  {
    id: 128,
    text:
      `
        Я плакала на его плече, а он утешал меня, поглаживая по волосам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse.jpg')
  },

  {
    id: 129,
    text:
      `
        Меня разрывало от несправедливости. Ян. Мама. Почему близкие люди покидают этот мир? Мы ведь так мало провели времени вместе.  
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    ghostSilhouette: true,
    imageFront: require('../../../../Images/Aurora/Persons/Yan.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse.jpg')
  },

  {
    id: 130,
    text:
      `
        Если бы не Артур, <s>я бы утопилась в бушующем море. 
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Aurora, value: 0, category: 'Person', id: 'Arthur' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse.jpg')
  },

  {
    id: 131,
    text:
      `
        Они часто разговаривали о чем-то с отцом наедине. Я не вмешивалась, понимая, что всем иногда нужно выговориться на определенные темы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse.jpg')
  },

  {
    id: 132,
    text:
      `
        За несколько месяцев наша жизнь сильно поменялась. Отец невольно отстранился, полностью ушел в работу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 133,
    text:
      `
        В его глазах пропал тот блеск жизни, та мотивация, которая помогала ему раньше. Он стал пить, но не переставал забывать о своей единственной дочери. 
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 134,
    text:
      `
        В один из вечеров он позвал меня на смотровую площадку. Тогда уже минул почти год с нашего переезда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 135,
    text:
      `
        Тихая мирная ночь. Звезды. Шум морских волн. 
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 136,
    text:
      `
        Мы сели рядом, сдвинув два стула. Немного посидев в молчании, папа проговорил: <p>— Тебе нужно уехать. Начать жить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 137,
    text:
      `
        Эти слова обрушились на меня подобно огромному снежному кому. <p>— Но как же...? 
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 138,
    text:
      `
        — Аврора, ты же не думала, что всю жизнь проведешь на этом разваливающемся маяке. Я не могу позволить, чтобы ты погибала здесь вместе со мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 139,
    text:
      `
        — Я...
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 140,
    text:
      `
        — Мы с Артуром много говорили об этом. Он готов помочь с переездом. Сбережения у нас есть. Этого будет достаточно для начала жизни в большом городе и поступления в университет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 141,
    text:
      `
        Он все решил. И давно. И мне нечего было возразить. Это было логичным исходом, но чувствам не прикажешь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 142,
    text:
      `
        — Папа, — глаза наполнились слезами. — Я не могу тебя бросить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 143,
    text:
      `
        — Мы не прекратим общение. СМС или письма. Наша связь не прервется из-за этого.
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 144,
    text:
      `
        — Это слишком резко и я не знаю, что мне сказать...
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 145,
    text:
      `
        — Вспомни свои мечты, Аврора, — папа сделал глоток хмельного напитка. — Свои стремления. Ты всегда была понимающим ребенком, который переживал все трудности и не жаловался. 
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 146,
    text:
      `
        — Но пришла пора начать жить для себя. Мама была такого же мнения. И я уверен, Ян сказал бы то же самое.
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 147,
    text:
      `
        — Но я даже не представляю, куда и как мне двигаться дальше. Я не смогу одна. Без тебя. Без мамы. Без Яна... Я не справлюсь.
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 148,
    text:
      `
        — Ты будешь не одна. С этим поможет Артур. Вы же неплохо ладите. Он станет твоей опорой, пока ты не встанешь на ноги. Тем более, что изначально это было его идеей.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 149,
    text:
      `
        На мгновение меня обрадовали слова отца о причастности Артура, но после, осознание ситуации накрыло меня с головой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 150,
    text:
      `
        Я согнулась пополам, обхватив колени. Тяжело было признавать правоту отца. Мне хотелось уехать. Это было правдой. Горькой правдой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 151,
    text:
      `
        Но я слишком сильном пеклась о единственном родном человеке. Ведь одиночество не щадит никого. 
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 152,
    text:
      `
        — Но ты...
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 153,
    text:
      `
        — Хватит, Аврора. Я справлюсь. Моя работа давно превратилась в неотъемлемую часть жизни. И я привык. А тебе пора думать о себе. Пожалуйста, — он коснулся моей руки, слегка поглаживая. 
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Aurora, value: 0, category: 'Person', id: 'Dad' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 154,
    text:
      `
        Я обняла его. Крепко-крепко. Это был один из последних наших душевных вечеров перед моим отъездом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 155,
    text:
      `
        Все происходило стремительно, словно папа решил все сделать так, чтобы не было еще больнее отпускать меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 156,
    text:
      `
        Через неделю приехал Артур. Я стояла с собранным рюкзаком, взволнованно теребя волосы, и абсолютно не понимая, куда приведет моя новая дорога жизни. 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('Aurora', 'Глава 1', 'Часть 2', '0')
        }
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    achievement: { story: EStoriesEn.Aurora, name: 'Chapter01Part01Completed' },
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  }
])
