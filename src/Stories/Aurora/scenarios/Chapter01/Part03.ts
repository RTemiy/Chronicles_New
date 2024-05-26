import { saveEndProgress, scenarioManager, statsManager, timer, wardrobe } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { musicPlayer } from '../../../../Functions/musicPlayer'
import { loadData } from '../../../../Functions/localStorageManager'
import { whiteFlash } from '../../../../Components/Slide/Slide'

scenarioManager.addScenario({ storyName: EStoriesEn.Aurora, chapterName: 'Глава 1', partName: 'Часть 3', code: '0' }, [
  {
    id: 0,
    text:
      `
        Я отложила дневник, наблюдая, как алое солнце стремится уйти за горизонт, чтобы скорее уступить место долгожданной ночи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/Aurora/Lighthouse.mp3'),
    ambient: require('../../../../Sounds/Aurora/Wind.mp3'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Dawn.jpg')
  },

  {
    id: 1,
    text:
      `
        Небо переливалось самыми разнообразными красками, словно некий безумный художник выплеснул на полотно все самые яркие цвета, надеясь в этом хаосе почерпнуть вдохновение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Dawn.jpg')
  },

  {
    id: 2,
    text:
      `
        Я завороженно наблюдала за чудесами природы и была абсолютно уверена, что совсем скоро продолжу писать уже полюбившийся мне дневник. 
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Dawn.jpg')
  },

  {
    id: 4,
    text:
      `
        Но, прежде, мне захотелось побыть наедине со своими мыслями и чашечкой ароматного чая. 
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Dawn.jpg')
  },

  {
    id: 5,
    text:
      `
        Еще немного полюбовавшись на прекрасный пейзаж, я спустилась со смотровой площадки маяка и направилась к нашему домику. 
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Observation_Dawn.jpg')
  },

  {
    id: 6,
    text:
      `
        Все оставалось по-прежнему. Тихая и мирная обстановка. Красивая и уютная комната. 
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 7,
    text:
      `
        Я села на диван вместе с напитком и завернулась в плед, пытаясь еще раз обдумать написанные строки.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 8,
    text:
      `
        — Артур, где же ты… Почему ты всегда был рядом, но теперь решил покинуть меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 9,
    text:
      `
        Отставив кружку, я обхватила себя руками, пытаясь унять дрожь и успокоиться. Но не в силах сдержаться — дала волю слезам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 10,
    text:
      `
        — Почему все вышло именно так? Ты же моя опора. Мой… — тяжело было говорить из-за подступающих эмоций, которые буквально съедали меня изнутри. — Я никогда не забуду твою поддержку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 11,
    text:
      `
        Все мои чувства перемешались. Я с трудом могла мыслить, ведь столько событий обрушились на меня. А еще столько предстояло написать и будто бы вновь пережить.
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 12,
    text:
      `
        Снова взяв в руки чай, я все-таки нашла в себе силы продолжить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 13,
    text:
      `
        — Моя первая встреча с Калебом. Каким же нахалом он был по началу, а какой чувственной натурой оказался по итогу.
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 14,
    text:
      `
        Я крепко сжала кружку, буквально обжигая свою ладонь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 15,
    text:
      `
        «Сколько же всего с тобой связано. Ты причинил мне столько боли, и одновременно с этим столько радости».
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 16,
    text:
      `
        Неожиданно для себя я наконец-то смогла улыбнуться. Ведь в тот день мне удалось познакомиться с человеком, который полностью поменял мою жизнь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 17,
    text:
      `
        — Я ведь тогда встретила первый раз не только Калеба… И все-таки: как после такого не верить в судьбу?
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 18,
    text:
      `
        «Я должна продолжить. Это необходимо. От этого зависит не только мое будущее. Соберись, Аврора». 
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 19,
    text:
      `
        «Скоро начнется одна из самых важных частей всей истории. Мне нужно сосредоточиться и зафиксировать все в точности».
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 20,
    text:
      `
        Калеб выглядел немного растерянным и озирался по сторонам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    message: '<i> Вы вернулись в воспоминания ',
    beforeBegin: whiteFlash,
    music: musicPlayer[`AuroraDaily${loadData(['Aurora', 'Daily', 'Music'])}`],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 21,
    text:
      `
        — Только не она… — парень вдруг посмотрел на меня и схватил за плечи. — Спрячь! Не выдавай!
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Aurora, value: 0, category: 'Person', id: 'Kaleb' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 22,
    text:
      `
        — Что? — я пыталась проследить за его взглядом, не понимая откуда мог доноситься звук. — Зачем мне это делать?
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 23,
    text:
      `
        — Ну, я же очаровашка, — он спрятался за одним из книжных стеллажей, показывая мне знаком, чтобы я не издавала звуков.
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 24,
    text:
      `
        — Ты же мне книжку так и не вернул, — прошептала я. — И зачем мне выгораживать тебя?
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 25,
    text:
      `
        И вдруг я заметила молодую девушку, которая была подобно вихрю. Ее абсолютно не смущало, что мы находимся в библиотеке, где приветствуется тишина. 
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 26,
    text:
      `
        Нет. Она бежала сломя голову через весь зал, даже вопреки возгласам рассерженной библиотекарши. <p> <p><s> Черты лица как у модели. Живая, бодрая. С растрепанными волосами.  
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 27,
    text:
      `
        Она была очень красива, даже несмотря на легкую злость, которую она испытывала. Белая кофта. Светлые волосы и горящие глаза. Именно такой я запомнила ее в нашу первую встречу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 28,
    text:
      `
        — Девушка? Да-да, вы. Не видели тут наглого и немного симпатичного на вид парня? — стараясь выровнять дыхание произнесла незнакомка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    stats: [{ story: EStoriesEn.Aurora, value: 0, category: 'Person', id: 'Dalia' }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 29,
    text:
      `
        Я растерялась, так как не привыкла к такому вниманию. Должно быть эта девушка очень хотела отыскать Калеба, а я продолжала смотреть на нее не в силах что-либо произнести.
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 30,
    text:
      `
        После нескольких секунд она продолжила:
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 31,
    text:
      `
        — Брось, я же видела. Он точно был тут. Не волнуйся ты так, просто скажи, куда он вдруг испарился. 
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 32,
    text:
      `
        — Я… нет, то есть… 
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 33,
    text:
      `
        — У вас все в порядке? Выглядите немного напуганной. Неужели этот засранец что-то сделал?! Калеб, а ну-ка выходи сейчас же! — девушка начала озираться по сторонам и вот-вот могла увидеть, где он скрывается. 
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 34,
    text:
      `
        Все это кардинально отличалось от моего привычного ритма жизни, ведь я настолько вжилась в роль одиночки, что даже простой разговор с новыми людьми заставлял сильно нервничать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 35,
    text:
      `
        Но я старалась перебороть себя, так как мне действительно хотелось быть выше своих заморочек и наконец-то начать полноценно жить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 36,
    text:
      `
        Как мне лучше поступить? 
      `,
    buttons: [
      {
        text: 'Выдать Калеба',
        goTo: 37
      },
      {
        text: 'Подыграть Калебу',
        goTo: 50
      }],
    beforeBegin: () => {
      timer.set(7, () => { scenarioManager.beginScene(37) })
    },
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 37,
    text:
      `
        Мне не было смысла его выгораживать. К тому же, он вел себя слишком вызывающе при нашей первой встрече. 
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 38,
    text:
      `
        Пусть знает, что я не одна из этих простушек, которые так легко поддаются на его «чары». 
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 39,
    text:
      `
        Я жестом показала, где скрывается Калеб. 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 40,
    text:
      `
        — Он серьезно думал, что я не найду его там, — девушка вздохнула. — Выходи давай. Уж не знаю, зачем ты решил спрятаться, но ведешь себя по-детски.
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 41,
    text:
      `
        Вскоре Калеб вышел, поднимая руки вверх, будто бы сдаваясь полицейскому. 
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 42,
    text:
      `
        — Да что ты ко мне прицепилась? Мы уже миллион раз обсуждали. Ты перегибаешь палку, Далия. Все хорошо. Я просто беседовал с этой милой девушкой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 43,
    text:
      `
        То, что он назвал меня милой, было лишь одним из его приемчиков, которому все же удалось смутить. Я вскользь посмотрела на Калеба, пытаясь угадать его эмоции. 
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 44,
    text:
      `
        Он выглядел немного опечаленным, словно его тревожило нечто очень важное, а может просто раздражала сложившаяся ситуация. 
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 45,
    text:
      `
        Калеб поймал мой взгляд, но долго не задержался, опустив голову вниз, а затем произнес: 
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 46,
    text:
      `
        — Мы можем пойти уже?
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 47,
    text:
      `
        Далия с сочувствием обернулась ко мне, видимо заметив, что мне немного не по себе, и сказала: 
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 48,
    text:
      `
        — Надеюсь, у тебя все в порядке. Чтобы не случилось, не раскисай. Позитив правит этим миром. 
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 49,
    text:
      `
        Они вдвоем ушли, оставляя меня в легкой растерянности стоять посреди библиотеки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 50,
    text:
      `
        Я решила не выдавать его. Он не выглядел, как плохой человек. А если попросил помощи, должна быть весомая причина такому поведению. 
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    beforeBegin: () => { timer.stop() },
    stats: [{ value: 1, category: 'Choice', id: 'HelpKaleb' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 51,
    text:
      `
        — Он вроде убежал из библиотеки, но я не уверена, — произнесла я дрожащим голосом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 52,
    text:
      `
        — Спасибо! Нельзя было оставлять его, так и знала, что убежит при любой удобной возможности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 53,
    text:
      `
        — Но все в порядке…
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 54,
    text:
      `
        — Я надеюсь, — она улыбнулась. — Мне стоит догнать его, пока он не натворил бед. Увидимся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 55,
    text:
      `
        Девушка резво побежала в указанном мною направлении. 
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 56,
    text:
      `
        Из своего укрытия вышел Калеб, который удивленно смотрел на меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 57,
    text:
      `
        — Вот уж не думал, что решишься соврать. Зачем ты это сделала?
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 58,
    text:
      `
        — Мне показалось — тебе это необходимо. Вот и все.
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 59,
    text:
      `
        — Хех, — он ухмыльнулся. — Допустим. 
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 60,
    text:
      `
        Минуту другую он о чем-то размышлял, а затем произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 61,
    text:
      `
        — Услугу за услугу. Вижу, что на тебя можно положиться, поэтому буду должен. Если что понадобится — помогу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 62,
    text:
      `
        — Не стоит. Я ничего такого не сделала и… 
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 63,
    text:
      `
        Он вдруг приставил указательный палец к моим губам, заставляя не заканчивать фразу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 64,
    text:
      `
        — Будь увереннее и не отказывайся от помощи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    message: 'Калебу понравилась ваша ложь. Он придет на помощь в трудную минуту',
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Person', id: 'Kaleb' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 65,
    text:
      `
        Мне нечего было возразить на это и я покорно кивнула. 
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 66,
    text:
      `
        — Пока-пока, — Калеб вышел из библиотеки, махая мне рукой напоследок. 
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    achievement: { story: EStoriesEn.Aurora, name: 'HelpKaleb' },
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 67,
    text:
      `
        Оставшись наедине с собой, я выдохнула, так как осталась в комфортной и привычной для себя обстановке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 68,
    text:
      `
        Однако несмотря на произошедшую ситуацию, я ни сколько не пожалела, что пообщалась с такими странными, но в то же время веселыми людьми. 
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 69,
    text:
      `
        Убрав книги, которыми я пользовалась, чтобы повторить материал для предстоящего экзамена, я направилась в холл университета. 
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bookshelves.jpg')
  },

  {
    id: 70,
    text:
      `
        Время, к которому Артур должен был приехать, приближалось. Я решила позвонить ему и спросить, где он. Зная Артура, он вполне мог приехать заранее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Hall.jpg')
  },

  {
    id: 71,
    text:
      `
        Набрав нужный номер, в ответ я услышала лишь нудные гудки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    simple: require('../../../../Sounds/Immortals/Beep_Long.mp3'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Hall.jpg')
  },

  {
    id: 72,
    text:
      `
        Успокоив себя тем, что он должно быть за рулем или ждет меня около учебного заведения, поспешила выйти из университета. 
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Hall.jpg')
  },

  {
    id: 73,
    text:
      `
        На улице я наткнулась на Калеба и Далию, которые громко о чем-то спорили. 
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 74,
    text:
      `
        — Тебе так просто от меня не избавиться! — девушка ткнула Калеба в плечо. — Долго ты еще будешь убегать?
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 75,
    text:
      `
        — Надоела… 
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 76,
    text:
      `
        — Ах вот оно как, мистер невозмутимость.
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 77,
    text:
      `
        Я не хотела больше подслушивать чужие разговоры. К тому же, меня больше волновало то, что я нигде не видела Артура. 
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 78,
    text:
      `
        Несколько предпринятых попыток дозвониться, окончились все той же неудачей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    simple: require('../../../../Sounds/Immortals/Beep_Long.mp3'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 79,
    text:
      `
        Волнение охватило меня, потому что я находилась одна в неизвестном городе, даже не помня дорогу домой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 80,
    text:
      `
        Не говоря уже о том, что в голове возникло несколько ужасных сценариев с Артуром в главной роли.
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 81,
    text:
      `
        Нервно шагая из стороны в сторону, я пыталась понять, как мне лучше поступить.
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 82,
    text:
      `
        Но ничего такого не придумав, решила вернуться в университет в надежде, что рано или поздно Артур все-таки приедет за мной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 83,
    text:
      `
        Я корила себя за беспечность. Ведь я даже не запомнила адрес дома в котором остановилась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 84,
    text:
      `
        Да, все действительно происходило быстро и стремительно, но полагаться полностью на Артура было недальновидно с моей стороны. 
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 85,
    text:
      `
        Он тоже человек, у которого могли возникнуть непредвиденные обстоятельства. 
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 86,
    text:
      `
        Неожиданно за моей спиной оказалась Далия, которая тихонечко тронула меня за плечо и произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 87,
    text:
      `
        — Что случилось? 
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 88,
    text:
      `
        Тогда я действительно хотела сказать правду, видя искреннее беспокойство в ее глазах. Но все равно произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 89,
    text:
      `
        — Ничего. 
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 90,
    text:
      `
        Нехотя к нам присоединился и Калеб, который сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 91,
    text:
      `
        — Да видно же, что ты себе место найти не можешь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 92,
    text:
      `
        — Просто, — под таким давлением я не могла больше молчать. — За мной должны были приехать. Но он не берет трубку… 
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 93,
    text:
      `
        — Так закажи такси. Все же просто, — парень развел руками. — Давай я закажу, если вдруг проблемы с деньгами. Сочтемся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 94,
    text:
      `
        — Я не помню адрес, — от смущения хотелось провалиться сквозь землю. 
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 95,
    text:
      `
        — Неожиданно, — Далия призадумалась. — И что ты теперь будешь делать? 
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 96,
    text:
      `
        — А что мне еще остается? Ждать, конечно. Наверняка он скоро приедет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 97,
    text:
      `
        — А если не приедет?
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 98,
    text:
      `
        — Прости, что?
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 99,
    text:
      `
        — Ну, вдруг что-то случилось и… 
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 100,
    text:
      `
        — Далия, — Калеб вмешался в наш разговор. — Хватит преувеличивать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 101,
    text:
      `
        — Я просто пытаюсь сказать, что самым лучшим решением будет развеяться и пойти погулять. Вот и все. Снять стресс, а заодно лучше познакомиться с городом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 102,
    text:
      `
        Услышанное никак не могло уложиться в голове. Девушка, которую я вижу всего второй раз в жизни предлагает мне нечто подобное — безумство. Я элементарно растерялась, отводя взгляд в сторону. 
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 103,
    text:
      `
        — Ну, уж нет, — парень смотрел на Далию, будто бы понимая, что она замышляет. — Никуда я с тобой не поеду. И эта девушка, разумеется, откажется. 
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 104,
    text:
      `
        — Все верно. Я не могу никуда уехать. А вдруг он будет волноваться и искать меня?
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 105,
    text:
      `
        — Тебя же он заставил поволноваться, — Далия вздохнула. — Послушай. Всего на час или два. Тут ходит автобус, который довезет нас прямо в центр города. Познакомимся. Мы покажем тебе местные достопримечательности. Будет весело. 
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 106,
    text:
      `
        — Я даже не знаю…
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 107,
    text:
      `
        — Брось. Ну, побудешь с нами, пока его нет, уверена тебе понравится и заодно перестанешь так переживать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 108,
    text:
      `
        — Он позвонит тебе, если приедет и не найдет здесь. Не волнуйся, с ним вряд ли что-то случилось. Просто заработался и забыл написать.
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 109,
    text:
      `
        — С нами? — удивленно произнес Калеб. — Не будет никаких «нас». 
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 110,
    text:
      `
        — Конечно, будет. Далия, Калеб и… — девушка посмотрела на меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 111,
    text:
      `
        — Аврора, — я смущенно улыбнулась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 112,
    text:
      `
        — Вот! Отличная компания. Хватит вам наводить тоску. 
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 113,
    text:
      `
        — Нет уж, без меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 114,
    text:
      `
        — Калеб, — Далия слегка нахмурилась. — Давай не будем. Ты обещал мне кое-что. Забыл?
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 115,
    text:
      `
        — Это другое. При чем тут дурацкая поездка в город? 
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 116,
    text:
      `
        — А это все связано. Давай не будем больше спорить. Ты знаешь — я права. Ну, что, Аврора, едем? 
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 117,
    text:
      `
        Я понимала — это чистое безумие. Выбираться в совершенно неизвестный мне город с людьми, с которыми познакомилась совсем недавно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 118,
    text:
      `
        Однако в чем-то Далия была права. Артур пропал, не сказав ничего. Он мог отправить хотя бы СМС. Но не сделал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 119,
    text:
      `
        Всего час ничего не изменит. В конце концов, Артур может позвонить, если все-таки объявится. 
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 120,
    text:
      `
        — Согласна.
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 121,
    text:
      `
        — Я не сомневалась в тебе, — она широко улыбнулась и несколько раз прыгнула на месте, радуясь от счастья. — Давайте поторопимся, а то опоздаем на автобус. 
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 122,
    text:
      `
        Калеб даже не стал спорить, а просто покорно принял ситуацию и последовал за нами с недовольным лицом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Outside.jpg')
  },

  {
    id: 123,
    text:
      `
        На остановке я и Далия сели на скамейку, а Калеб остался стоять рядом, высматривая транспорт. 
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bustop.jpg')
  },

  {
    id: 124,
    text:
      `
        Мне же стало интересно больше узнать о своей новой компании и я осмелилась спросить:
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bustop.jpg')
  },

  {
    id: 125,
    text:
      `
        — Скажи, Далия, а вы тоже будете поступать на первый курс этого университета? 
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bustop.jpg')
  },

  {
    id: 126,
    text:
      `
        — Все верно. Скажу тебе по секрету: уже не терпится начать учиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bustop.jpg')
  },

  {
    id: 127,
    text:
      `
        — Сдай экзамены для начала, — сказал Калеб. — А то на уме явно не учеба. 
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bustop.jpg')
  },

  {
    id: 128,
    text:
      `
        — Давай без твоих занудств, — она надула губы и отвернулась.
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bustop.jpg')
  },

  {
    id: 129,
    text:
      `
        — То есть, только тебе можно так себя вести? 
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bustop.jpg')
  },

  {
    id: 130,
    text:
      `
        — Это как это так? — она резко встала и ткнула Калеба прямо в грудь. — Ты, мне кажется, забыл, почему я этим занимаюсь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bustop.jpg')
  },

  {
    id: 131,
    text:
      `
        Слушая их препирательства, я невольно улыбалась, словно наблюдая за давними друзьями, которые вечно что-то не могут поделить.
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bustop.jpg')
  },

  {
    id: 132,
    text:
      `
        Это было одновременно мило и интересно, потому что я все больше узнавала их с совершенно разных сторон. 
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bustop.jpg')
  },

  {
    id: 133,
    text:
      `
        Вот — Калеб, который весь из себя такой угрюмый, пытается построить себе образ серьезного человека, а на деле, кажется, что не так уж его тяготят подобные авантюры.  
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bustop.jpg')
  },

  {
    id: 134,
    text:
      `
        А Далия. Несмотря на ее задор, видно, какая она ответственная и серьезная девушка. Я не представляла, почему она так печется о Калебе, но уверена — должна быть причина. 
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bustop.jpg')
  },

  {
    id: 135,
    text:
      `
        — Все, хватит, — Калеб махнул рукой. — Зачем все это выслушивать Авроре? Мы же вроде хотели придерживаться «позитива».
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bustop.jpg')
  },

  {
    id: 136,
    text:
      `
        — Да, — Далия посмотрела на меня. — Прости. Мы вечно как кошка с собакой. Наверное, со временем мы сможем сгладить углы…
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bustop.jpg')
  },

  {
    id: 137,
    text:
      `
        — Чур, я — кошка, — парень улыбнулся, пытаясь разрядить обстановку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bustop.jpg')
  },

  {
    id: 138,
    text:
      `
        — Все хорошо. Я в порядке, — раскрасневшись произнесла я. — Мне правда с вами хорошо. Я практически забыла, что оказалась в такой неловкой ситуации. А слушая вас, на душе становится гораздо теплее.
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bustop.jpg')
  },

  {
    id: 139,
    text:
      `
        — Ты милашка, ничего не могу с собой поделать, — Далия вдруг приблизилась ко мне и крепко обняла. — Иногда мне трудно сдерживать свои эмоции. Особенно когда я вижу рядом с собой такого светлого и искреннего человека.
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bustop.jpg')
  },

  {
    id: 140,
    text:
      `
        Вскоре приехал автобус. Внутри было мало людей, поэтому нам удалось сесть рядом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 141,
    text:
      `
        — Аврора, а чего мы только о нас да и о нас. Расскажи, откуда ты приехала? — спросила Далия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 142,
    text:
      `
        — Я из небольшого городка в нескольких часах езды отсюда. Мы долгое время жили там, но потом нам с семьей пришлось переехать на маяк, который находился в уединение, на берегу моря.  
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 143,
    text:
      `
        Калеб оживился и внимательно посмотрел на меня, будто бы услышал очень занимательную информацию. 
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 144,
    text:
      `
        — Маяк? 
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 145,
    text:
      `
        — Да. После смерти предыдущего смотрителя, моему отцу предложили занять его место. Мы не раздумывая согласились отправиться туда с ним. 
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 146,
    text:
      `
        — До этого он постоянно работал как проклятый, мы практически не виделись. Поэтому никак не могли позволить себе жить и дальше в разлуке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 147,
    text:
      `
        — Но почему ты все же решилась уехать? — с сочувствием спросила Далия.  — Извини, если это личное…
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 148,
    text:
      `
        — Все в порядке, — мне была очень приятна проявленная чуткость. — Я была как меж двух огней. Признаться, до сих пор себя так ощущаю. Я хочу начать жить.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 149,
    text:
      `
        — Для себя. Но и не смею бросить своего отца. Да, он сам настаивал на переезде. Однако то одиночество… Я боюсь за него. 
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 150,
    text:
      `
        — Не переживай, — Далия положила свою руку на мою. — Просто почаще навещай его, пиши. Уверена, ты все это и так знаешь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 151,
    text:
      `
        — Все равно, спасибо.
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 152,
    text:
      `
        — Знаешь, а я никогда не была на маяке. Как было бы здорово однажды посмотреть…
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 153,
    text:
      `
        — Скажи, Аврора, — Калеб вдруг перебил Далию, очень желая задать свой вопрос. — А что случилось с предыдущим смотрителем? 
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 154,
    text:
      `
        Его заинтересованность немного удивила меня. Казалось странным, что из всего рассказа, его волновал именно этот момент. Но все же я ответила правду:
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 155,
    text:
      `
        — Всех подробностей я не знаю. Артур, его внук, говорил, что он скончался от болезни.
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 156,
    text:
      `
        — Вот оно как…
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 157,
    text:
      `
        — Знаете что, — Далия повысила голос и начала говорить более задорным тоном. — Хватит грустить. Поговорим о чем-нибудь другом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 158,
    text:
      `
        — Аврора, лучше расскажи о своем увлечении? Какое у тебя хобби? Что делаешь в свободное время?
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 159,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Effect', id: 'ChooseArtist' }) >= 1
        },
        goTo: 160
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Effect', id: 'ChooseWriter' }) >= 1
        },
        goTo: 181
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Effect', id: 'ChooseMusician' }) >= 1
        },
        goTo: 196
      }
    ],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 160,
    text:
      `
        — В свободное время я рисую. В основном пейзажи. На маяке для меня открывалось много обзоров, которые вдохновляли, так и просились на бумагу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 161,
    text:
      `
        — Так-так, — Далия потерла ладошки и придвинулась ко мне поближе. — Вот это совпадение. Я сама большой ценитель искусства. 
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 162,
    text:
      `
        — Ты тоже рисуешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 163,
    text:
      `
        — Все верно! Больше всего мне нравится рисовать людей. Передавать их эмоции. Все до мелочей. Могу показать свою последнюю работу. Одну секунду, — она начала выискивать рисунок в своем рюкзаке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 164,
    text:
      `
        Вскоре Далия достала небольшую папку и раскрыла ее на нужном изображении. 
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 165,
    text:
      `
        — Это человек, с которым я мечтаю познакомиться… 
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 166,
    text:
      `
        Рисунок был выполнен аккуратными мазками. Чувствовалось, как автор вкладывает туда не только свой талант, но и душу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Lennart_Picture.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 167,
    text:
      `
        Прекрасный юноша улыбался, будто бы смотрел на любимую женщину. 
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Lennart_Picture.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 168,
    text:
      `
        Может, это и хотела передать Далия? 
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Lennart_Picture.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 169,
    text:
      `
        — Это потрясающе, — я не могла сдержать эмоции. — У тебя талант!  Кажется, это кто-то очень знакомый…
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 170,
    text:
      `
        — Спасибо, но ты преувеличиваешь, — Далия смущенно улыбнулась. — Ты что же, не знаешь этого человека? Или у меня не вышло передать его образ…
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 171,
    text:
      `
        — Нет-нет, я правда не могу никак вспомнить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 172,
    text:
      `
        — Хм, — девушка с недоверием посмотрела на меня. — Это Леннарт. Солист знаменитой группы «Kings & Queens». А я их самая большая фанатка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 173,
    text:
      `
        — Точнее его, — ехидно бросил Калеб. 
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 174,
    text:
      `
        — Не завидуй. Он прекрасен: фигура, улыбка, эти волшебные глаза... Нет, ну, как можно быть таким очаровательным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 175,
    text:
      `
        — Далия, — Калеб придвинулся к нам, смотря на рисунок. — Когда я уже увижу свой портрет? 
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 176,
    text:
      `
        — А ты не заслужил, — она фыркнула, закрыла папку и убрала в рюкзак. 
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 177,
    text:
      `
        — Конечно… Поди целый альбом с моим изображением под кроватью прячешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 178,
    text:
      `
        Далия замахнулась на него кулаком и мы дружно рассмеялись.
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 179,
    text:
      `
         — Аврора, удивительно встретить человека, который еще и разделяет мои интересы. Считаю не зря твой спутник опоздал, сколько чудесного произошло из-за этой случайности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    message: 'У вас с Далией схожий интерес. Вы узнаете друг друга лучше',
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Person', id: 'Dalia' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 180,
    text:
      `
        — Спасибо за откровенность! Это очень здорово, что наше хобби совпадает.
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    achievement: { story: EStoriesEn.Aurora, name: 'FavouriteSolist' },
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 181,
    text:
      `
        — Мне нравится писать. Небольшие рассказы или стихи. Специального образования у меня нет, но мне помогает отвлечься от всяких плохих мыслей.
      `,
    buttons: [
      {
        text: '',
        goTo: 400
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 400,
    text:
      `
        — Ого, интересное совпадение, — Далия показала пальцем на Калеба. — Ему тоже нравится нечто подобное. 
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 182,
    text:
      `
        Калеб бросил на меня любопытный взгляд и спросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 183,
    text:
      `
        — А любимый писатель есть?
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 184,
    text:
      `
        — Не то чтобы… Я люблю и уважаю творчество во всех проявлениях. Поэтому не могу выделить кого-то конкретного. 
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 185,
    text:
      `
        — Я, например, — говорила Далия. — Очень люблю стихи Эдгара Аллана По. Особенно все эти мистические мотивы… Как же он красиво обыгрывает все своим мастерским словом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 186,
    text:
      `
        — Не могу не согласиться, — улыбнулся парень.
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 187,
    text:
      `
        — Я не читала ни одного его стихотворения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 188,
    text:
      `
        — Не может быть? — удивилась Далия. — Это срочно надо исправлять. 
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 189,
    text:
      `
        — Поддерживаю, — кивнул Калеб. — А я вот из тех безумцев, которым нравится творчество писателя Франца Кафки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 190,
    text:
      `
        — Никогда не могла тебя понять, — развела руками девушка. — Это редкостная нудятина. Пока герой Кафки закончит мысль, даже в стихах больше экшена произойдёт.  
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 191,
    text:
      `
        — В этом твоя проблема. Ты постоянно куда-то торопишься. А читая его произведения, так и хочется смаковать каждый момент, рассуждая вместе с персонажем.
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 192,
    text:
      `
        Я была приятно удивлена, что Калеб оказался таким разносторонним человеком. Не каждому дано полюбить искусство, но он буквально оживал на глазах, когда говорил о своем кумире. Это не могло не восхитить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 193,
    text:
      `
        — Да и, Аврора. Если я не забуду, то обязательно принесу томик стихов Эдгара По. Тебе точно понравится, — улыбался Калеб, смотря на меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 194,
    text:
      `
        — Спасибо тебе большое!
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    message: 'У вас с Калебом схожий интерес. Вы узнаете друг друга лучше',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Person', id: 'Kaleb' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 195,
    text:
      `
        — На самом деле не за что. Я рад, что у нас совпало хобби.
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    achievement: { story: EStoriesEn.Aurora, name: 'FavouriteWriter' },
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 196,
    text:
      `
        — Очень люблю слушать музыку. В будущем надеюсь, что смогу научиться играть на каком-нибудь инструменте или даже написать свои мелодии.
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 197,
    text:
      `
        — У тебя обязательно все получится. Может, однажды сам Леннарт, солист популярнейшей группы «Kings & Queens», будет обучать тебя этому мастерству. 
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 198,
    text:
      `
        — Далия, это невозможно, — отмахнулась я. — Это же какое обстоятельство должно произойти, чтобы мы встретились.
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 199,
    text:
      `
        — Да ладно тебе, Аврора, — произнес Калеб. — В конечном итоге, все мы люди. А у судьбы есть свои планы на твой счет. Не расстраивайся раньше времени. 
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 200,
    text:
      `
        — Правильно, Калеб у нас философ, — Далия шутливо толкнула его в плечо. — Все может произойти. А если еще стараться… Например, пойти на концерт, занять места в первом ряду и смотреть ему в глаза весь концерт…
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 201,
    text:
      `
        — Далия просто одержима Леннартом, — парень откинулся на сиденье. — Или как это правильно выразиться: «фанатка номер один». 
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 202,
    text:
      `
        — Прекрати… Нравится он мне, да. Но не то, чтобы фанатка. Просто хочу выйти за него замуж, что такого. 
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 203,
    text:
      `
        Мы с Калебом переглянулись и разразились смехом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 204,
    text:
      `
        До окончания поездки, мы продолжали вести непринужденную беседу и узнавать друг друга. На удивление, я и правда расслабилась и понемногу начала привыкать к моим новым знакомым.
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bus_Inside.jpg')
  },

  {
    id: 205,
    text:
      `
        Автобус действительно довез нас прямо до центра города. 
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    parallax: 'left',
    music: require('../../../../Sounds/Aurora/City.mp3'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 206,
    text:
      `
        Я увидела фонтан и жестом позвала ребят к нему. Лучи теплого солнца кое-где пробивались сквозь величественные здания, бросая блики на воду. 
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 207,
    text:
      `
        Меня тут же захватила атмосфера крупного города с присущей ему суетой и величием.  
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 208,
    text:
      `
        Хотелось заблудиться здесь на несколько часов, но не было времени, да и мне не позволяли этого сделать. Далия и Калеб повели меня дальше по улице. 
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 209,
    text:
      `
        Какое-то время мы просто гуляли по округе, рассматривая архитектуру, просто наслаждаясь обществом друг друга. 
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Streets.jpg')
  },

  {
    id: 210,
    text:
      `
        Даже Калеб, казалось, полностью расслабился и перестал ворчать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Streets.jpg')
  },

  {
    id: 211,
    text:
      `
        Он даже вошел во вкус нашей спонтанной прогулки и делился своими знаниями во время наших обсуждений.
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Streets.jpg')
  },

  {
    id: 212,
    text:
      `
        Далия же безмерно улыбалась, постоянно воображая, что могло бы быть на месте постройки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Streets.jpg')
  },

  {
    id: 213,
    text:
      `
        — Ох, как же мне этого не хватало. Знаете, что? Стойте тут. Я добавлю нам сладости. 
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Streets.jpg')
  },

  {
    id: 214,
    text:
      `
        Мы с Калебом удивленно переглянулись, не понимая замысел Далии. 
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Streets.jpg')
  },

  {
    id: 215,
    text:
      `
        Но вскоре она вернулась с несколькими палочками сахарной ваты и победоносно вручила их нам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Cotton_Candy.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Streets.jpg')
  },

  {
    id: 216,
    text:
      `
        Когда с едой было покончено, Далия неожиданно указала куда-то пальцем и заявила: 
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Streets.jpg')
  },

  {
    id: 217,
    text:
      `
        — У меня есть еще одна идея. 
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Streets.jpg')
  },

  {
    id: 218,
    text:
      `
        — Ну, нет, — говорил Калеб. — Хороше же сидим, что тебе все неймется? 
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Streets.jpg')
  },

  {
    id: 219,
    text:
      `
        — Можно сделать еще интереснее, не говоря уже о пользе моего предложения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Streets.jpg')
  },

  {
    id: 220,
    text:
      `
        — Что ты имеешь в виду, Далия? — уточнила я. 
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Streets.jpg')
  },

  {
    id: 221,
    text:
      `
        — Видите, там проводят экскурсию. Давайте незаметно присоединимся к ней и послушаем немного. Точно ведь узнаем что-то новое. 
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Streets.jpg')
  },

  {
    id: 222,
    text:
      `
        — Не буду говорить о том, какая эта дурацкая идея, поэтому просто промолчу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Streets.jpg')
  },

  {
    id: 223,
    text:
      `
        — Наконец-то ты понял, что со мной бесполезно спорить. Аврора? — девушка смотрела на меня горящими глазами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Streets.jpg')
  },

  {
    id: 224,
    text:
      `
        Идея мне очень понравилась. Хоть и было немного страшно, что кто-то спросит у нас билеты, да и просто отчитает в конце концов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Streets.jpg')
  },

  {
    id: 225,
    text:
      `
        Однако перспектива узнать больше о городе — интриговала. И было что-то такое притягательное в Далии, с ней хотелось совершить какое-то безумство.  
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Streets.jpg')
  },

  {
    id: 226,
    text:
      `
        — Почему бы и нет… Только осторожно. Нам нельзя привлекать внимание. 
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Streets.jpg')
  },

  {
    id: 227,
    text:
      `
        Когда группа двинулась далее, мы незаметно примкнули к потоку. Внутри все переворачивалось от осознания, что мы поступаем не правильно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Streets.jpg')
  },

  {
    id: 228,
    text:
      `
        Но в то же время я почему-то отчетливо ощутила — с этими новыми знакомыми мне ничего не грозит. 
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Streets.jpg')
  },

  {
    id: 229,
    text:
      `
        Вскоре экскурсовод привел группу к собору, рядом с которым располагалось кладбище. Это старое здание стояло несколько веков, переживая раз за разом тяготы жестоких исторических событий. 
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    music: require('../../../../Sounds/Aurora/Church.mp3'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 230,
    text:
      `
        Но его шпиль все еще пронзает небеса, что, безусловно, восхищало.
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 231,
    text:
      `
        Однако вместе с этим в глубине души росло необъяснимое чувство тревоги. 
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 232,
    text:
      `
        Это место было мрачным, но, по-своему, притягательным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 233,
    text:
      `
        Неожиданно Калеб замер, внимательно осматривая здание. На его лице читалось неподдельное отвращение и совершенное нежелание идти дальше. 
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 234,
    text:
      `
        — Я пойду прогуляюсь по округе. Встретимся у фонтана. 
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 235,
    text:
      `
        — Но что случилось? — обеспокоенно спросила я. — Если тебе не нравится, давайте лучше уйдем, чтобы всем было комфортно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 236,
    text:
      `
        — Нет-нет, просто нужно сделать пару звонков. Веселитесь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 237,
    text:
      `
        Парень резко ушел, будто бы не желая слышать дальнейших уговоров. Далия ничего не произнесла, лишь с грустью смотрела ему вслед. 
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 238,
    text:
      `
        Оставшись наедине с девушкой, мы стали слушать рассказ экскурсовода: 
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 239,
    text:
      `
        — Собор построен в 1598 году известным итальянским архитектором Марко Берлускони. Здание пережило несколько реставраций после сокрушительных войн, но сумело дожить до нашего времени и сейчас полностью функционирует. 
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 240,
    text:
      `
        — А это правда, что здесь некогда располагалась секта? — спросил подросток — участник экскурсии. 
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Teenager.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 241,
    text:
      `
        — Кхм, — экскурсовод поправил очки. — Нет, молодой человек — это миф. Вокруг собора действительно витают множество легенд, но по большей части они все недостоверны и не имеют фактов, указывающих на истину. 
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 242,
    text:
      `
        — И даже убийство — вымысел?
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Teenager.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 243,
    text:
      `
        — Есть одна легенда, — группа заметно оживилась, внимая каждое слово. — Якобы архитектор, Марко Берлускони, был не обычным человеком, а участником тайного общества. 
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 244,
    text:
      `
        — В то время началась гражданская война в Швеции — война против Сигизмунда, правящего короля. И Марко, по приказу власти, построил собор для покаяния неверных крестьян. 
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 245,
    text:
      `
        — Однако что творилось внутри стен, — продолжал экскурсовод. — Никто не знает. Поговаривали, Марко действовал в интересах своей группы. Оттуда и пошла легенда о ритуальных убийствах и кровавой бане, происходившей в соборе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 246,
    text:
      `
        — Но документов или иных источников, подтверждающих этот факт — нет, — завершал свой рассказ мужчина. — Поэтому в историческом обществе принято считать все это байками.
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 247,
    text:
      `
        — Которые были нужны, чтобы устрашить народ перед фигурой короля. 
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 248,
    text:
      `
        Мое дыхание замирало во время этого рассказа. Даже сама мысль о том, что здесь могло происходить подобное — ужасала и выбивала из колеи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 249,
    text:
      `
        Только одно не выходило из головы — это желание поскорее покинуть собор и больше его никогда не видеть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 250,
    text:
      `
        Далия слушала с равнодушным лицом, как будто бы ее совсем не интересовала подобная история. 
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 251,
    text:
      `
        Еще немного послушав экскурсию, девушка произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 252,
    text:
      `
        — Давай вернемся к Калебу. Думаю, на сегодня хватит уроков истории и страшных легенд. 
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 253,
    text:
      `
        Я согласилась, так как сама порядком устала, и мы двинулись к фонтану. 
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 254,
    text:
      `
        — Что думаешь об этой истории? 
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 255,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Effect', id: 'BePragmatic' }) >= 1
        },
        goTo: 262
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Effect', id: 'BeRomantic' }) >= 1
        },
        goTo: 256
      }
    ],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 256,
    text:
      `
        — На самом деле очень интересно. Все эти мифы и легенды по-своему вдохновляют. Уверена, что об этом вышел бы хороший сериал или фильм. И драма: возлюбленные по разные стороны баррикад…
      `,
    buttons: [
      {
        text: '',
        goTo: 257
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 257,
    text:
      `
        — А мне кажется — пустая трата времени. Люди вечно фантазируют без поводов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 258
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 258,
    text:
      `
        — Почему ты так считаешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 259,
    text:
      `
        — Сама подумай: как можно скрыть массовое убийство? Согласна с точкой зрения экскурсовода — это все для устрашения народа. Раз идет восстание, нужны и соответствующие методы подавления. 
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 260,
    text:
      `
        — Может и так. Но все-таки хотелось бы верить, что из этого может получиться нечто интересное. 
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 261,
    text:
      `
        — Согласна. Однако я за реализм. 
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 262,
    text:
      `
        — Не думаю, что это правда. Скорее всего, дело в короле и его интригах.  К тому же, если это не подкрепляется фактами, то и смысл верить.
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 263,
    text:
      `
        — Полностью с тобой согласна. И ведь придумают же… Я даже завидую такому таланту. 
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 264,
    text:
      `
        — А зачем тебе такой навык?
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 265,
    text:
      `
        — Даже и не знаю, — девушка призадумалась. — Просто прикольно что-нибудь такое написать, а все вокруг будут тебе наивно верить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 266
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 266,
    text:
      `
        — Кажется, что это действенный метод, к которому часто прибегали. 
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Church.jpg')
  },

  {
    id: 267,
    text:
      `
        — Твоя правда.
      `,
    buttons: [
      {
        text: '',
        goTo: 370
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 370,
    text:
      `
        Когда мы вернулись, Калеб сидел на бортике фонтана, пребывая в глубоких раздумьях. Он даже не посмотрел в нашу сторону, когда мы подошли к нему, лишь сказал: 
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 268,
    text:
      `
        — Мне нужно уехать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 269,
    text:
      `
        — Все в порядке? — спросила Далия обеспокоенно смотря на парня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 270,
    text:
      `
        — Нет, поэтому мне и нужно уехать. Чтобы все решить. Вызову такси. 
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 271,
    text:
      `
        — Будь осторожен. И пиши, — девушка хотела было сесть с рядом с Калебом, но у нее зазвонил телефон. — Простите, это папа. Я должна ответить.
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 272,
    text:
      `
        Оставшись с Калебом наедине, я немного занервничала, так как возникало ощущение, что моя компания не доставляет ему особого удовольствия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 273,
    text:
      `
        Но на удивление, парень вдруг посмотрел на меня и произнес: 
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 274,
    text:
      `
        — Надеюсь, тебе понравилась прогулка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 275
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 275,
    text:
      `
        — Да, обычно я не поступаю так необдуманно. Но с вами я действительно почувствовала себя хорошо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 276
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 276,
    text:
      `
        — Я рад, — он улыбнулся. — Уверен, мы еще ни раз сможем так провести время. Такси приехало. Пора прощаться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 277,
    text:
      `
        — А как же Далия?
      `,
    buttons: [
      {
        text: '',
        goTo: 278
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 278,
    text:
      `
        — Она не расстроится, что не смогла со мной попрощаться. Мы видимся часто. Мне иногда кажется, даже слишком. 
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 279,
    text:
      `
        Мы двинулись в сторону подъезжающей машины, пребывая в тишине. 
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 280,
    text:
      `
        — Что ж, — парень положил мне руку на плечо. — До встречи, Аврора. 
      `,
    buttons: [
      {
        text: '',
        goTo: 281
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 281,
    text:
      `
        — И тебе всего хорошего, Калеб. 
      `,
    buttons: [
      {
        text: '',
        goTo: 282
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 282,
    text:
      `
        Когда Калеб уехал, я несколько секунд смотрела вслед удаляющейся машине и размышляла: все ли с ним будет в порядке? На этот раз он действительно выглядел крайне озадаченным.
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 283,
    text:
      `
        Собираясь идти к Далии, я заметила на земле нечто, что привлекло мое внимание. 
      `,
    buttons: [
      {
        text: '',
        goTo: 284
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 284,
    text:
      `
        Это была винтажная фотография с запечатленной на ней красивой девушкой.  
      `,
    buttons: [
      {
        text: '',
        goTo: 285
      }],
    parallax: 'right',
    imageFront: require('../../../../Images/Aurora/Items/Mother_Photo.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 285,
    text:
      `
        Изображение было пожелтевшим от времени, а внизу красовалась надпись на французском: «Моя семья». 
      `,
    buttons: [
      {
        text: '',
        goTo: 286
      }],
    parallax: 'right',
    imageFront: require('../../../../Images/Aurora/Items/Mother_Photo.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 286,
    text:
      `
        Я не знала, кто эта незнакомка. В голову пришло предположение, что фотографию мог обронить Калеб. Поэтому я незамедлительно спрятала свою находку в рюкзак и поспешила к Далии. 
      `,
    buttons: [
      {
        text: '',
        goTo: 287
      }],
    parallax: 'right',
    imageFront: require('../../../../Images/Aurora/Items/Mother_Photo.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Item', id: 'MotherPhoto' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 287,
    text:
      `
        Девушка выглядела совсем поникшей. Я подсела к ней на бортик фонтана и спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 288
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 288,
    text:
      `
        — Что случилось, Далия? Я могу чем-то помочь?
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 289,
    text:
      `
        — Аврора, ох, к сожалению, ты ничем не сможешь помочь. Но спасибо за попытку! 
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 290,
    text:
      `
        — И все-таки ты такая грустная. 
      `,
    buttons: [
      {
        text: '',
        goTo: 291
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 291,
    text:
      `
        — Ладно… не знаю, зачем я тебе это рассказываю. Но все дело в моем отце. Он очень суровый человек и постоянно требует от меня невозможного. 
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 292,
    text:
      `
        — Например? 
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 293,
    text:
      `
        — Прости, я не могу сейчас привести конкретный пример. И, признаться, без того паршиво. Просто знай, что он тиран и деспот. Я его не ненавижу, но и по-настоящему любить просто не получается. Тяжелая ситуация. 
      `,
    buttons: [
      {
        text: '',
        goTo: 294
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 294,
    text:
      `
        Вспомнив о своем отце, сердце невольно сжалось. Но мне удалось подавить эмоции и я с улыбкой произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 295
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 295,
    text:
      `
        — Давай еще немного погуляем и вернёмся назад.
      `,
    buttons: [
      {
        text: '',
        goTo: 296
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 296,
    text:
      `
        — Отличная мысль! 
      `,
    buttons: [
      {
        text: '',
        goTo: 297
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 297,
    text:
      `
        Мы ушли с площади, оставляя фонтан позади. 
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 298,
    text:
      `
        Тогда я поймала себя на мысли, что мне очень хочется вернуться сюда. Поделиться драгоценными воспоминаниями с отцом или, может быть, с Артуром.
      `,
    buttons: [
      {
        text: '',
        goTo: 299
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/City_Fountain.jpg')
  },

  {
    id: 299,
    text:
      `
        Петляя по улочкам мы вышли к удивительному современному стеклянному зданию, на фасаде которого красовалась надпись «Rosen medical». 
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 300,
    text:
      `
        — Что это за здание? 
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 301,
    text:
      `
        — Это фармацевтическая компания. Одна из крупнейших в городе. У них даже название происходит от какой-то там древней шведской фамилии. 
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 302,
    text:
      `
        — Ого, очень красивое. 
      `,
    buttons: [
      {
        text: '',
        goTo: 303
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 303,
    text:
      `
        — Ты не поверишь, если я скажу, что мой отец его проектировал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 304,
    text:
      `
        — Он настоящий гений! 
      `,
    buttons: [
      {
        text: '',
        goTo: 305
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 305,
    text:
      `
        — Все так говорят… А теперь пойдем поскорее. Не хочу больше тут находиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 306
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 306,
    text:
      `
        — Постой…
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 307,
    text:
      `
        Я не верила своим глазам, но из здания выходил Артур. Он выглядел очень нервно, постоянно оборачивался назад. 
      `,
    buttons: [
      {
        text: '',
        goTo: 308
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur_Form.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 308,
    text:
      `
        От его добродушного и привычного располагающего вида не осталось и следа. Артур был полностью сосредоточен и шел вперед, пытаясь поскорее оставить здание далеко за спиной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 309
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur_Form.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 309,
    text:
      `
        — Что такое? — уточнила Далия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 310
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 310,
    text:
      `
        — Это Артур! Он должен был забрать меня сегодня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 311
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 311,
    text:
      `
        — Артур? Внук прошлого смотрителя? Какое интересное совпадение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 312
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 312,
    text:
      `
        Первое время, казалось, что Артур ничего не замечал вокруг. Но затем, будто бы неведомые силы заставили его посмотреть в мою сторону. 
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 313,
    text:
      `
        Он сильно удивился, казалось, немного разозлился и стремительно направился в нашу сторону. 
      `,
    buttons: [
      {
        text: '',
        goTo: 314
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 314,
    text:
      `
        — Аврора? Что ты здесь делаешь? Ты же должна быть в университете. 
      `,
    buttons: [
      {
        text: '',
        goTo: 315
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur_Form.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 315,
    text:
      `
        — Должна, но ты не приехал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 316
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 316,
    text:
      `
        — Как…  — Артур посмотрел на время и с грустью взглянул на меня. — Прости, пожалуйста. Я должен был явиться по рабочим вопросам в этот офис. 
      `,
    buttons: [
      {
        text: '',
        goTo: 317
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur_Form.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 317,
    text:
      `
        — Сам не знаю, как так получилось, что я совершенно забыл о времени.
      `,
    buttons: [
      {
        text: '',
        goTo: 318
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur_Form.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 318,
    text:
      `
        — А что это за рабочие вопросы такие? — спросила Далия, испытывающе глядя на Артура. 
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 319,
    text:
      `
        — А ты кто такая? Извини, конечно, но это тебя не касается. 
      `,
    buttons: [
      {
        text: '',
        goTo: 320
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur_Form.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 320,
    text:
      `
        — Ты прав, но поступать так с близкими людьми как минимум — не красиво. Знаю я эти ваши «рабочие встречи». Врать он не умеет. Скрывает что-то!  Какие-нибудь девушки…
      `,
    buttons: [
      {
        text: '',
        goTo: 321
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 321,
    text:
      `
        — Я не собираюсь выслушивать нотации от незнакомки, тем более без веского повода, — Артур прервал Далию и резко схватил меня за руку, потянув в сторону своего автомобиля. 
      `,
    buttons: [
      {
        text: '',
        goTo: 322
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur_Form.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 322,
    text:
      `
        — Но как же, — я растерянно смотрела вслед девушки. — Постой, я даже не попрощалась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 323,
    text:
      `
        — Еще увидимся, Аврора, — крикнула мне Далия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 324
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Farm_Company.jpg')
  },

  {
    id: 324,
    text:
      `
        Мы сели в машину Артура. Не было сил и желания вести разговор, поэтому мы молча поехали в сторону дома. 
      `,
    buttons: [
      {
        text: '',
        goTo: 325
      }],
    music: musicPlayer[`AuroraDaily${loadData(['Aurora', 'Daily', 'Music'])}`],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 325,
    text:
      `
        Я не представляла, почему он мог повести себя так бестактно. Да, я тоже была не права, что отправилась на прогулку, не стала его дожидаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 326
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 326,
    text:
      `
        В конце концов, Далия оказалась права. Ему и правда было не до меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 327,
    text:
      `
        Даже дома разговор не завязывался. Мы не посмели смотреть друг на друга, а в горле застрял несуществующий ком. 
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 328,
    text:
      `
        Неожиданно Артур все-таки произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 329
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 329,
    text:
      `
        — Тебе пришло письмо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 330
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur_Form.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 330,
    text:
      `
        — Спасибо, — взяв в руки конверт, я поспешила в свою комнату. 
      `,
    buttons: [
      {
        text: '',
        goTo: 331
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_City') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 331,
    text:
      `
        Больше мне было невыносимо находиться в такой гнетущей атмосфере. 
      `,
    buttons: [
      {
        text: '',
        goTo: 332
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 332,
    text:
      `
        Наконец-то оставшись сама с собой, я выдохнула, усаживаясь на кровати поудобнее. В голове прокручивался сегодняшний день и множество вопросов, на которые мне хотелось узнать ответы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 333
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 333,
    text:
      `
        Прежде всего меня интересовало: почему Артур так странно вел себя? Неужели работа настолько важна, что ему было сложно даже послать СМС?
      `,
    buttons: [
      {
        text: '',
        goTo: 334
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur_Form.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 334,
    text:
      `
        А Калеб? Куда он так резко отправился? 
      `,
    buttons: [
      {
        text: '',
        goTo: 335
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 335,
    text:
      `
        Что за отношения у Далии с отцом? 
      `,
    buttons: [
      {
        text: '',
        goTo: 336
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 336,
    text:
      `
        Даже легенда собора не отпускала меня, вызывая красочные образы у меня в голове. Все ли там так очевидно? 
      `,
    buttons: [
      {
        text: '',
        goTo: 337
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 337,
    text:
      `
        Но в одном я была уверена точно. Я ни разу не пожалела о своем решении участвовать в такой спонтанной поездке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 338
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 338,
    text:
      `
        Еще больше меня волновало то, что сейчас в руках я сжимала письмо от отца. Конечно же я сразу узнала его аккуратный почерк. 
      `,
    buttons: [
      {
        text: '',
        goTo: 339
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 339,
    text:
      `
        Мне было страшно увидеть написанное, но все же я открыла и начала читать, представляя себя рядом с ним, на маяке.
      `,
    buttons: [
      {
        text: '',
        goTo: 371
      }],
    message: 'Ваши предыдущие действия определили тон письма отца',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 371,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Person', id: 'Dad' }) >= 1
        },
        goTo: 340
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Person', id: 'Dad' }) <= 0
        },
        goTo: 354
      }
    ],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 340,
    text:
      `
        Я не могла не обратить внимание на бумагу, на которой был написан текст. Она была мамина. 
      `,
    buttons: [
      {
        text: '',
        goTo: 341
      }],
    music: require('../../../../Sounds/Aurora/Lighthouse.mp3'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 341,
    text:
      `
        Маме отчего-то очень нравилось коллекционировать необычную бумагу и иногда писать на ней особенные письма. 
      `,
    buttons: [
      {
        text: '',
        goTo: 342
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 342,
    text:
      `
        Оторвавшись от воспоминаний, я принялась читать.
      `,
    buttons: [
      {
        text: '',
        goTo: 343
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 343,
    text:
      `
        <i> Дорогая Аврора, как ты? Я так и не смог отправить тебе СМС, да и не силен в этих современных технологиях. Поэтому использую старый добрый метод — письмо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 344
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Father_Letter_Good.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 344,
    text:
      `
        <i> Расскажи о своих успехах. Обжилась на новом месте? Как у вас с Артуром дела? Что с учебой? Мне интересна любая деталь, связанная с тобой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 345
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Father_Letter_Good.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 345,
    text:
      `
        <i> Что же до меня, то у меня все хорошо. На работе все без изменений, полный штиль. Время от времени приезжают ремонтники. 
      `,
    buttons: [
      {
        text: '',
        goTo: 346
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Father_Letter_Good.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 346,
    text:
      `
        <i> С одним из них даже удалось подружиться. Мои вечера отнюдь не такие одинокие, как ты могла подумать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 347
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Father_Letter_Good.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 347,
    text:
      `
        <i> Мы проводим время с пользой. Общаемся. Часто делимся опытом в рабочей сфере. Представляешь, я даже научился менять лампочку в прожекторе маяка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 348
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Father_Letter_Good.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 348,
    text:
      `
        <i> Не знаю пригодиться ли мне это, но это был поучительный опыт.
      `,
    buttons: [
      {
        text: '',
        goTo: 349
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Father_Letter_Good.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 349,
    text:
      `
        <i> Я скучаю по тебе. Твой подарок греет мне душу и не дает грустить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Father_Letter_Good.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 350,
    text:
      `
        <i> Ты тоже. Постарайся ради нас. 
      `,
    buttons: [
      {
        text: '',
        goTo: 351
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Father_Letter_Good.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 351,
    text:
      `
        <i>Люблю,
      `,
    buttons: [
      {
        text: '',
        goTo: 352
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Father_Letter_Good.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 352,
    text:
      `
        <i> Твой папа
      `,
    buttons: [
      {
        text: '',
        goTo: 353
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Father_Letter_Good.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 353,
    text:
      `
        Отложив письмо в сторону, я улыбнулась, так как была искренне счастлива, что с папой все хорошо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 365
      }],
    music: musicPlayer[`AuroraDaily${loadData(['Aurora', 'Daily', 'Music'])}`],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 354,
    text:
      `
        Я не могла не обратить внимание на бумагу, на которой был написан текст. Она была грязной в каких-то непонятных пятнах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 355
      }],
    music: require('../../../../Sounds/Aurora/Lighthouse.mp3'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 355,
    text:
      `
        В душе сразу поселилось сомнение относительно состояния папы. И я незамедлительно начала читать письмо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 356
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 356,
    text:
      `
        <i> Дорогая Аврора, как ты? Я так и не смог отправить тебе СМС, да и не силен в этих мобильных устройствах. Поэтому использую старый добрый метод — письмо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 357
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Father_Letter_Bad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 357,
    text:
      `
        <i> Расскажи о своих успехах. Обжилась на новом месте? Как у вас с Артуром дела? Что с учебой? Мне интересна любая деталь связанная с тобой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 358
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Father_Letter_Bad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 358,
    text:
      `
        <i> Что же до меня, то я сильно устаю в последнее время. Провожу свои вечера в одиночестве, иногда позволяю себе немного выпить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 359
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Father_Letter_Bad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 359,
    text:
      `
        <i> Это помогает заглушить столь нелегкое бремя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 360
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Father_Letter_Bad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 360,
    text:
      `
        <i> Но я в порядке. Я обещал быть честным с тобой. Да. Период сейчас не самый простой, однако я справляюсь. Иначе и быть не может. 
      `,
    buttons: [
      {
        text: '',
        goTo: 361
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Father_Letter_Bad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 361,
    text:
      `
        <i> Я скучаю по тебе. Твой подарок греет мне душу и не дает окончательно загрустить.
      `,
    buttons: [
      {
        text: '',
        goTo: 362
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Father_Letter_Bad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 362,
    text:
      `
        <i> Люблю,
      `,
    buttons: [
      {
        text: '',
        goTo: 363
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Father_Letter_Bad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 363,
    text:
      `
        <i> Твой папа
      `,
    buttons: [
      {
        text: '',
        goTo: 364
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Father_Letter_Bad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 364,
    text:
      `
        Отложив письмо в сторону, я заплакала от того, что отцу сейчас приходится так несладко, а я думаю лишь о себе и о каких-то несущественных вопросах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 365
      }],
    music: musicPlayer[`AuroraDaily${loadData(['Aurora', 'Daily', 'Music'])}`],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 365,
    text:
      `
        Я дала себе слово, что в ближайшее время обязательно навещу его. 
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 366,
    text:
      `
        А пока, обнимая подушку, я так и уснула с письмом, вспоминая теплые слова своего отца. 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('Aurora', 'Глава 1', 'Часть 4', '0')
        }
      }],
    achievement: { story: EStoriesEn.Aurora, name: 'Chapter01Part03Completed' },
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  }
])
