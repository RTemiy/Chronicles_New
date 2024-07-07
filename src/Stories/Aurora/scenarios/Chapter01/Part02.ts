import { saveEndProgress, scenarioManager, soundManager, statsManager, wardrobe } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { musicPlayer } from '../../../../Functions/musicPlayer'
import { loadData, saveData } from '../../../../Functions/localStorageManager'
import { whiteFlash } from '../../../../Components/Slide/Slide'

scenarioManager.addScenario({ storyName: EStoriesEn.Aurora, chapterName: 'Глава 1', partName: 'Часть 2', code: '0' }, [
  {
    id: 0,
    text:
      `
        Раннее солнце освещало тихую водную гладь, оставляя несколько играющих бликов на ее поверхности. В тот момент мне почему-то казалось, что я в последний раз вижу эту умиротворяющую картину. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/Aurora/Lighthouse.mp3'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 1,
    text:
      `
        Во мне смешались чувства. А как могло быть иначе, ведь меня будто вырывают из моего кокона и оставляют одну на потеху неизвестности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 2,
    text:
      `
        Это были не самые приятные ощущения. Но я не могла от них избавиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 3,
    text:
      `
        Однако я должна перебороть себя. Сейчас, сжимая лямку рюкзака, оставалось только решиться — отпустить давно державшее меня место и начать жить для себя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 4,
    text:
      `
        Таково было мое сокровенное желание. 
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 5,
    text:
      `
        Я глубоко вздохнула и нашла взглядом папу. Он стоял рядом с Артуром и в очередной раз благодарил его за подаренную возможность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 6,
    text:
      `
        Наконец, и я решила подойти. Я успела попрощаться с домом, теперь предстояло самое трудное. 
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 7,
    text:
      `
        — Папа, могли бы мы…? 
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 8,
    text:
      `
        — Да, дочка, — отец серьезно взглянул на Артура. — Береги ее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 9,
    text:
      `
        — Я сделаю все необходимое, даю слово, — они пожали друг другу руки. — Аврора, я заведу машину. Не думай о времени. 
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 10,
    text:
      `
        Я кивнула и мы отошли с отцом к одному из наших любимых мест.
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
        Скамейка открывала вид на море, а морской бриз освежал, тихонько обдувая каждую частичку тела. 
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    ambient: require('../../../../Sounds/Aurora/Wind.mp3'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 12,
    text:
      `
        Мы сели. Молча. Иногда тишина может сказать больше, чем даже самое ласковое слово. 
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 13,
    text:
      `
        Слушали волны, завывание ветра, крики чаек и держались за руки. В этот момент я четко осознала для себя — никаких прощаний навсегда. Наша связь не может так просто разрушиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 14,
    text:
      `
        — Аврора, — папа положил поверх моей руки свою. — Извини, если все происходит так резко. Я просто не мог по-другому. 
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 15,
    text:
      `
        — Ощущение, что если ты пробудешь здесь еще один день, то я никогда не смогу отпустить тебя. Чертов эгоист… чертов алкоголик… 
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 16,
    text:
      `
        — Папа, — я обняла его, прижимаясь к плечу. — Мне все это тоже дается нелегко, но решение принято. Я хочу попробовать пожить. По-другому. 
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 17,
    text:
      `
        — Но знай, у меня и в мыслях не было бросать тебя… Мы с Артуром будем приезжать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 18,
    text:
      `
        — Держись этого парня, милая. С ним ты не будешь знать печали или грусти. Он хороший человек и достоин быть рядом с тобой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 19,
    text:
      `
        — Папа! — я раскраснелась, так как сказанные слова были больше похожи на его благословение, а не простое напутствие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 20,
    text:
      `
        — Тебе нужна опора, чтобы встать на ноги, — отец с грустью стал вглядываться в очертания морского горизонта. — Я не смог ей стать. Не смог сберечь дорогих мне людей. Но я сберегу тебя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 21,
    text:
      `
        Сердце закололо. Почему именно сейчас он так разоткровенничался? Мы мало разговаривали о постигших нас трагедиях, однако эта нужда остро ощущалась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 22,
    text:
      `
        Выговориться. Не одинокому морю, которое не ответит, а близкому, что подставит плечо в трудный момент. 
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 23,
    text:
      `
        Я очень долго думала над тем, что сказать, но нужные слова не приходили в голову. 
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 24,
    text:
      `
        Мне оставалось сделать лишь последнее действие перед своим отъездом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 25,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition:
    [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Effect', id: 'ChooseArtist' }) >= 1
        },
        goTo: 26
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Effect', id: 'ChooseWriter' }) >= 1
        },
        goTo: 30
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Effect', id: 'ChooseMusician' }) >= 1
        },
        goTo: 37
      }
    ],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 26,
    text:
      `
        Из своего рюкзака я достала немного потрепанный листок со своим рисунком. На нем были изображены мы с ним. Наш маяк. Наша скамейка и бескрайнее море. 
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Aurora_Painting.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 27,
    text:
      `
        В один из вечеров мне пришла идея оставить отцу что-нибудь на память. Что-то простое, но в то же время по-своему ценное. Мне нравилось передавать свои эмоции через краски, поэтому я нарисовала этот скромный пейзаж.  
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Aurora_Painting.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 28,
    text:
      `
        — Папа, — я протянула ему свой подарок. — Ты часто проводишь время наедине с собой и своими мыслями. Так пусть этот рисунок будет хранить в твоем сердце воспоминание о нас, обо мне.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Aurora_Painting.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 29,
    text:
      `
        Мужчина бережно взял листок и принялся рассматривать его. На его глазах застыли слезы. Он проговорил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Aurora_Painting.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 30,
    text:
      `
        <i>Луч света тебе проводник<p>В непроглядной той тьме<p>И море хороший советник<p>Не одинок ты в этой тюрьме…
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Paper.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 31,
    text:
      `
        Из своего рюкзака я достала немного потрепанный листок со своим написанным стихом, которым хотела поделиться с папой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Paper.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 32,
    text:
      `
        В один из вечеров мне пришла идея оставить отцу что-нибудь на память. Что-то простое, но в то же время по-своему ценное. 
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Paper.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 33,
    text:
      `
        Мне нравилось передавать свои эмоции через небольшие произведения, поэтому руки сами потянулись писать. Небольшое нескладное стихотворение, однако моего собственного сочинения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Paper.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 34,
    text:
      `
        То, во что я вкладывала душу и хотела, чтобы это хоть немного помогло отцу не терять надежду. 
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Paper.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 35,
    text:
      `
        — Папа, — я протянула ему свой подарок. — Ты часто проводишь время наедине с собой и своими мыслями. Возможно однажды, читая эти строки, они навеют тебе о свете, и что ты не одинок. 
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Paper.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 36,
    text:
      `
        Мужчина бережно взял листок и принялся рассматривать его. На его глазах застыли слезы. Он проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Paper.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 37,
    text:
      `
        Из своего рюкзака я достала музыкальный диск, которым я хотела поделиться с папой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Disc.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 38,
    text:
      `
        В один из вечеров мне пришла идея оставить отцу что-нибудь на память. Что-то простое, но в то же время по-своему ценное. 
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Disc.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 39,
    text:
      `
        И так как я любила музыку, мне пришла идея собрать коллекцию своих любимых мелодий на диск, чтобы папе было не так грустно проводить время на службе в маяке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Disc.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 40,
    text:
      `
        — Папа, — я протянула ему свой подарок. — Ты часто проводишь время наедине с собой и своими мыслями. Возможно, слушая мой плейлист, ты вспомнишь, что не одинок. А я всегда рядом с тобой, даже когда так далеко. 
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Disc.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 41,
    text:
      `
        Мужчина бережно взял диск и принялся рассматривать его. На его глазах застыли слезы. Он проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Disc.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 42,
    text:
      `
        — Знаешь, я отчетливо помню, как мы собирались переезжать на этот маяк. Тогда я сильно переживал, потому что боялся получить отказ с вашей стороны. 
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 43,
    text:
      `
        — Но когда твоя мама услышала эти новости, ее лицо озарила такая счастливая улыбка… Я не видел ее такой с момента пропажи Яна. 
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 44,
    text:
      `
        Папа сильно сжал кулаки, словно пытаясь заглушить одну боль другой болью. Как бы ему не было сейчас тяжело, мужчина договорил то, что хотел:
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 45,
    text:
      `
        — Вы ведь не сомневались ни на секунду. 
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 46,
    text:
      `
        — Разумеется, — я аккуратно попыталась разжать его руки. — Нам хотелось жить вместе и не чувствовать больше разлуку с тобой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 47,
    text:
      `
        — Я понимаю. Но, Аврора, скажи мне честно. Спустя год жизни здесь, ты не считаешь этот переезд был ошибкой? 
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 48,
    text:
      `
        Мне никогда не нравились подобные вопросы. То, что произошло, оно уже свершилось. Кто знает: происки ли это судьбы или итог наших выборов. Но прошлого не вернуть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 49,
    text:
      `
        Невольно я все равно начала задумываться над вопросом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 50,
    text:
      `
        Если бы мы не переехали, мамино здоровье бы не ухудшилось? Но были бы мы также счастливы вдали друг от друга? Стоили ли эти мгновения того, во что сейчас превратилась наша жизнь?
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 51,
    text:
      `
        — Аврора? 
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 52,
    text:
      `
        Я: 
      `,
    buttons: [
      {
        text: 'Не жалею о переезде',
        goTo: 53
      },
      {
        text: 'Думаю, это был неправильный выбор',
        goTo: 61
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 53,
    text:
      `
        — Как бы не было тяжело, все это по итогу привело нас к тому, что мы имеем. Я никогда не скажу, что это был неправильный выбор. 
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 54,
    text:
      `
        — Я счастлива. Это может отличаться от привычного понимания счастья, но таков мой ответ. 
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 55,
    text:
      `
        Отец кивнул, сжимая подаренный мною подарок. На миг мне показалось, что я вижу облегчение на его лице. Словно, если бы он услышал нечто другое, его и без того нестабильное состояние — ухудшилось. 
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 56,
    text:
      `
        — Спасибо, милая. Спасибо за честный ответ, — папа расслабился и откинул голову назад, продолжая мысль. — Мы часто делаем неправильные выборы, но ты права. 
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 57,
    text:
      `
        — То счастье, пусть даже мимолетное, что мы обрели здесь — оно стоит всего пережитого. 
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    message: 'Отец благодарен за ваше благосклонное отношение. Его состояние улучшается',
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Person', id: 'Dad' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 58,
    text:
      `
        — Аврора, — папа смотрел мне прямо в глаза. — Ты так выросла. Ты уже не тот зажатый ребенок. Нет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 59,
    text:
      `
        — Я вижу перед собой уверенную девушку, которая так по-взрослому смотрит на мир и принимает с достоинством все невзгоды. Я горжусь тобой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    message: 'Дух Авроры — это стат, отражающий характер героини и ее отношение к жизни. Только вам решать, как девушка будет реагировать на трудности',
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 60,
    text:
      `
        — Спасибо, папа. Все это только благодаря тому, что ты остаешься моим проводником и поддерживаешь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    message: 'Вы принимаете жизнь такой, какая она есть. Благодаря вашему выбору дух Авроры крепчает',
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Effect', id: 'Spirit' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 61,
    text:
      `
        — Я люблю наш новый дом всей душой. И несмотря на ту радость, что я испытала, мне всегда казалось — этот переезд был ошибкой. И не потому что нам здесь не нравилось, а потому что…
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 62,
    text:
      `
        — Она была бы жива, — папа договорил за меня и продолжил. — Жива. Да. Как обычно ждала меня с работы, вечно бы суетилась. Редко недовольная, но живая.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 63,
    text:
      `
        — Папа, я…
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 64,
    text:
      `
        — Не стоит, милая. Спасибо за честность. Я все понимаю. Я ведь сам такого же мнения. И не знаю, смогу ли перестать зацикливаться на прошлом. На своих ошибках. 
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    message: 'Отец продолжает винить себя в смерти матери. Его состояние ухудшается ',
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Aurora, value: -1, category: 'Person', id: 'Dad' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 65,
    text:
      `
        В тот момент я поделилась своими самыми потаенными мыслями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    message: 'Дух Авроры — это стат, отражающий характер героини и ее отношение к жизни. Только вам решать, как девушка будет реагировать на трудности',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 66,
    text:
      `
        Я была уверена, что смирилась с утратой, но в глубине души я мечтала повернуть время вспять и не переезжать на маяк. 
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    message: 'Вы не можете смириться с реальностью, с которой сталкиваетесь. Вследствие вашего выбора Аврора начинает больше сомневаться в себе',
    stats: [
      { story: EStoriesEn.Aurora, value: -1, category: 'Effect', id: 'Spirit' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 67,
    text:
      `
        — Дорогая, давай забудем все эти грустные мысли, — папа попытался разрядить обстановку своей добродушной улыбкой. — Спасибо тебе за подарок. Я буду беречь его и ждать твоего скорого приезда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 68,
    text:
      `
        С одной стороны, я была рада, что папа перевел тему на что-то более нейтральное. Все же не хотелось омрачать наше прощание.
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 69,
    text:
      `
        Но с другой стороны, я стала больше переживать за него. Сейчас он выглядел подавленно. И, видимо, только работа и мои визиты могли бы скрасить его состояние. 
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 70,
    text:
      `
        — Не забывай писать мне, — сказала я немного обеспокоенным тоном. — Телефон. Или если не будет вдруг связи — письма. Что угодно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Coat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 71,
    text:
      `
        — Конечно. Все будет хорошо, дорогая. А теперь тебе пора. Некрасиво заставлять Артура так долго ждать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 72,
    text:
      `
        Мы еще раз обнялись. Крепко. Долго. 
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 73,
    text:
      `
        Затем, я взяла те немногие вещи, что у меня были и села в машину Артура. 
      `,
    buttons: [
      {
        text: 'Продолжить',
        gift: true,
        goTo: 74
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 74,
    text:
      `
        — Все в порядке? — спросил парень, пристегиваясь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 75,
    text:
      `
        — Да, — я смахнула непослушные слезы. — Я думаю пора выезжать.  
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 76,
    text:
      `
        Он кивнул. Не стал допытываться, ведь понимал причину моей печали.
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 77,
    text:
      `
        Машина неспешно двинулась с места, оставляя позади маяк и отца, машущего на прощание рукой.  
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 78,
    text:
      `
        У меня было время, чтобы успокоиться, рассматривая проносящиеся за окном пейзажи. В данный момент окружающая красота природы особо не привлекала меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    music: require('../../../../Sounds/Aurora/Daily_01.mp3'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 79,
    text:
      `
        Дорога пролегала через город, где некогда я провела почти всю сознательную жизнь. И отчего-то мне не было грустно или плохо. Я ничего не ощущала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs.jpg')
  },

  {
    id: 80,
    text:
      `
        Вот мы проезжаем улицу, где мы с Яном частенько прогуливались, а вот магазин, где брат подрабатывал в свободное от учебы время. 
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs.jpg')
  },

  {
    id: 81,
    text:
      `
        Проехав еще несколько кварталов, я увидела школу, которую ранее посещала. И как-то машинально озвучила свои мысли Артуру:
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs.jpg')
  },

  {
    id: 82,
    text:
      `
        — Школа, где мы учились с Яном. Кажется, что я не была здесь целую вечность… 
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs.jpg')
  },

  {
    id: 83,
    text:
      `
        Остановившись на светофоре, парень внимательно осмотрел учебное заведение и проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs.jpg')
  },

  {
    id: 84,
    text:
      `
        — Не скучаешь по тем временам?
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs.jpg')
  },

  {
    id: 85,
    text:
      `
        — Воспоминаний много: хороших и плохих — это дало старт моей жизни, за что я буду всегда благодарна этому месту. Но что точно могу сказать — я не скучаю. 
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs.jpg')
  },

  {
    id: 86,
    text:
      `
        — Понимаю. Уверен в новом городе, ты сможешь построить только счастливые воспоминания. 
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs.jpg')
  },

  {
    id: 87,
    text:
      `
        Оптимизм парня всегда придавал мне большую уверенность и помогал избавиться от грустных мыслей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs.jpg')
  },

  {
    id: 88,
    text:
      `
        Артур был навеселе и полностью сосредоточился на дороге. Иногда он легонько постукивал в ритм играющей на фоне мелодии. 
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 89,
    text:
      `
        Спустя где-то час поездки, я успела немного подремать и окончательно прийти в норму. Увидев, что я проснулась, Артур спросил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 90,
    text:
      `
        — Все хорошо? Если необходимо, давай остановимся и отдохнем. Я бы не против выпить чего-нибудь горяченького. 
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 91,
    text:
      `
        — Ничего, — я улыбнулась от проявления такой заботы. — Главное, чтобы ты не устал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 260,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Effect', id: 'ChooseMusician' }) >= 1
        },
        goTo: 92
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Effect', id: 'ChooseMusician' }) < 1
        },
        goTo: 97
      }
    ],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 92,
    text:
      `
        — Артур, ты не против, если я пощелкаю радио? 
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 93,
    text:
      `
        — Не нравится мелодия? — с задором произнес парень. 
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 94,
    text:
      `
        — Нравится, конечно. Просто интересно послушать еще варианты.
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 95,
    text:
      `
        — Аврора, не спрашивай о таких мелочах. Просто выбери то, что тебе хочется. 
      `,
    buttons: [
      {
        text: 'Послушать Трек 1',
        func: () => {
          soundManager.play('music', musicPlayer.AuroraDaily01)
          saveData(['Aurora', 'Daily', 'Music'], ['01'])
        }
      },
      {
        text: 'Послушать Трек 2',
        func: () => {
          soundManager.play('music', musicPlayer.AuroraDaily02)
          saveData(['Aurora', 'Daily', 'Music'], ['02'])
        }
      },
      {
        text: 'Продолжить с прослушиваемой музыкой',
        goTo: 96
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 96,
    text:
      `
        Послушав несколько песен, мне все же пришлась по душе именно эта мелодия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    message: 'Так как ваша Аврора любит музыку, вам доступен дополнительный выбор музыки на повседневную жизнь девушки в городе',
    achievement: { story: EStoriesEn.Aurora, name: 'MusicLover' },
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 97,
    text:
      `
        Несмотря на то, что мы с Артуром были довольно близки: я ему доверяла, и чувствовала с его стороны похожие ощущения — мне в голову пришел один очевидный вопрос. 
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 98,
    text:
      `
        С чего вдруг он проявил такую любезность, помогая мне? Он такой по натуре или есть какие-то скрытые мотивы? 
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 99,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Effect', id: 'BeRomantic' }) >= 1
        },
        goTo: 100
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Effect', id: 'BePragmatic' }) >= 1
        },
        goTo: 103
      }
    ],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 100,
    text:
      `
        Конечно, я боялась. Как неизвестность, так и излишняя доброта меня пугала. Мой старший брат Ян всегда учил, что нельзя так просто полагаться на людей. Нужно лучше узнавать их. 
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 101,
    text:
      `
        Но почему-то к Артуру я не испытывала опаски. Мне хотелось полностью доверять ему, невзирая на мои предубеждения. Это было наивно. Но я так чувствовала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 102,
    text:
      `
        Однако для своего же спокойствия, я решила спросить: 
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 103,
    text:
      `
        Мой старший брат Ян всегда учил, что нельзя так просто полагаться на людей. Нужно лучше узнавать их. 
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 104,
    text:
      `
        И сейчас, когда я на пути к своей новой жизни, мне хочется знать истинную причину такого отношения и быть более уверенной в человеке, с которым я отправилась в это путешествие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 105,
    text:
      `
        Для своего же спокойствия, я решила спросить: 
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 106,
    text:
      `
        — Артур, скажи, почему ты согласился на всю эту авантюру? 
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 107,
    text:
      `
        — Аврора, — не отвлекаясь от дороги, проговорил парень. — Я понимаю, твои опасения. Но не переживай, у меня нет скрытых мотивов, я делаю это просто, чтобы помочь тебе встать на ноги. 
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 108,
    text:
      `
        — Но почему? — я не собиралась сдаваться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 109,
    text:
      `
        — Просто потому что я вижу, какой ты хороший человек. Я вижу, как твой отец хотел для тебя другой жизни. Как ты хотела для себя чего-то нового. Помнишь наш разговор, когда мы пошли прогуляться по лесу? 
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 110,
    text:
      `
        Мы с Артуром много гуляли. Когда он приезжал, то часто рассказывал мне о своей жизни в городе, о своих увлечениях и учебе. Мне было только в радость, что парень открывается для меня с разных сторон. 
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 111,
    text:
      `
        Я:
      `,
    buttons: [
      {
        text: 'Помню этот разговор',
        goTo: 112,
        gift: true
      },
      {
        text: 'Не могла вспомнить',
        goTo: 152
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 112,
    text:
      `
        Мы с Артуром частенько гуляли по территории вокруг маяка. В один из солнечных дней мы решили пройтись по лесу, который был в пятнадцати минутах езды от нашего дома. 
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    music: require('../../../../Sounds/Aurora/Romantic_Man.mp3'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Forest.jpg')
  },

  {
    id: 113,
    text:
      `
        Тогда прошло около месяца с того времени, как мамы не стало. Легкий ветерок покачивал деревья, а лесная обстановка позволяла абстрагироваться от всех проблем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Forest.jpg')
  },

  {
    id: 114,
    text:
      `
        Это было похоже на сказку, где вот-вот из-за деревьев выйдет добрый волшебник, взмахнет своим посохом и весь мир преобразится. 
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Forest.jpg')
  },

  {
    id: 115,
    text:
      `
        Артур шел рядом со мной. Мы разговаривали на всякие отвлеченные темы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Forest.jpg')
  },

  {
    id: 116,
    text:
      `
        — Повезло же нам с погодой, — отметил парень, любуясь красотами природы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Forest.jpg')
  },

  {
    id: 117,
    text:
      `
        — Ты прав, — его слова навели меня на одну идею. — А помнишь ту поляну, которую мы нашли в прошлый раз? Может быть снова пойдем туда и немного отдохнем?
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_TShirt.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Forest.jpg')
  },

  {
    id: 118,
    text:
      `
        — Хорошая идея! Если я правильно помню, то это где-то в той стороне, — Артур показал куда-то на восток. — Заодно перекусим. 
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Forest.jpg')
  },

  {
    id: 119,
    text:
      `
        Мы прошли еще немного вглубь леса. Артур галантно помогал мне преодолевать препятствия, поддерживая за руку, отодвигая назойливые ветки деревьев. 
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Forest.jpg')
  },

  {
    id: 120,
    text:
      `
        Остаток пути прошел в спокойствии. Наконец, мы достигли места назначения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Forest.jpg')
  },

  {
    id: 121,
    text:
      `
        Фиолетовые цветы располагались на просторной поляне. Солнце почти село. Его лучи пытались пробраться сквозь стволы деревьев, одаривая нас своим теплом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 122,
    text:
      `
        Я прилегла на траву и раскинула руки по сторонам. Так хорошо, так умиротворенно. Именно то, что хотелось чувствовать каждый день.
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 123,
    text:
      `
        Артур аккуратно сел рядом. Почему-то он улыбался. Так искренне. Так живо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 124,
    text:
      `
        — Артур, случилось что-то хорошее?
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_TShirt.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 125,
    text:
      `
        — Конечно! Мы сейчас с тобой вдвоем. Далеко от всей суеты. Наедине с природой. И… — он достал из рюкзака по сэндвичу. — Как же обойтись без вкусняшек. 
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 126,
    text:
      `
        Он видел, что я не улыбалась так, как это было раньше. На секунду парень о чем-то задумался, а затем спросил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 127,
    text:
      `
        — Аврора, как ты? 
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 128,
    text:
      `
        — Все хорошо, — я понимала, почему он задает такой вопрос и не врала. Сейчас я правда себя так ощущала. Но внешне это было трудно заметить.  
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_TShirt.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 129,
    text:
      `
        — Я рад… Скажи, ты бы хотела уехать в город и начать жить иначе?
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 130,
    text:
      `
        Вопрос застал меня врасплох. Я привстала, чтобы смотреть в глаза Артуру и сказала правду:
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 131,
    text:
      `
        — Хотела бы. Но я не могу бросить отца. Мне трудно представить, как ему сейчас тяжело. 
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_TShirt.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 132,
    text:
      `
        Улыбка Артура стала от чего-то еще шире. 
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 133,
    text:
      `
        — Мне нравится осознавать, что в мире остались люди, которые настолько ценят свою семью.
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 134,
    text:
      `
        — Пропажа брата, затем смерть… — я не смогла договорить предложение. — Папе как-никак сейчас нужна поддержка. А ведь он еще как-то умудряется работать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_TShirt.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 135,
    text:
      `
        Артур придвинулся ближе ко мне и взял меня за руку. В ответ я: 
      `,
    buttons: [
      {
        text: 'Сжала его руку сильнее',
        goTo: 136
      },
      {
        text: 'Ничего не сделала',
        goTo: 142
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 136,
    text:
      `
        Я чувствовала в этом жесте поддержку. Он как никто понимал, что мне тоже было очень тяжело. 
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 137,
    text:
      `
        Другой рукой парень притянул меня и заключил в крепкие объятия. Я расслабилась, ощущая его дыхание на своей шее, его сердцебиение. Сейчас мы с ним были словно единое целое. 
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 138,
    text:
      `
        — Артур, спасибо тебе. За все. 
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_TShirt.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 139,
    text:
      `
        — Аврора, обещаю. Я помогу тебе, чем смогу. Я вижу, как тебе нелегко приходится и не допущу, чтобы ты продолжала так... 
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 140,
    text:
      `
        Он не договорил, но его высказывания все равно отозвались теплом на сердце. Я не представляла тогда, что мог придумать Артур, но его слова и действия невольно заставляли верить в светлый исход. 
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 301,
    text: '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Images/Aurora/Cutscenes/Flowerfield.mp4'), goTo: 141 },
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 141,
    text:
      `
        Оставшиеся часы до темноты, я пролежала на плече Артура. Не плача, не испытывая грусти. Только наслаждалась его компанией и разговорами, что грели душу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    message: 'Артур становится ближе к Авроре',
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Person', id: 'Arthur' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 142,
    text:
      `
        Разговор выбил меня из привычной колеи спокойствия, к которому я стремилась. Я верила Артуру, но сейчас мне было тяжело отвечать на подобные вопросы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 143,
    text:
      `
        Парень, видя мою реакция, отстранился и проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 144,
    text:
      `
        — Прости, я не должен был давить на тебя всеми этими расспросами… 
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 145,
    text:
      `
        — Ты ничего такого не сделал, просто я, видимо, до сих пор не могу смириться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_TShirt.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 146,
    text:
      `
        — Аврора, обещаю. Я помогу тебе, чем смогу. Я вижу, как тебе нелегко приходится и не допущу, чтобы ты продолжала так... 
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 147,
    text:
      `
        Он не договорил, но его высказывания все равно отозвались теплом на сердце. Я не представляла тогда, что мог придумать Артур, но его слова и действия невольно заставляли верить в светлый исход. 
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 148,
    text:
      `
        Оставшиеся часы до темноты, мы сидели рядом друг с другом и мирно вели беседу на различные темы, стараясь чуть дольше не возвращаться в реальность.
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flower_Glade.jpg')
  },

  {
    id: 150,
    text:
      `
        Я вынырнула из воспоминаний, снова встретившись взглядом с Артуром в салоне его автомобиля. 
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    music: musicPlayer[`AuroraDaily${loadData(['Aurora', 'Daily', 'Music'])}`],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 151,
    text:
      `
        — Я рад, что тот день запомнился. Теперь ты понимаешь, что я тогда говорил правду. Видя твое стремление к другой жизни, я не мог ни помочь.
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    message: 'Артуру приятно, что вы помните его поддержку',
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Person', id: 'Arthur' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 152,
    text:
      `
        — Извини, все как в тумане. Я помню лес, но не могу вспомнить конкретных деталей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    music: musicPlayer[`AuroraDaily${loadData(['Aurora', 'Daily', 'Music'])}`],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 153,
    text:
      `
        Было видно, что Артур на миг расстроился, но сразу же взял себя в руки и рассказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 154,
    text:
      `
        — Именно тогда я обещал тебе, что постараюсь помочь изменить твою жизнь. Ведь ты сама этого хотела. И, надеюсь, теперь ты убедилась, что я говорил правду и сдержал свое слово. 
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 155,
    text:
      `
        — Спасибо, Артур. Я никогда не забуду эту помощь и обязательно буду делать все, чтобы отплатить тебе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 156,
    text:
      `
        — Брось. Не забивай себе голову этим. Я от тебя ничего не требую. 
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 157,
    text:
      `
        — Но я требую от себя. Я так не могу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 158,
    text:
      `
        — Придет время и ты обязательно отплатишь, — сдался парень, наигранно громко вздохнув.
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 159,
    text:
      `
        Дальнейшие часы в пути прошли, по большей части молча. Я не хотела больше отвлекать Артура от дороги, к тому же меня продолжало сильно клонить в сон. 
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 160,
    text:
      `
        Мне снился маяк. Но там не было отца или мамы.
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    beforeBegin: whiteFlash,
    music: require('../../../../Sounds/Aurora/Sad.mp3'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 161,
    text:
      `
        На смотровой площадке стояла одинокая фигура старика, который держал в руках маленький сверток. Без сомнения в нем был ребенок.
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 162,
    text:
      `
        Мужчина бережно придерживал малыша, укрывая его от ветра. У него дрожали руки, а по щекам лились слезы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 163,
    text:
      `
        Его хриплый голос произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 164,
    text:
      `
        — Беатрис… 
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 165,
    text:
      `
        В этом коротком сказанном слове было столько боли, столько отчаяния. Старик цеплялся за сверток как за самое драгоценное, что было в его жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 166,
    text:
      `
        Он смотрел на море, которое было спокойным в ту ночь. Его зоркий взгляд пытался отыскать что-то среди воды, однако даже свет маяка не мог помочь ему выбраться из тьмы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 167,
    text:
      `
        Неожиданно ребенок начал ворочаться, а затем громко плакать. Мужчина стал успокаивать его, но крики так и продолжали пронзать мирную тишину. 
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 168,
    text:
      `
        Я проснулась от легкого прикосновения по плечу. Сонным разумом было сложно осознавать, где я сейчас нахожусь. Однако обеспокоенно лицо Артура вернуло меня в реальность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    beforeBegin: whiteFlash,
    music: require('../../../../Sounds/Aurora/Daily_01.mp3'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 169,
    text:
      `
        — Аврора, все в порядке? Ты дрожала и плакала во сне.
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 170,
    text:
      `
        — Просто дурной сон, извини за беспокойство…
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 171,
    text:
      `
        — Дурочка, отучись извиняться за любую мелочь, — Артур заглушил машину. — Мы приехали. 
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 172,
    text:
      `
        Артур припарковался перед высотным зданием. Большой город встретил присущей ему суматохой. Много людей, спешивших по своим делам, много машин, много разных звуков. 
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home.jpg')
  },

  {
    id: 173,
    text:
      `
        Выйдя из автомобиля, мы зашли в подъезд и поднялись в квартиру Артура. 
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home.jpg')
  },

  {
    id: 174,
    text:
      `
        Приятное, просторное и светлое помещение. В гостиной на столе стояла ваза со свежими белыми розами, а на кухне пахло выпечкой, будто бы здесь только что готовили.
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 175,
    text:
      `
        Вид квартиры многое мог рассказать о ее владельце. У меня сложилось впечатление, что Артур очень трепетно относится к своему имуществу и явно подготовился к моему приезду. 
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 176,
    text:
      `
        — Давай немного отдохнем, а затем я тебе все покажу, — сказал Артур, складывая наши вещи. — Не хочешь чай или кофе?
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 177,
    text:
      `
        Такой простой вопрос почему-то поставил меня в тупик. Поэтому я ответила нейтрально:
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 178,
    text:
      `
        — Сделай что-нибудь на свой вкус. Спасибо!
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 179,
    text:
      `
        Парень улыбнулся и поставил чайник на плиту. 
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 180,
    text:
      `
        — Нет ничего лучше зеленого чая после долгой дороги, — несколько чашек оказались на столе. — Кстати, Аврора, уже написала папе, что мы благополучно добрались? 
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    parallax: 'left',
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 181,
    text:
      `
        — Да! Обычно смс всегда доходят, а вот послать в ответ сообщение бывает проблематично. 
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    parallax: 'left',
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 182,
    text:
      `
        — Ничего. Я оставил ему адрес, он всегда сможет отправить письмо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 183,
    text:
      `
        Я кивнула. После этого мы немного посидели, болтая о нашем переезде и о том, как быстро все это произошло. 
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 184,
    text:
      `
        Я изъявила желание искать подработку, чтобы не зависеть от папиных средств. Когда же речь заходила о работе Артура, то парень старался перевести тему. Он не любил вдаваться в подробности рабочих дел.
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 185,
    text:
      `
        Спустя долгое время я чувствовала себя умиротворенно. Сидя в совершенно новой обстановке и общаясь с дорогим мне человеком. Нет больше тех грустных мыслей, которые появлялись, стоило мне вновь увидеть маяк и пустые комнаты.
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 186,
    text:
      `
        Но я понимала, что здесь работы над собой предстоит в разы больше. 
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    parallax: 'right',
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 187,
    text:
      `
        Мы с Артуром прошлись по его квартире. В ней было всего две комнаты. Они были небольшие, отделанные в довольно простом и минималистичном дизайне — ничего лишнего. 
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 188,
    text:
      `
        Моя комната выглядела очень уютной. Синеватые тона невольно отсылали к привычному мне морскому пейзажу, что не могло ни радовать глаз. 
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 189,
    text:
      `
        Я присела на кровать, ощупывая мягкое одеяло. В комнате пахло цветами. Было свежо и красиво. 
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 190,
    text:
      `
        — Спасибо, Артур, очень милая комната. 
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 191,
    text:
      `
        — Я рад, что тебе понравилось, — парень облокотился о стену, внимательно следя за моей реакцией, будто бы боясь, что мне может что-то не понравиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 192,
    text:
      `
        — Скажи, — я не хотела торопить события, но все-таки и сидеть без дела было не в моем стиле. — Какие наши дальнейшие планы? Мне надо подать документы в университет, найти работу… 
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 193,
    text:
      `
        — Твое рвение в бой — выше всяких похвал, — вздохнул Артур. — Не хотела бы отдохнуть для начала?
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 194,
    text:
      `
        — Я в порядке. Я хочу как можно быстрее влиться в новый ритм жизни. 
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 195,
    text:
      `
        — Что ж, — парень на секунду задумался. — В теории, хоть завтра я могу отвезти тебя в университет, где ты познакомишься с обстановкой, может быть даже с кем-то из преподавателей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 196,
    text:
      `
        — Все, что тебе надо будет сделать — это сдать несколько вступительных экзаменов. Об остальном я позаботился. 
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 197,
    text:
      `
        Я была ошеломлена таким развитием событий и спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 198,
    text:
      `
        — Но как же? Я ведь даже не собирала никаких документов для этого. 
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 199,
    text:
      `
        — Мы с твоим отцом обо всем позаботились. 
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 200,
    text:
      `
        — Разве можно подать дистанционно документы даже без согласия самого человека?
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 201,
    text:
      `
        — Можно. Это же двадцать первый век, — улыбнулся Артур. — У тебя хороший аттестат. А у меня — связи. Знакомый моего отца знает чуть ли ни всю верхушку университета. И, кстати, у тебя будут ответы на экзамен.  
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 202,
    text:
      `
        — Но это же нечестно… 
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 203,
    text:
      `
        — Аврора, а мир и не будет всегда честным. Нужно научиться выживать всеми доступными способами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 204,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Effect', id: 'BeRomantic' }) >= 1
        },
        goTo: 205
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Effect', id: 'BePragmatic' }) >= 1
        },
        goTo: 208
      }
    ],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 205,
    text:
      `
        — Однако я думала, что поступлю своими силами. Ведь на то они и знания, чтобы их применять. 
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 206,
    text:
      `
        — У тебя еще будет время и возможности проявить себя. Сейчас нужно отбросить свою мечтательность и бороться за то место, которое тебе предоставили. 
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 207,
    text:
      `
        Он был прав. Возможно, я мыслила немного наивно, но такова была моя натура.
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 208,
    text:
      `
        — Ты прав. Это отличная возможность. Даже не знаю, как тебя в очередной раз благодарить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 209,
    text:
      `
        — Я рад, что ты восприняла это таким образом. Не волнуйся, у тебя еще будет шанс проявить себя. Сейчас попробуй зацепиться за это, дальше время покажет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 210,
    text:
      `
        Он говорил верные мысли. Не каждому человеку дается такая возможность. Можно сказать, что мне очень повезло. 
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 211,
    text:
      `
        — Думаю, когда момент наступит, я решу как поступлю с экзаменом. А сейчас мне нужно ознакомиться с вопросами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 212,
    text:
      `
        — Дело твое, — парень пожал плечами и вышел из комнаты. 
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 213,
    text:
      `
        Через несколько минут он вернулся с несколькими распечатанными листами А4. 
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 214,
    text:
      `
        — Здесь все вопросы и ответы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 215,
    text:
      `
        — Отлично, — я бережно положила листы на кровать. — А направление? 
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 216,
    text:
      `
        — К сожалению или к счастью, удалось пристроить тебя на исторический курс. Других вариантов не было. Твой отец говорил, что тебе нравится история, думаю, это не будет проблемой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 217,
    text:
      `
        — К тому же, в дальнейшем, когда поступишь, сможешь перевестись при необходимости. 
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 218,
    text:
      `
        — Это на самом деле отличные новости, нет смысла привередничать.
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 219,
    text:
      `
        — У тебя остается пара недель до вступительных экзаменов. Если ты не уверена в своих силах и хочешь дополнительно позаниматься, можешь пользоваться библиотекой университета. 
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 220,
    text:
      `
        — Я бы начала готовиться уже с завтрашнего дня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 221,
    text:
      `
        — Как скажешь. Я могу отвезти тебя утром, но я должен буду уехать по работе. Где-то в обед заберу, ничего? 
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 222,
    text:
      `
        — Идеально. Спасибо!
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora_Sweater.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 223,
    text:
      `
        — Тогда до завтра. Отдыхай. 
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 224,
    text:
      `
        Когда Артур покинул комнату, я разложила свои вещи и принялась осматривать листы с вопросами, тщательно стараясь вникнуть и составить примерный список тем, которые у меня западают. 
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 225,
    text:
      `
        Я сильно вымоталась за этот насыщенный день, поэтому стоило голове коснуться подушки, как я тут же уснула. 
      `,
    buttons: [
      {
        text: 'Продолжить',
        gift: true,
        goTo: 226
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 226,
    text:
      `
        Утром мы с Артуром позавтракали яичницей с кофе и перед тем, как ехать по делам, я переоделась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 227,
    text:
      `

      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    wardrobe: { story: EStoriesEn.Aurora, personId: 'Aurora_City', goTo: 228 },
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 228,
    text:
      `
        — Ты справишься там одна, без меня?
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 229,
    text:
      `
        — Я же не маленький ребенок, Артур. Все будет хорошо. Тем более, что может случиться?
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 230,
    text:
      `
        — Ты права. Просто беспокоюсь за тебя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 231,
    text:
      `
        В этом был весь Артур. Волнующийся по пустякам, милый и заботливый. 
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 232,
    text:
      `
        — И чуть не забыл, — парень протянул мне карточку. — С ним ты можешь спокойно проходить в университет для любых целей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Item', id: 'Pass01' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 233,
    text:
      `
        — Спасибо! — я убрала пропуск в свой рюкзак, продолжая поездку.  
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 234,
    text:
      `
        Мы доехали до учебного заведения довольно быстро. Попрощавшись с Артуром, я зашла в университет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 235,
    text:
      `
        Холл представлял собой большое пространство с широкой лестницей посередине. Первые секунды мною даже завладел страх потеряться в этом неизведанном месте. 
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Hall.jpg')
  },

  {
    id: 236,
    text:
      `
        Но я быстро взяла себя в руки, показала охраннику свой временный пропуск, который Артур заранее мне вручил. 
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Hall.jpg')
  },

  {
    id: 237,
    text:
      `
        Средних лет мужчина равнодушно осмотрел документ и указал в сторону, где находилась библиотека. 
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Hall.jpg')
  },

  {
    id: 238,
    text:
      `
        Огромное помещение встретило меня запахом старинных книг и шепотом студентов. Массивные шкафы с торчащими корешками удивляли. Хотелось изучить каждую книгу, ближе познакомиться с мыслями автора. 
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Library.jpg')
  },

  {
    id: 262,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Effect', id: 'ChooseWriter' }) >= 1
        },
        goTo: 239
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Effect', id: 'ChooseWriter' }) < 1
        },
        goTo: 240
      }
    ],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Library.jpg')
  },

  {
    id: 239,
    text:
      `
        Моему счастью не было предела. Я словно оказалась в месте, о котором так долго мечтала.
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Library.jpg')
  },

  {
    id: 300,
    text:
      `
        Окруженная книгами, я чувствовала себя живой и по-настоящему в своей тарелке. Когда-нибудь я обязательно хотела оказаться тем самым автором, чья книга могла бы находиться среди этих великолепных работ. 
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Library.jpg')
  },

  {
    id: 240,
    text:
      `
        Милая библиотекарша отвела меня в небольшой закуток, где находились необходимые мне источники. 
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 241,
    text:
      `
        Я стала осматривать книжные полки в поисках исторических книг. Когда я потянулась за нужной мне, чья-то мужская рука соприкоснулось с моей. Я почувствовала легкую дрожь, пальцы незнакомца были необычайно холодными. 
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 242,
    text:
      `
        Я развернулась, чтобы увидеть наглеца, который все-таки утащил мою книгу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 243,
    text:
      `
        — «Революция 1917 года: мифы и реальность», — он прочитал название книги своим бархатистым низким голосом. — Вот чем нынче увлекаются молоденькие студентки?
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 244,
    text:
      `
        — Я просто хотела подготовиться к экзамену, верни, пожалуйста, — ответила я довольно строго. 
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 245,
    text:
      `
        Его глаза хитро прищурились. Он взял книгу и демонстративно повел ей у меня перед носом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 246,
    text:
      `
        — А что мне за это будет? — его рука опустилась на полку, не давая мне вырваться из-под его хищного взора. 
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 247,
    text:
      `
        Он был настолько близко, что я чувствовала исходящий от него аромат: табачный дым вперемешку с одеколоном. Парень был очень настойчив, казалось, его забавляла эта ситуация. 
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 248,
    text:
      `
        Я хотела что-то возразить незнакомцу, но чей-то звонкий женский голос крикнул:
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 249,
    text:
      `
        — Калеб!
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 250,
    text:
      `
        Тогда я еще не осознавала, что это было только началом новых и увлекательных знакомств. 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('Aurora', 'Глава 1', 'Часть 3', '0')
        }
      }],
    achievement: { story: EStoriesEn.Aurora, name: 'Chapter01Part02Completed' },
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  }
])
