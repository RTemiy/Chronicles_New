import { saveEndProgress, scenarioManager, statsManager, timer, wardrobe } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { blackFlash, whiteFlash } from '../../../../Components/Slide/Slide'
import { loadData } from '../../../../Functions/localStorageManager'
import { musicPlayer } from '../../../../Functions/musicPlayer'

scenarioManager.addScenario({ storyName: EStoriesEn.Aurora, chapterName: 'Глава 1', partName: 'Часть 4', code: '0' }, [
  {
    id: 0,
    text:
      `
        <i> «Вспомни, кто ты. Вспомни, кем ты была рождена. Вспомни свое предназначение».
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/Aurora/Lighthouse.mp3'),
    ambient: require('../../../../Sounds/Aurora/Sea_Waves.mp3'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse_Night_Blur.jpg')
  },

  {
    id: 1,
    text:
      `
        Веяло холодом, сыростью. Я словно находилась в бескрайнем море, чувствуя, как вода касается каждой частички моего тела.
      `,
    buttons: [
      {
        text: '',
        goTo: 397
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse_Night_Blur.jpg')
  },

  {
    id: 2,
    text:
      `
        Чарующий женский голос не прекращал говорить со мной, проникая глубоко в недра сознания. Я слышала каждое слово и отчего-то мне хотелось прислушаться, убедить себя в правдивости сказанного. 
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse_Night_Blur.jpg')
  },

  {
    id: 3,
    text:
      `
        Но что я должна была вспомнить? 
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse_Night_Blur.jpg')
  },

  {
    id: 4,
    text:
      `
        Меня зовут Аврора. Всю жизнь я жила в маленьком шведском городке вместе со своей семьей. Здесь не было каких-то тайн, каких-то скрытых смыслов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse_Night_Blur.jpg')
  },

  {
    id: 5,
    text:
      `
        <s> По крайне мере тогда, я не могла и подумать о том, что узнала позже...
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse_Night_Blur.jpg')
  },

  {
    id: 6,
    text:
      `
        Сон это был или реальность — никак не получалось определить. Я ощущала замешательство, страх и дурное предчувствие о том, что вот-вот случится непоправимое. 
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse_Night_Blur.jpg')
  },

  {
    id: 7,
    text:
      `
        <i>  «Беатрис…»
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    simple: require('../../../../Sounds/Aurora/Beatrice.mp3'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse_Night_Blur.jpg')
  },

  {
    id: 8,
    text:
      `
        И снова это имя. Без сомнения я уже слышала его. Но почему? Кто-то действительно пытается достучаться до меня?
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse_Night_Blur.jpg')
  },

  {
    id: 9,
    text:
      `
        Мои вопросы так и остались без ответа. Я стояла, словно призрак, в размытых иллюзиях, тайно желая обрести ясность.
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse_Night_Blur.jpg')
  },

  {
    id: 10,
    text:
      `
        Всматриваясь в окружение, мне на миг показалось, что из маяка вышла мужская фигура. Нет. Я точно была в этом уверена.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse_Night_Blur.jpg')
  },

  {
    id: 11,
    text:
      `
        Сердце бешено стучало, подсказывая — это мой отец. Я не видела лица, но в моем сознание все больше укреплялась надуманная вера в эту скользкую правду. 
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse_Night_Blur.jpg')
  },

  {
    id: 12,
    text:
      `
        Фигура стояла около маяка, затем неспешными шагами стала двигаться к морю. И вот она уже по пояс в воде, голова опущена вниз, а тело начало постепенно уходить под воду...
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse_Night_Blur.jpg')
  },

  {
    id: 13,
    text:
      `
        Меня обуял страх, беспокойство. Я попыталась крикнуть, но мой голос отказывался подчиняться, а горло стало неистово жечь, будто бы наполняясь раскаленной лавой.
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Aurora.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse_Night_Blur.jpg')
  },

  {
    id: 14,
    text:
      `
        Оставалось лишь барахтаться в этом замкнутом пространстве, безмолвно наблюдая, как мой самый близкий человек отдает себя на растерзание стихии.  
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse_Night_Blur.jpg')
  },

  {
    id: 15,
    text:
      `
        В тот же миг волны усилились. Под их натиском фигура быстро исчезла из моего поля зрения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse_Night_Blur.jpg')
  },

  {
    id: 16,
    text:
      `
        Я пыталась выбраться из этой клетки, но в ответ на мои терзания, я лишь услышала женский смешок, который где-то отдаленно проговаривал:
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    simple: require('../../../../Sounds/Aurora/Woman_Laugh.mp3'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse_Night_Blur.jpg')
  },

  {
    id: 17,
    text:
      `
        <i> «Выбирай…» 
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse_Night_Blur.jpg')
  },

  {
    id: 18,
    text:
      `
        Я резко проснулась, когда первые лучи солнца лениво проглядывали сквозь шторы, проникая в мою комнату.
      `,
    buttons: [
      {
        text: '',
        goTo: 398
      }],
    beforeBegin: whiteFlash,
    message: '<i> Вы вернулись в воспоминания ',
    music: musicPlayer[`AuroraDaily${loadData(['Aurora', 'Daily', 'Music'])}`],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 19,
    text:
      `
        Голова раскалывалась, а в мыслях застыло стойкое ощущение — это не просто сон. 
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 20,
    text:
      `
        Жгучее предчувствие, что с моим отцом действительно могло произойти непоправимое. Я не представляла при каких обстоятельствах, но никак не могла успокоить стук своего сердца и дрожь в руках.
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 21,
    text:
      `
        И чтобы избежать дальнейших мучений, я незамедлительно решила позвонить ему.
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 22,
    text:
      `
        Но в ответ я лишь услышала:
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 23,
    text:
      `
        <i> «Абонент временно недоступен. Пожалуйста, перезвоните позднее».
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    simple: require('../../../../Sounds/Immortals/Beep_Long.mp3'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 24,
    text:
      `
        Моя тревога усиливалась и перетекала в злость, которую я выплескивала, проклиная чертову связь.
      `,
    buttons: [
      {
        text: '',
        goTo: 399
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 25,
    text:
      `
        Я набрала ванну и легла в теплую воду. Становилось легче. Страх понемногу отступал, как и дурные мысли.  
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Bathroom.jpg')
  },

  {
    id: 26,
    text:
      `
        На смену негативному состоянию, пришла некая трезвость, помогающая сосредоточиться на дальнейших действиях.
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Bathroom.jpg')
  },

  {
    id: 27,
    text:
      `
        Я старалась отпустить ситуацию и дополнительно написала несколько СМС отцу. Даже если он не ответит в ближайшее время, всегда есть вариант написать письмо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Bathroom.jpg')
  },

  {
    id: 28,
    text:
      `
        Уверена, что Артур не откажет в помощи и отправит его. На крайний случай, я в любой момент могу поехать к отцу.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Bathroom.jpg')
  },

  {
    id: 29,
    text:
      `
        Единственный вопрос все никак не отпускал. А что я помню о прошлом? Светлая улыбка моей покойной мамы.
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    beforeBegin: whiteFlash,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 30,
    text:
      `
        Никогда не бывающий дома отец и брат Ян, всегда защищающий меня от невзгод.
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Yan.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Suburbs_Room.jpg')
  },

  {
    id: 31,
    text:
      `
        Кажется, что каких-то кусочков пазла не хватает…
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
        В письме непременно стоит поделиться своим беспокойством с отцом. Он знает меня лучше всех и подскажет, куда двигаться дальше.
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    beforeBegin: whiteFlash,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Bathroom.jpg')
  },

  {
    id: 33,
    text:
      `
        Решив, что с меня хватит водных процедур, я поспешно удалилась из ванной и переоделась.
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Bathroom.jpg')
  },

  {
    id: 34,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    wardrobe: { story: EStoriesEn.Aurora, personId: 'Aurora_Part04', goTo: 35 },
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Bathroom.jpg')
  },

  {
    id: 35,
    text:
      `
        Спустившись на кухню, я села за стол и засмотрелась в окно, откуда открывался неплохой вид на парк.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 36,
    text:
      `
        Там бегали дети, а за ними пытались угнаться уже немолодые родители. Меня всегда умиляли подобные сцены. 
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 37,
    text:
      `
        <s> Представляя, что когда-то и мои дети будут так играть и веселиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 38,
    text:
      `
        Есть или пить совершенно не хотелось. К тому же помимо странного сна, я вспоминала о вчерашнем довольно грубом поведении Артура.
      `,
    buttons: [
      {
        text: '',
        goTo: 400
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 39,
    text:
      `
        Но отчасти это все равно настораживало. Повлияло ли резкое настроение Артура на мое отношение к нему?
      `,
    buttons: [
      {
        text: 'Повлияло',
        goTo: 40
      },
      {
        text: 'Не повлияло',
        goTo: 44
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 40,
    text:
      `
        Я не могла принять тот факт, что он забыл обо мне и нарушил обещание забрать из университета, а также его грубое отношение к Далии.
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    stats: [{ story: EStoriesEn.Aurora, value: 1, category: 'Choice', id: 'AttitudeArthur' }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 41,
    text:
      `
        Она не заслужила такого, тем более в первый день нашего с ней знакомства. 
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 42,
    text:
      `
        Это действительно было чем-то неожиданным и откровенно застало меня врасплох. 
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 43,
    text:
      `
        Конечно, я не откажусь от общения с ним, но определенные выводы были сделаны и обратной дороги нет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    message: 'Вы не можете принять грубого отношения Артура',
    parallax: 'right',
    stats: [
      { story: EStoriesEn.Aurora, value: -1, category: 'Person', id: 'Arthur' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 44,
    text:
      `
        Я не хотела сомневаться в нем. Это все тот же Артур. Человек, который был со мной рядом в тяжелые моменты жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 45,
    text:
      `
        Именно он помог в исполнении моей мечты.
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 46,
    text:
      `
        Уверена, у него был повод так поступить. И мы непременно поговорим с ним об этой ситуации, чтобы избежать недосказанности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    message: 'Вы принимаете Артура таким, какой он есть',
    parallax: 'right',
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Person', id: 'Arthur' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 47,
    text:
      `
        Послышался звук шагов, доносящийся из комнаты Артура. Затем я увидела сонного парня, лениво спускающегося по лестнице.
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 48,
    text:
      `
        — Доброе утро, Аврора, — произнес он немного неловко. — Услышал, как ты встала. Все хорошо? Необычно раннее утро. Ты еще не завтракала? 
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 49,
    text:
      `
        — Нет, — смутилась я, стараясь не смотреть ему в глаза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 50,
    text:
      `
        Артур скрестил руки и недовольно посмотрел в мою сторону. 
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 51,
    text:
      `
        — Это не дело, — он немного призадумался, будто бы не решаясь что-то произнести, но все же нашел смелость это сделать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 52,
    text:
      `
        — А знаешь что? Тут недалеко есть пекарня. Там готовят отменные булочки. Пройдемся?
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 53,
    text:
      `
        Я пребывала в легком замешательстве от такого простого предложения. Стоит ли мне пойти? Поможет ли это разрядить обстановку между нами? 
      `,
    buttons: [
      {
        text: 'Прости, я не в настроении',
        goTo: 54
      },
      {
        text: 'С удовольствием!',
        goTo: 59
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 54,
    text:
      `
        Артур не расстроился, лишь хитро улыбнулся, подошел ко мне поближе и потянул за руку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 55,
    text:
      `
        — Отказы не принимаются! 
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 56,
    text:
      `
        — Зачем тогда спрашивал? — с досадой заметила я. 
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 57,
    text:
      `
        — Хотел проверить твое состояние и убедился, что тебе срочно нужна булочная реанимация. 
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 58,
    text:
      `
        Впервые за утро я искренне улыбнулась. Мне ничего не оставалось кроме как робко кивнуть и последовать за Артуром. 
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 59,
    text:
      `
        Артур ухмыльнулся и произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 60,
    text:
      `
        — Открою тебе тайну, у тебя не было выбора. 
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 61,
    text:
      `
        Впервые за утро я искренне улыбнулась. Мне ничего не оставалось кроме как робко кивнуть и последовать за Артуром. 
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 62,
    text:
      `
        Перед выходом Артур остановился и произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 401
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 63,
    text:
      `
        — Мы поговорим. Обещаю. Только немного попозже. Сейчас я бы хотел провести мирное утро вместе с тобой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 64,
    text:
      `
        Я заметила в его глазах искренность. Видела, что его правда тревожит вся эта ситуация. 
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 65,
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
            return statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'AttitudeArthur' }) >= 1
          },
          goTo: 66
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'AttitudeArthur' }) <= 0
          },
          goTo: 70
        }
      ],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 66,
    text:
      `
        Однако моя обида не хотела так просто уходить. Мне действительно было страшно, непонятно, почему он был столь резок и не повторится ли это вновь?
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 67,
    text:
      `
        Нужно было дать какой-то ответ, поэтому я холодно произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 68,
    text:
      `
        — Хорошо, спасибо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 69,
    text:
      `
        Я уловила легкое разочарование на лице Артура. Но он не стал до конца показывать свои эмоции, а просто продолжал улыбаться, открывая входную дверь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 70,
    text:
      `
        С легким сердцем я выдохнула и на время отпустила ситуацию.
      `,
    buttons: [
      {
        text: '',
        goTo: 402
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 71,
    text:
      `
        — Я действительно рад, что ты такого же мнения, — облегченно произнес парень, открывая входную дверь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 72,
    text:
      `
        Выйдя на улицу, я ощутила легкую прохладу, которая отрезвляла и окончательно оттеснила дурные мысли. 
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 73,
    text:
      `
        Решив пока отложить утренние негодования, мне удалось поддаться моменту, чтобы и правда приятно провести время. 
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 74,
    text:
      `
        Артур вдруг заговорил, прерывая мои размышления:
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 75,
    text:
      `
        — Знаешь, эта пекарня принадлежит одному итальянцу. Поэтому и стиль этого места соответствующий. А какая у этого здания интересная история!
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 76,
    text:
      `
        — Расскажешь? — с любопытством уточнила я.
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 77,
    text:
      `
        — Если ты настаиваешь, — парень выдержал драматическую паузу и продолжил говорить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 78,
    text:
      `
        — Во время второй мировой войны там располагалась библиотека. В то время Швеция хоть и не принимала активного участия в боевых действиях, однако и само положение в мире не располагало к чтению. 
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 79,
    text:
      `
        — Однажды средних лет итальянец, сбежавший с фронта, решил, что это место должно быть его. История умалчивает, откуда у него были деньги и каким образом ему удалось пересечь границу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 80,
    text:
      `
        — А ты что думаешь? — задумчиво спросила я. 
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 81,
    text:
      `
        — Уверен, что все решили связи или подкуп. Бог знает, что он мог творить во время войны. Одно ясно — вышел он оттуда не с пустыми карманами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 82,
    text:
      `
        Я кивнула, продолжая слушать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 83,
    text:
      `
        — Выкупив библиотеку, он немедленно переделал ее под пекарню. Сначала продавал простой хлеб, затем расширился, вводя все больше позиций в меню.
      `,
    buttons: [
      {
        text: '',
        goTo: 403
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 84,
    text:
      `
        — Да! Но вот только, — Артур хитро улыбнулся. — Это, конечно, не доказано, но многие исследователи уверены, что он был шпионом, поставляющим сведения в Германию. 
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 85,
    text:
      `
        — Ничего себе… Может быть он и по немецким документам смог въехать? Ведь Швеция, сохраняя нейтралитет, пыталась угодить сразу всем державам, не разбирая кто враг, а кто друг. 
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 86,
    text:
      `
        — Может. Но мне видится, что все должно быть проще. 
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 87,
    text:
      `
        — Но что за сведения мог передавать простой пекарь?
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 88,
    text:
      `
        — Кто знает, какие у этого пекаря были знакомые. А учитывая, что наша страна поддерживала отношения и с Германией и с Советским Союзом одновременно, то это могли быть очень ценные сведения, несущие угрозу обеим державам.
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 89,
    text:
      `
        — Вот и ответ откуда у него были деньги. Итальянец приехал в Швецию, спонсируемый Германией. Открыл пекарню для отвода глаз и все… 
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 90,
    text:
      `
        — Браво, — Артур добродушно похлопал моему умозаключению. — Вот тебе и идея для целой научной работы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 91,
    text:
      `
        Мы посмеялись, проникаясь царящей атмосферой размышлений и поиска истины.
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 92,
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
            return statsManager.get({ story: EStoriesEn.Aurora, category: 'Effect', id: 'BeRomantic' }) >= 1
          },
          goTo: 93
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.Aurora, category: 'Effect', id: 'BePragmatic' }) >= 1
          },
          goTo: 96
        }
      ],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 93,
    text:
      `
        — И все же смех смехом, но вдруг этот человек действительно просто захотел начать новую жизнь. А все эти шпионские истории — вымысел. 
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 94,
    text:
      `
        — И все ради интригующих заголовков научных работа.
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 95,
    text:
      `
        — Кто знает, — задумался Артур. — Правда всегда останется недосягаемой.
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 96,
    text:
      `
        — И все же интересно получается, как люди ухитряются вести такой образ жизни. 
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 97,
    text:
      `
        — Ведь это не просто ведение бизнеса, а целая двойная игра, где на кону стоит твоя жизнь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 98,
    text:
      `
        — А ты думаешь, все это правда? — спросил Артур. 
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 99,
    text:
      `
        — Сложно сказать. По твоему рассказу — это вполне может быть так.
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 100,
    text:
      `
        — Не знаю. Я склонен сомневаться во всем. История красивая, в ней можно копаться и копаться. Но вот узнаем ли мы когда-нибудь правду?
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 101,
    text:
      `
        — А кто теперь владеет пекарней? - уточнила я. 
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 102,
    text:
      `
        — Мой хороший знакомый — Эцио. Я не особо разбирался в его семейных перипетиях. 
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 103,
    text:
      `
        — Знаю лишь, что в Риме у него есть очень богатая бабушка, которая буквально подарила ему этот бизнес за хорошее поведение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 104,
    text:
      `
        — Так далеко от дома… Должно быть он тоскует по родным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 105,
    text:
      `
        — Он начал свою жизнь с чистого листа, оставив сестру и бабушку в Италии. Он мог бы как сестра поступить в элитное учебное заведение, но решил попытать счастье здесь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 106,
    text:
      `
        — И не прогадал. Уже лет пять он великолепно руководит бизнесом и получает стабильный доход. 
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 107,
    text:
      `
        — Это действительно вызывает восхищение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 108,
    text:
      `
        — Рад, что ты оценила.
      `,
    buttons: [
      {
        text: '',
        goTo: 404
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 109,
    text:
      `
        Снаружи здание выглядело очень ухоженно, а прозрачные витрины, в которых были выставлены свежеиспеченные булочки — только возбуждали аппетит. 
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 110,
    text:
      `
        Артур придержал мне дверь, и мы вошли внутрь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 111,
    text:
      `
        Аромат сладостей, выпечки, все это дурманило голову, особенно на голодный желудок. 
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 112,
    text:
      `
        В это раннее время посетителей было немного, поэтому мы без проблем подошли к кассе, чтобы поздороваться с другом Артура. 
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 113,
    text:
      `
        — Доброе утро, Артур! Не ожидал тебя так рано увидеть, — мужчины пожали друг другу руки. — А что это за красавица с тобой? 
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Ezio.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 114,
    text:
      `
        Меня сильно смутили сказанные им слова, оттого я опустила взгляд вниз. 
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 115,
    text:
      `
        — Это Аврора. Моя дорогая подруга, — Артур приободряющее положил руку мне на плечо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 116,
    text:
      `
        — Прости, Аврора, я не хотел показаться бестактным, — Эцио неловко потеребил себя за затылок. — Просто я часто говорю без разбора и…
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Ezio.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 117,
    text:
      `
        Он сильно занервничал, так как видимо забеспокоился, что доставил мне дискомфорт. 
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 118,
    text:
      `
        — Ничего, — я улыбнулась. — Все хорошо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 119,
    text:
      `
        — Отлично, — Эцио выдохнул, заметно расслабляясь. —  Так что желаете?
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Ezio.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 120,
    text:
      `
        — Буквально двадцать минут назад приехала новая партия — ароматные тарталетки с малиной. Очень рекомендую. Как всегда свежайший хлеб и вкуснейшие булочки с различной начинкой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Ezio.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 121,
    text:
      `
        — Аврора, подумай, чего бы тебе хотелось. Я пока тоже пойду повыбираю. 
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 122,
    text:
      `
        Он отошёл от меня, всматриваясь в ассортимент пекарни. 
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 123,
    text:
      `
        Эцио, заметив мою растерянность, сказал следующее: 
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 124,
    text:
      `
        — Хоть я работаю тут каждый день и уже все наизусть знаю, но у меня до сих пор глаза разбегаются.
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Ezio.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 125,
    text:
      `
        — Это действительно сложно. Пожалуй, посмотрю поближе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 126,
    text:
      `
        Я бродила недалеко от увлеченного Артура и выбирала, чем бы себя побаловать на завтрак. 
      `,
    buttons: [
      {
        text: 'Круассан',
        goTo: 127
      },
      {
        text: 'Тарталетки с малиной',
        goTo: 128
      },
      {
        text: 'Капкейк',
        goTo: 130
      },
      {
        text: 'Кофе',
        goTo: 131
      },
      {
        text: 'Доверить выбор Артуру',
        goTo: 133
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 127,
    text:
      `
        Легкие круассаны наполненные свежими листьями и ветчиной — манили, в дополнение к этому, выглядели они свежо и аппетитно. 
      `,
    buttons: [
      {
        text: 'Выбрать',
        goTo: 136
      },
      {
        text: 'Вернуться к выбору',
        goTo: 126
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Croissant.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 128,
    text:
      `
        Я присмотрелась к новинке, о которой ранее рассказывал Эцио.
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Tartalet.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 129,
    text:
      `
        Небольшие тарталетки со свежими ягодами очень заманчиво располагались на тарелке, вызывая урчание в животе. 
      `,
    buttons: [
      {
        text: 'Выбрать',
        goTo: 136
      },
      {
        text: 'Вернуться к выбору',
        goTo: 126
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Tartalet.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 130,
    text:
      `
        Несколько аппетитных капкейков поглядывали на меня через витрину, привлекая сделать выбор в их пользу. 
      `,
    buttons: [
      {
        text: 'Выбрать',
        goTo: 136
      },
      {
        text: 'Вернуться к выбору',
        goTo: 126
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Cupcake.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 131,
    text:
      `
        За кассой виднелась табличка с выбором ароматного свежемолотого кофе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Coffee.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 132,
    text:
      `
        Порой хочется что-нибудь съесть утром, но может стоит ограничиться бодрящим вкусным напитком?
      `,
    buttons: [
      {
        text: 'Выбрать',
        goTo: 136
      },
      {
        text: 'Вернуться к выбору',
        goTo: 126
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Coffee.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 133,
    text:
      `
        Так и не решив, чем мне хочется позавтракать, я робко подошла к Артуру и дернула его за рукав.
      `,
    buttons: [
      {
        text: '',
        goTo: 405
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 134,
    text:
      `
        — Конечно, — он призадумался, оценивая ассортимент. — Ты обратилась по адресу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 135,
    text:
      `
        — Думаю, это должно тебе понравиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    message: 'Артур всегда рад помочь',
    imageFront: require('../../../../Images/Aurora/Objects/Cupcake.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    stats: [{ story: EStoriesEn.Aurora, value: +1, category: 'Person', id: 'Arthur' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 136,
    text:
      `
        После того, как сложнейший выбор был сделан, я и Артур подошли к Эцио, чтобы оплатить заказ.
      `,
    buttons: [
      {
        text: '',
        goTo: 406
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 137,
    text:
      `
        Это казалось мне неплохой возможностью заработать.
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 138,
    text:
      `
        Конечно, я могла бы ещё подумать с выбором, ведь Артур меня никуда не торопил и, напротив, местами отговаривал. 
      `,
    buttons: [
      {
        text: 'Предложить свою кандидатуру',
        goTo: 139,
        gift: true
      },
      {
        text: 'Подумать ещё над вариантами работы',
        goTo: 148
      }],
    message: 'На протяжении истории Аврора может работать, чтобы быть независимой. Если вы сейчас не выберете работу, будет доступна еще одна возможность',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 139,
    text:
      `
        — Эцио, скажи, — я указала на стену с плакатом. — А это предложение еще актуально?
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Choice', id: 'GoWork' }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 140,
    text:
      `
        Итальянец взглянул на то, куда я указывала и утвердительно кивнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 141,
    text:
      `
        — В последнее время мне очень не везёт с сотрудниками. Разместив объявление в интернете, столкнулся с мошенниками и как-то решил искать по старинке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Ezio.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 142,
    text:
      `
        — Я могу попробовать свои силы? — с максимальной уверенностью произнесла я. 
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 143,
    text:
      `
        Парни с удивлением посмотрели на меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 407
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 144,
    text:
      `
        — Ты же знаешь, я так не могу. Мне хочется помочь, хочется быть полезной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 145,
    text:
      `
        Эцио улыбнулся и ответил мне:
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 146,
    text:
      `
        — Почему бы не попробовать, — итальянец протянул мне визитку со своим номером. — Звони, если возникнут какие-либо вопросы. А приходить можешь завтра утром, начнем твое обучение сразу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Ezio.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 147,
    text:
      `
        Артур с сомнением смотрел на то, как мы договаривались о рабочих моментах, но ничего не комментировал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    message: 'Вы набрались смелости и устроились на работу',
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Effect', id: 'Spirit' }],
    achievement: { story: EStoriesEn.Aurora, name: 'WorkWorkWork' },
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 148,
    text:
      `
        Это было заманчивое предложение, к тому же не так далеко от дома. И все же что-то настораживало меня во всем этом. Или я пыталась себе это внушить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 149,
    text:
      `
        А может, мне казалось, что смогу найти другой вариант или в крайнем случае всегда вернуться к этому. 
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 150,
    text:
      `
        Артур и Эцио напоследок обменялись любезностями и мы покинули пекарню. 
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 151,
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
            return statsManager.get({ story: EStoriesEn.Aurora, category: 'Person', id: 'Arthur' }) >= 3
          },
          goTo: 152
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.Aurora, category: 'Person', id: 'Arthur' }) <= 2
          },
          goTo: 192
        }
      ],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 152,
    text:
      `
        Мы вышли на улицу. Артур остановился, посмотрел на голубое небо и обратился ко мне:
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 153,
    text:
      `
        — Совсем не хочется домой. Не желаешь еще немного прогуляться? 
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 154,
    text:
      `
        Он протянул мне руку в надежде, что я приму приглашение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 155,
    text:
      `
        В его голосе слышалось волнение. Я смотрела ему в глаза, пытаясь разгадать его намерения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 156,
    text:
      `
        Надо было что-то ответить, решить, хочу ли я еще немного побыть с дорогим мне человеком. 
      `,
    buttons: [
      {
        text: 'Отказаться',
        goTo: 157
      },
      {
        text: 'Принять его предложение',
        goTo: 160,
        gift: true
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 157,
    text:
      `
        — Прости, но я бы хотела все же вернуться домой, впереди подготовка к поступлению и…
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    stats: [{ story: EStoriesEn.Aurora, value: +1, category: 'Choice', id: 'RefuseArthur' }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 158,
    text:
      `
        — Понимаю и не настаиваю, — слегка разочарованно проговорил Артур, прерывая мое объяснение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 159,
    text:
      `
        В тишине мы дошли до квартиры, каждый, пребывая в своих раздумьях. 
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 160,
    text:
      `
        Я аккуратно вложила свою руку в его крепкую ладонь.
      `,
    buttons: [
      {
        text: '',
        goTo: 408
      }],
    music: require('../../../../Sounds/Aurora/Romantic_Man.mp3'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 161,
    text:
      `
        — Что ж, я не готовился, — не веря своему счастью, произнес Артур. — Но думаю было бы здорово прогуляться по парку. Тем более, что погода располагает к этому. 
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 162,
    text:
      `
        Ненавязчивое солнышко и свежий ветерок идеально подходили для прогулки. Или же мое настроение делало все вокруг нас таким.
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 163,
    text:
      `
        Держась с Артуром за руки, я испытывала спокойствие и умиротворение. Его тепло, его сила — это было настолько родным, настолько привычным.
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 164,
    text:
      `
        Стоял конец августа. Тот период когда природа готовилась сменить свое обличье. 
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 165,
    text:
      `
        Мы шли по тропе, слегка усеянной опавшей листвой, и вдыхали аромат свежести, принесенной утренней прохладой.
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 166,
    text:
      `
        Мирно прогуливаясь, Артур вдруг остановился и внимательно посмотрел мне в глаза. Аккуратным движением руки он убрал прядь с моего лица и тихо произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 167,
    text:
      `
        — Какая же ты всё-таки милая. Мне так спокойно с тобой…
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 168,
    text:
      `
        Сердце забилось быстрее, ладони потели, а сказанные слова приобретали какой-то особенный смысл в моем сознании.
      `,
    buttons: [
      {
        text: '',
        goTo: 409
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 169,
    text:
      `
        Он начал приближаться ко мне, все больше сокращая дистанцию. Но я не отступила. Не испугалась. Ведь это все тот же Артур. Мой Артур. 
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 170,
    text:
      `
        Его рука потянулась к моей щеке, он нежно коснулся её, а затем заключил меня в крепкие объятия.
      `,
    buttons: [
      {
        text: '',
        goTo: 410
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 171,
    text:
      `
        Чуть отстранившись, Артур будто бы вышел из транса и произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 172,
    text:
      `
        — Прости, если это было чересчур неожиданно.
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 173,
    text:
      `
        — Нет, я…
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 174,
    text:
      `
        Парень привычным движением притянул меня и поцеловал в лоб, а затем стал смотреть на меня с характерным румянцем на щеках. 
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 175,
    text:
      `
        — Артур? Ты…?
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 176,
    text:
      `
        — Я серьезен, Аврора. Ты мой самый близкий человек. Те случайные обстоятельства, которые свели нас… Я никогда не верил в судьбу. Мне казалось, что я могу все контролировать. Однако чувства к тебе... Теперь все иначе.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 177,
    text:
      `
        Я пребывала в легком замешательстве. Артур действительно многое для меня значил, но я никогда в жизни не испытывала симпатию или так называемую любовь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 178,
    text:
      `
        Мне просто были не знакомы эти чувства и я не знала, каково это. 
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 179,
    text:
      `
        Артур всегда казался мне надежным человеком, от которого я часто получала безвозмездную помощь и поддержку. Разумеется, это вызывало некую зависимость, возникшую от его бескорыстного поведения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 180,
    text:
      `
        Я слишком часто полагалась на него. Он был мне нужен и оказывался рядом в трудные периоды моей жизни. Мне было сложно сейчас что-либо ответить, а чувства словно отказывались дать подсказку.
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 181,
    text:
      `
        — Я не жду ответа сейчас. Хочу, чтобы ты знала, я намерен добиться своего, — уверенный тон Артура заставил меня в очередной раз присмотреться к его новой стороне личности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 182,
    text:
      `
        Он впервые так открыто заявил о своих намерениях и я рада, что он не давил на меня.  
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 183,
    text:
      `
        — Я…
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 184,
    text:
      `
        — Аврора, не стоит ничего говорить. Я все прекрасно понимаю.
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 185,
    text:
      `
        — Спасибо, Артур, — я видела в его глазах решимость, которая граничила с неуверенностью. 
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 186,
    text:
      `
        Мы словно оба запутались в том, чего хотели друг от друга. Или мне это только казалось и дело было лишь в моих противоречиях? 
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 187,
    text:
      `
        Он сжал мою руку чуть сильнее, закрепляя свои слова действиями.
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 188,
    text:
      `
        Я все еще не понимала, что испытываю к Артуру. В глубине моего сердце отзывался мягкий трепет на его прикосновения и надежность его слов. Но все было нестабильно в данный момент. 
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 189,
    text:
      `
        Чтобы принять правильное решение, я должна многое обдумать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 190,
    text:
      `
        — Дадим друг другу время, — резюмировала я, облокотившись на его плечо.
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 191,
    text:
      `
        Пребывая в сладких грезах, мы дошли до дома, не разнимая рук. 
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    message: 'Вы дорогой человек для Артура и он намерен стать еще ближе',
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Person', id: 'Arthur' }],
    achievement: { story: EStoriesEn.Aurora, name: 'MyArthur' },
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 192,
    text:
      `
        Выйдя на улицу, Артур остановился, посмотрел на голубое небо и обратился ко мне:
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    music: musicPlayer[`AuroraDaily${loadData(['Aurora', 'Daily', 'Music'])}`],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 193,
    text:
      `
        — Это же было хорошей идеей, правда? 
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 194,
    text:
      `
        — Да, спасибо, что вытащил меня на прогулку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 195,
    text:
      `
        В тишине мы дошли до квартиры, каждый, пребывая в своих раздумьях. 
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    message: 'Вы не настолько близки с Артуром, чтобы провести с ним больше времени',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 196,
    text:
      `
        Когда мы вернулись домой, то принялись разбирать вкусности, купленные в пекарне Эцио. 
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    music: musicPlayer[`AuroraDaily${loadData(['Aurora', 'Daily', 'Music'])}`],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 197,
    text:
      `
        Между нами произошел довольно долгий диалог на тему недавней ссоры. Он еще раз извинился и сказал, что был на стрессе из-за работы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 198,
    text:
      `
        Мы не касались подробностей, но мне и этого было достаточно. Хотелось верить, что он осознал ошибку, а мы будем и дальше работать над взаимопониманием. 
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 199,
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
            return statsManager.get({ story: EStoriesEn.Aurora, category: 'Person', id: 'Arthur' }) <= 2
          },
          goTo: 202
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'RefuseArthur' }) >= 1
          },
          goTo: 202
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'RefuseArthur' }) <= 0
          },
          goTo: 200
        }
      ],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 200,
    text:
      `
        Я стала иначе смотреть на Артура после сказанных им слов в парке. Его улыбка, его, казалось бы, повседневные движения волновали меня больше чем обычно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 201,
    text:
      `
        Хотелось сначала разобраться с поступлением, связаться с отцом и потом полноценно посвятить себя мыслям об Артуре. Но совершенно игнорировать происходящее между нами стало просто невозможным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 202,
    text:
      `
        Перед тем как пойти в свою комнату, я поделилась с Артуром своими опасениями на счет папы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 203,
    text:
      `
        — Аврора, не переживай только сильно. Ты же знаешь о проблемах со связью. Напиши письмо и отправим его, если ситуация не изменится — я лично тебя отвезу к нему.
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 204,
    text:
      `
        Вернувшись в комнату с легким сердцем, я начала усиленно заниматься подготовкой к предстоящему экзамену.
      `,
    buttons: [
      {
        text: '',
        goTo: 411
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 205,
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
            return statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'GoWork' }) >= 1
          },
          goTo: 206
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'GoWork' }) <= 0
          },
          goTo: 222
        }
      ],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 206,
    text:
      `
        Я решила написать Эцио, чтобы побольше узнать о том, что мне нужно будет завтра брать на работу и к чему готовиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    stats: [{ story: EStoriesEn.Aurora, value: 0, category: 'Person', id: 'Ezio' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 207,
    text:
      `
        Парень ответил довольно быстро и предложил для удобства созвониться по видеосвязи, чтобы быстрее все обсудить. 
      `,
    buttons: [
      {
        text: 'Принять видеозвонок',
        goTo: 208,
        gift: true
      },
      {
        text: 'Продолжить переписку',
        goTo: 220
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 208,
    text:
      `
        Мне показалось, это было действительно неплохой идеей. Я приняла его звонок и тут же увидела улыбающегося Эцио, который махал мне рукой, приветствуя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Phone_Chat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 209,
    text:
      `
        — Как ты, Аврора? Готова выйти уже завтра? 
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Phone_Chat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 210,
    text:
      `
        — Все в порядке. Готовлюсь к экзаменам, — я показала ему исписанные листы, свидетельствующие о моей проделанной работе. — Да. Готова. Скажи, пожалуйста, что мне для этого нужно? 
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Phone_Chat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 211,
    text:
      `
        — Молодец! Собираешься поступать в тот же университет, где сейчас учится Артур? 
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Phone_Chat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 212,
    text:
      `
        — Нет, в другой. Хочу попробовать свои силы на историческом факультете. 
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Phone_Chat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 213,
    text:
      `
        — Круто. Желаю тебе больших успехов. Обязательно напиши мне потом о результатах экзамена. 
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Phone_Chat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 214,
    text:
      `
        Мы еще немного поговорили об учебе. Эцио поделился, что не имеет высшего образования и всерьез задумывается о его получении. 
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Phone_Chat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 215,
    text:
      `
        — Я отучился на повара, но всегда считал — это не предел. 
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Phone_Chat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 216,
    text:
      `
        Мне хотелось поддержать его стремления, а затем разговор плавно перетек в обсуждения рабочих вопросов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Phone_Chat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 217,
    text:
      `
        — Слушай, приходи завтра к восьми утра и постарайся не опаздывать. С собой надо иметь позитивный настрой и готовность к маленькому хаосу.
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Phone_Chat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 218,
    text:
      `
        — Обычно утром самый пик покупателей. Но не переживай. Я все расскажу и обучу. И, разумеется, поддержу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Phone_Chat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 219,
    text:
      `
        Слова Эцио и его улыбка придали мне уверенности в завтрашнем дне. Мы закончили разговор на позитивной ноте, возвращаясь к своим делам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    message: 'Эцио был рад увидеть вас и провести приятную беседу',
    imageFront: require('../../../../Images/Aurora/Objects/Phone_Chat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Person', id: 'Ezio' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 220,
    text:
      `
        Я постеснялась принять видеозвонок, поэтому в сообщениях мы кратко обозначили, во сколько мне надо завтра прийти и что с собой взять. 
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Phone_Chat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 221,
    text:
      `
        Напоследок Эцио пожелал мне спокойной ночи и мы вернулись к своим делам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    imageFront: require('../../../../Images/Aurora/Objects/Phone_Chat.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 222,
    text:
      `
        Я стала готовиться ко сну, попутно размышляя о своем будущем, которое казалось мне уже не таким нереальным, как я думала раньше. 
      `,
    buttons: [
      {
        text: 'Продолжить',
        goTo: 223,
        gift: true
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 223,
    text:
      `
        Прошло около недели с той увлекательной авантюры, которая произошла между мной, Далией и Калебом. С Калебом мы не особо поддерживали связь, разве что пересекались периодически в университете, обмениваясь теплыми приветствиями.
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 224,
    text:
      `
        С Далией же у нас установился более дружеский контакт. Мы частенько переписывались, узнавая друг о друге много нового. 
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 225,
    text:
      `
        И я дорожила этими моментами, ведь, казалось, что в этом огромном городе появилась новая опора. Друг, который понимает и ценит. 
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 226,
    text:
      `
        Все это развивалось быстро, даже правильнее было бы написать, стремительно! Но из-за этого не возникало сомнений в искренности нашего общения. 
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
        Просто нашлись две родственные души, которым судьба дала возможность встретиться и поделиться жизнью. 
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 228,
    text:
      `
        Артур полностью погрузился в работу и учебу. Мы немного проводили времени вместе. Он изредка возил меня в университетскую библиотеку, но по большей части я сидела дома и готовилась.  
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 229,
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
            return statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'GoWork' }) >= 1
          },
          goTo: 230
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'GoWork' }) <= 0
          },
          goTo: 233
        }
      ],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 230,
    text:
      `
        На работе все складывалось очень даже хорошо и я ничуть не пожалела о своем выборе. На удивление мне удалось быстро освоить рабочие тонкости и стать прекрасным ассистентом для Эцио. 
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 231,
    text:
      `
        С хозяином заведения мы легко нашли общий язык. Иногда после закрытия он угощал меня своими кулинарными шедеврами, сопровождающимися увлекательной беседы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Ezio.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 232,
    text:
      `
        За этот небольшой период нашего общения я чувствовала, как мы сближаемся. С Эцио было очень просто говорить. Он знал, когда нужно поддержать, а в какой момент лучше молча слушать.
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 233,
    text:
      `
        Незаметно наступил день экзамена, которого я так ждала. Уже сидя в аудитории у меня начался мандраж от предстоящего тестирования. 
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    music: musicPlayer[`AuroraDaily${loadData(['Aurora', 'Daily', 'Music'])}`],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Auditory.jpg')
  },

  {
    id: 234,
    text:
      `
        Под рукой были ответы, которые мне дал Артур, когда я только приехала к нему домой.
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Auditory.jpg')
  },

  {
    id: 235,
    text:
      `
        Меня одолели сомнения. Я же готовилась и хочу попробовать свои силы.
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Auditory.jpg')
  },

  {
    id: 236,
    text:
      `
        Но к чему рисковать? Мне ведь нужно сдать и поступить. От этого зависит мое будущее. 
      `,
    buttons: [
      {
        text: 'Воспользоваться ответами',
        goTo: 237,
        func: () => {
          timer.stop()
        }
      },
      {
        text: 'Сдать экзамен самой',
        goTo: 240,
        func: () => {
          timer.stop()
        }
      }],
    beforeBegin: () => {
      timer.set(7, () => { scenarioManager.beginScene(237) })
    },
    imageBack: require('../../../../Images/Aurora/Backgrounds/Auditory.jpg')
  },

  {
    id: 237,
    text:
      `
        Когда раздали экзаменационные листы, я уже знала, что буду слишком сильно волноваться и могу завалить тест. 
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Choice', id: 'CheatExam' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Auditory.jpg')
  },

  {
    id: 238,
    text:
      `
        Мне по-настоящему стало страшно и в голове навязчиво мелькал вопрос: что будет, если я провалюсь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Auditory.jpg')
  },

  {
    id: 239,
    text:
      `
        Артур очень старался для того, чтобы я начала жить так, как всегда того мечтала. И мне не к чему портить его и свои ожидания. 
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Auditory.jpg')
  },

  {
    id: 240,
    text:
      `
        Когда раздали экзаменационные листы, я уже знала, что буду слишком сильно волноваться, но должна сделать все сама.
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Auditory.jpg')
  },

  {
    id: 241,
    text:
      `
        Прежде всего, чтобы доказать мою готовность учиться и прилагать усилия, а не полагаться на случай. 
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Auditory.jpg')
  },

  {
    id: 242,
    text:
      `
        В глубине души я боялась разочаровать Артура своими результатами, ведь он так старался, чтобы я поступила. Но он должен понять меня и мое желание стать сильнее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    message: 'Вы верите в свои силы и готовы без помощи бороться за свое будущее',
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Effect', id: 'Spirit' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Auditory.jpg')
  },

  {
    id: 243,
    text:
      `
        Покинув аудиторию, я выдохнула. Одно из переживаний осталось позади.
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Hall.jpg')
  },

  {
    id: 244,
    text:
      `
        Далия и Калеб все еще оставались внутри, но я не захотела их дожидаться, мне не терпелось вернуться домой и проверить заветный почтовый ящик.
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/University_Hall.jpg')
  },

  {
    id: 245,
    text:
      `
        К моему большому сожалению — он был пуст. Вернувшись в свою комнату, я всерьез забеспокоилась об отце. 
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 246,
    text:
      `
        Если раньше близкие говорили мне, что все хорошо и дело в плохой связи, то сейчас, по прошествию двух недель, это уже не выглядело как что-то нормальное. 
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 247,
    text:
      `
        Это терзало меня. Буквально выжигало изнутри. Тревога росла с каждым часом, а бессилие лишь усугубляло состояние. Что я могла сделать будучи такой слабой?
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 248,
    text:
      `
        Этим днем Артур так и не появился дома. Он написал короткое СМС о срочных делах на работе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 249,
    text:
      `
        Я не решилась посвятить его в свои переживания, ведь мне совершенно не хотелось его отвлекать. Да и куда бы мы поехали в такое позднее время?
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 250,
    text:
      `
        Ночь прошла для меня в кошмарах, которые оборачивались в сильные душевные муки.
      `,
    buttons: [
      {
        text: '',
        goTo: 412
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 251,
    text:
      `
        Ничего. Пусто. 
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    music: require('../../../../Sounds/Aurora/Stress.mp3'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 252,
    text:
      `
        Тяжело дыша, я облокотилась о стену и медленно спустилась вниз, не в силах контролировать охватившую меня слабость. 
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 253,
    text:
      `
        Я почувствовала боль в груди, которая сопровождалась тошнотой и сильным страхом, что мешал мне трезво оценить ситуацию. 
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    beforeBegin: blackFlash,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 254,
    text:
      `
        Страх за жизнь отца. Страх одиночества, страх нереализованности. Все перемешалось в этом бурлящем потоке самобичевания и я абсолютно не понимала, как достать себя из этого состояния. 
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    beforeBegin: blackFlash,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 255,
    text:
      `
        Мне казалось, еще немного и я задохнусь от поступающего отчаяния.
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    beforeBegin: blackFlash,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 256,
    text:
      `
        <i> Что мне делать? 
      `,
    buttons: [
      {
        text: '',
        goTo: 257
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 257,
    text:
      `
        Рука машинально потянулась к телефону и набрала: 
      `,
    buttons: [
      {
        text: 'Далию',
        goTo: 258
      },
      {
        text: 'Калебу',
        goTo: 288
      },
      {
        text: 'Артуру',
        goTo: 322
      },
      {
        text: 'Эцио',
        goTo: 356,
        isActive: false
      }],
    beforeBegin: () => {
      if (statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'GoWork' }) >= 1) {
        scenarioManager.changeSceneButtonStatus(257, 3, true)
      }
    },
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 258,
    text:
      `
        В ответ я услышала сонный голос подруги, которая интересовалась, почему я звоню так рано и не случилось ли чего.
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Choice', id: 'CallDalia' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 259,
    text:
      `
        — Далия, ты можешь приехать? — спросила я холодным тоном. 
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 260,
    text:
      `
        — Куда? Аврора, ты меня пугаешь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 261,
    text:
      `
        — Отец… нет письма, — от подступающих слез и эмоций стало стыдно, но я не могла ничего с собой поделать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 262,
    text:
      `
        — Господи… Где ты сейчас?
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 263,
    text:
      `
        — Дома.
      `,
    buttons: [
      {
        text: '',
        goTo: 413
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 264,
    text:
      `
        Она повесила трубку, оставив меня наедине с открытым пустым ящиком, который так сильно бросался в глаза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 265,
    text:
      `
        Долго ждать не пришлось, запыхавшаяся Далия приехала в течение двадцати минут и тут же спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 266
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 266,
    text:
      `
        — Пробовала звонить еще раз?
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 267,
    text:
      `
        — Абонент не доступен. 
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 268,
    text:
      `
        — Просто держи в голове, что это еще ничего не значит. Нам надо убедиться самим, — она потянула меня в сторону выхода. 
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 269,
    text:
      `
        Выбрав нужный адрес, девушка стремительно двинулась к указанной точке, выжимая газ в пол.  
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    message: 'Далия всегда придет вам на помощь',
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Person', id: 'Dalia' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Dalia_Car.jpg')
  },

  {
    id: 270,
    text:
      `
        Мы не разговаривали. Просто не находилось слов, которые бы описали происходящее. Паника. Сумбур. Слезы. Боль. 
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Dalia_Car.jpg')
  },

  {
    id: 271,
    text:
      `
        Это я довела до всего этого? 
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Dalia_Car.jpg')
  },

  {
    id: 272,
    text:
      `
        Через несколько часов езды мы приехали на место. На маяк. У меня не было времени даже поностальгировать о месте, в котором я провела столько времени. 
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 273,
    text:
      `
        Выйдя из машины, я не раздумывая рванула в сторону дома и тут же обнаружила, что дверь заперта. 
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 274,
    text:
      `
        Лишь шум волн избавлял от гнетущей тишины, которая нависла надо мной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 275
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 275,
    text:
      `
        — Папа! — я надеялась, что мои громкие крики смогут до него дойти. 
      `,
    buttons: [
      {
        text: '',
        goTo: 276
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 276,
    text:
      `
        Прибежавшая Далия с интересом оглядывала местность, попутно выискивая детали, за которые можно зацепиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 277,
    text:
      `
        — Где он может быть еще? На самом маяке? 
      `,
    buttons: [
      {
        text: '',
        goTo: 278
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 278,
    text:
      `
        Я тут же последовала ее рекомендациям и, подбежав к башне, начала отчаянно стучать по металлической двери. И вдруг услышала мужской голос: 
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 279,
    text:
      `
        — Тихо-тихо. Кто там так ломится?
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Stranger_Man.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 280,
    text:
      `
        К нам вышел незнакомый мужчина и мой мир в одночасье рухнул. Далия поддержала меня за плечи, бросая сочувственные взгляды.
      `,
    buttons: [
      {
        text: '',
        goTo: 281
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 281,
    text:
      `
        — Здесь работал мужчина. Где он сейчас? — дрожащим голосом спросила я. 
      `,
    buttons: [
      {
        text: '',
        goTo: 282
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 282,
    text:
      `
        — Так в больнице он. Чего раскричались?
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Stranger_Man.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 283,
    text:
      `
        Я не обратила внимания на негативный тон смотрителя. Упав коленями на землю, мне в голову тотчас пришли образы матери, которая мучилась в больничной палате, где впоследствии и оборвалась ее жизнь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 284
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 284,
    text:
      `
        Испугавшись, что я могу потерять дорогого человека, слезы полились по моим щекам, а про себя я стала проговаривать: 
      `,
    buttons: [
      {
        text: '',
        goTo: 285
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 285,
    text:
      `
        — Папа, вернись домой! Я никуда больше не уеду. Ян, прошу, где бы ты ни был, услышь меня и мои мольбы о возвращении. 
      `,
    buttons: [
      {
        text: '',
        goTo: 286
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 286,
    text:
      `
        <i>Я так люблю вас, я так хочу, чтобы мы снова стали семьей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 287
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 287,
    text:
      `
        Дорогая мама, подожди нас ещё немного на небесах. Не забирай его у меня… 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('Aurora', 'Глава 1', 'Часть 5', '0')
        }
      }],
    achievement: { story: EStoriesEn.Aurora, name: 'Chapter01Part04Completed' },
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 288,
    text:
      `
        В ответ я услышала раздраженный голос парня. На фоне были слышны голоса. Было понятно, что он не один. Сам он расторопно стал расспрашивать меня о причине моего звонка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Choice', id: 'CallKaleb' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 289,
    text:
      `
        — Калеб, ты можешь приехать? — спросила я холодным тоном. 
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 290,
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
            return statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'HelpKaleb' }) >= 1
          },
          goTo: 296
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'HelpKaleb' }) <= 0
          },
          goTo: 291
        }
      ],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 291,
    text:
      `
        — Прости, я никак сейчас не могу, — обреченно проговорил Калеб, попутно говоря кому-то, что сейчас закончит со своими делами и беседа продолжится. — У меня очень важная встреча…
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 292,
    text:
      `
        — Я все понимаю, прости за беспокойство, — я сбросила звонок, краснея, что помешала ему. 
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 293,
    text:
      `
        В глубине души мне было грустно от того, как Калеб повел себя. Но с другой стороны — у каждого есть своя жизнь и свои дела.
      `,
    buttons: [
      {
        text: '',
        goTo: 294
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 294,
    text:
      `
        Никто не обязан приезжать по первому моему зову и я отбросила обиду. 
      `,
    buttons: [
      {
        text: '',
        goTo: 295
      }],
    message: 'Калеб ничего вам не должен, поэтому предпочел сосредоточиться на своих делах ',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 295,
    text:
      `
        Рука машинально потянулась к телефону и набрала: 
      `,
    buttons: [
      {
        text: 'Далию',
        goTo: 258
      },
      {
        text: 'Артуру',
        goTo: 322
      },
      {
        text: 'Эцио',
        goTo: 356,
        isActive: false
      }],
    beforeBegin: () => {
      if (statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'GoWork' }) >= 1) {
        scenarioManager.changeSceneButtonStatus(295, 2, true)
      }
    },
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 296,
    text:
      `
        — Ох, Аврора, как же ты вовремя, — суетливо произнес Калеб. — Что случилось? 
      `,
    buttons: [
      {
        text: '',
        goTo: 297
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 297,
    text:
      `
        — Отец… нет письма, — от подступающих слез и эмоций стало стыдно, но я не могла ничего с собой поделать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 298,
    text:
      `
        — Где ты сейчас? 
      `,
    buttons: [
      {
        text: '',
        goTo: 299
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 299,
    text:
      `
        — Дома.
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 300,
    text:
      `
        — Я… — небольшая заминка и Калеб продолжил. — Я обещал тебе, что верну должок. Подожди немного, скоро буду. 
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 301,
    text:
      `
        Он повесил трубку, оставив меня наедине с открытым пустым ящиком, который так сильно бросался в глаза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 302,
    text:
      `
        Долго ждать не пришлось. Калеб примерно через пятнадцать минут вбежал ко мне и тут же спросил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 303
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 303,
    text:
      `
        — Едем на маяк? 
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 304,
    text:
      `
        — Да… — с помощью поддержки Калеба, я смогла встать и облокотиться на него. 
      `,
    buttons: [
      {
        text: '',
        goTo: 305
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 305,
    text:
      `
        Сказав адрес Калебу, парень нажал газ в пол и стремительно двинулся к указанной точке.  
      `,
    buttons: [
      {
        text: '',
        goTo: 306
      }],
    message: 'Калеб рад, что смог оказать вам поддержку ',
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Person', id: 'Kaleb' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Kaleb_Car.jpg')
  },

  {
    id: 306,
    text:
      `
        Мы не разговаривали. Просто не находилось слов, которые бы описали происходящее. Паника. Сумбур. Слезы. Боль. 
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Kaleb_Car.jpg')
  },

  {
    id: 307,
    text:
      `
        Это я довела до всего этого? 
      `,
    buttons: [
      {
        text: '',
        goTo: 308
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Kaleb_Car.jpg')
  },

  {
    id: 308,
    text:
      `
        Через несколько часов езды мы приехали на место. На маяк. У меня не было времени даже поностальгировать о месте, в котором я провела столько времени.
      `,
    buttons: [
      {
        text: '',
        goTo: 309
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 309,
    text:
      `
        Только выйдя из машины, я рванула в сторону дома и тут же обнаружила, что дверь заперта.
      `,
    buttons: [
      {
        text: '',
        goTo: 414
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 310,
    text:
      `
        — Папа! — я надеялась, что мои громкие крики смогут до него дойти. 
      `,
    buttons: [
      {
        text: '',
        goTo: 311
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 311,
    text:
      `
        Прибежавший Калеб без интереса смотрел на окружение. Он спросил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 312
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 312,
    text:
      `
        — Где он еще может быть? На самом маяке?
      `,
    buttons: [
      {
        text: '',
        goTo: 415
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 313,
    text:
      `
        — Тихо-тихо. Кто там так ломится?
      `,
    buttons: [
      {
        text: '',
        goTo: 314
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Stranger_Man.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 314,
    text:
      `
        К нам вышел незнакомый мужчина и мой мир в одночасье рухнул. Калеб поддержал меня за плечи, и обратился к вышедшему: 
      `,
    buttons: [
      {
        text: '',
        goTo: 315
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 315,
    text:
      `
        — Давайте без драмы. Здесь работал мужчина, где он сейчас?
      `,
    buttons: [
      {
        text: '',
        goTo: 316
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 316,
    text:
      `
        — Так в больнице он. Чего раскричались?
      `,
    buttons: [
      {
        text: '',
        goTo: 317
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Stranger_Man.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 317,
    text:
      `
        Я не обратила внимания на негативный тон смотрителя. Упав коленями на землю, мне в голову тотчас пришли образы матери, которая мучилась в больничной палате, где впоследствии и оборвалась ее жизнь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 318
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 318,
    text:
      `
        Испугавшись, что я могу потерять дорогого человека, слезы полились по моим щекам, а про себя я стала проговаривать: 
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 319,
    text:
      `
        — Папа, вернись домой! Я никуда больше не уеду. Ян, прошу, где бы ты ни был, услышь меня и мои мольбы о возвращении.
      `,
    buttons: [
      {
        text: '',
        goTo: 320
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 320,
    text:
      `
        <i> Я так люблю вас, я так хочу, чтобы мы снова стали семьей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 321
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 321,
    text:
      `
        Дорогая мама, подожди нас ещё немного на небесах. Не забирай его у меня… 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('Aurora', 'Глава 1', 'Часть 5', '0')
        }
      }],
    achievement: { story: EStoriesEn.Aurora, name: 'Chapter01Part04Completed' },
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 322,
    text:
      `
        В ответ я услышала усталый голос Артура, который сразу же спросил, что случилось и не беспокоит ли меня чего. 
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Choice', id: 'CallArthur' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 323,
    text:
      `
        — Артур, ты можешь приехать? — спросила я холодным тоном. 
      `,
    buttons: [
      {
        text: '',
        goTo: 324
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 324,
    text:
      `
        — Где ты? — испуганным тоном уточнил парень. 
      `,
    buttons: [
      {
        text: '',
        goTo: 325
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 325,
    text:
      `
        — Дома. 
      `,
    buttons: [
      {
        text: '',
        goTo: 326
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 326,
    text:
      `
        — Еду.
      `,
    buttons: [
      {
        text: '',
        goTo: 416
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 327,
    text:
      `
        Запыхавшийся Артур вбежал в парадную и смотрел на меня удивленными глазами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 328,
    text:
      `
        — Что случилось, Аврора? — уточнил он, помогая мне встать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 329
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 329,
    text:
      `
        — Отец… нет письма, — от подступающих слез и эмоций стало стыдно, но я не могла ничего с собой поделать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 330
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 330,
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
            return statsManager.get({ story: EStoriesEn.Aurora, category: 'Person', id: 'Arthur' }) <= 2
          },
          goTo: 332
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'RefuseArthur' }) >= 1
          },
          goTo: 332
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'RefuseArthur' }) <= 0
          },
          goTo: 331
        }
      ],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 331,
    text:
      `
        Артур, не долго думая, заключил в свои объятия и начал успокаивать, шепча мне на ухо о том, что все будет хорошо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 333
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 332,
    text:
      `
        Артур сел передо мной на колени, взял за руки и начал говорить, чтобы я выдохнула и успокоилась. Все будет хорошо.
      `,
    buttons: [
      {
        text: '',
        goTo: 333
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 333,
    text:
      `
        Немного придя в себя, я тут же спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 334
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 334,
    text:
      `
        — Мы можем к нему съездить? 
      `,
    buttons: [
      {
        text: '',
        goTo: 335
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 335,
    text:
      `
        — Я тебе уже говорил, что если это необходимо — разумеется. Зайди домой и возьми какие-нибудь вещи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 336
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 336,
    text:
      `
        — Мне нечего брать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 337
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 337,
    text:
      `
        — Хорошо, — Артур проверил свою сумку. — Едем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 338
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 338,
    text:
      `
        Мы не разговаривали. Просто не находилось слов, которые бы описали происходящее. Паника. Сумбур. Слезы. Боль. 
      `,
    buttons: [
      {
        text: '',
        goTo: 339
      }],
    message: 'Как и обещал, Артур съездит с вами к отцу',
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Person', id: 'Arthur' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 339,
    text:
      `
        Это я довела до всего этого? 
      `,
    buttons: [
      {
        text: '',
        goTo: 340
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 340,
    text:
      `
        Через несколько часов езды мы приехали на место. На маяк. У меня не было времени даже поностальгировать о месте, в котором я провела столько времени.
      `,
    buttons: [
      {
        text: '',
        goTo: 417
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 341,
    text:
      `
        Лишь шум волн избавлял от гнетущей тишины, которая нависла надо мной. 
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
        — Папа! — я надеялась, что мои громкие крики смогут до него дойти. 
      `,
    buttons: [
      {
        text: '',
        goTo: 343
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 343,
    text:
      `
        Подбежавший Артур внимательно осмотрел местность и констатировал:
      `,
    buttons: [
      {
        text: '',
        goTo: 344
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 344,
    text:
      `
        — Может быть он на самом маяке?
      `,
    buttons: [
      {
        text: '',
        goTo: 345
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 345,
    text:
      `
        Я тут же последовала ее рекомендациям и, подбежав к башне, начала отчаянно стучать по металлической двери. И вдруг услышала мужской голос: 
      `,
    buttons: [
      {
        text: '',
        goTo: 346
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 346,
    text:
      `
        — Тихо-тихо. Кто там так ломится?
      `,
    buttons: [
      {
        text: '',
        goTo: 347
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Stranger_Man.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 347,
    text:
      `
        К нам вышел незнакомый мужчина и мой мир в одночасье рухнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 348
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 348,
    text:
      `
        Артур взял инициативу в свои руки и спросил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 349
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 349,
    text:
      `
        — Здесь работал мужчина. Где он сейчас?
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 350,
    text:
      `
        — Так в больнице он. Чего раскричались?
      `,
    buttons: [
      {
        text: '',
        goTo: 351
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Stranger_Man.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 351,
    text:
      `
        Я не обратила внимания на негативный тон смотрителя. Упав коленями на землю, мне в голову тотчас пришли образы матери, которая мучилась в больничной палате, где впоследствии и оборвалась ее жизнь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 352
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 352,
    text:
      `
        Испугавшись, что я могу потерять дорогого человека, слезы полились по моим щекам, а про себя я стала проговаривать: 
      `,
    buttons: [
      {
        text: '',
        goTo: 353
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 353,
    text:
      `
        — Папа, вернись домой! Я никуда больше не уеду. Ян, прошу, где бы ты ни был, услышь меня и мои мольбы о возвращении.
      `,
    buttons: [
      {
        text: '',
        goTo: 354
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 354,
    text:
      `
        <i> Я так люблю вас, я так хочу, чтобы мы снова стали семьей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 355
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 355,
    text:
      `
        Дорогая мама, подожди нас ещё немного на небесах. Не забирай его у меня… 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('Aurora', 'Глава 1', 'Часть 5', '0')
        }
      }],
    achievement: { story: EStoriesEn.Aurora, name: 'Chapter01Part04Completed' },
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 356,
    text:
      `
        В ответ я услышала добродушный голос итальянца, который сразу же спросил, как прошел мой экзамен и все ли со мной хорошо.
      `,
    buttons: [
      {
        text: '',
        goTo: 418
      }],
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Choice', id: 'CallEzio' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 357,
    text:
      `
        — Аврора, что случилось? — обеспокоенно уточнил парень.
      `,
    buttons: [
      {
        text: '',
        goTo: 358
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Ezio.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 358,
    text:
      `
        — Отец… нет письма, — от подступающих слез и эмоций стало стыдно, но я не могла ничего с собой поделать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 359
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 359,
    text:
      `
        — Где ты сейчас? 
      `,
    buttons: [
      {
        text: '',
        goTo: 360
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Ezio.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 360,
    text:
      `
        — Дома.
      `,
    buttons: [
      {
        text: '',
        goTo: 361
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 361,
    text:
      `
        — Черт… — я услышала, как он бросил телефон и уточнял у кого-то про пекарню и возможность уйти.
      `,
    buttons: [
      {
        text: '',
        goTo: 362
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Ezio.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 362,
    text:
      `
        Через несколько секунд он продолжил:
      `,
    buttons: [
      {
        text: '',
        goTo: 363
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 363,
    text:
      `
        — Аврора, прости меня, пожалуйста, я никак не могу закрыть заведение и уйти. У нас сегодня аврал, большой заказ от клиента… 
      `,
    buttons: [
      {
        text: '',
        goTo: 364
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Ezio.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 364,
    text:
      `
        Услышав это, я не расстроилась. Да и на что я рассчитывала, ведь у человека есть своя жизнь и работа.
      `,
    buttons: [
      {
        text: '',
        goTo: 365
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 365,
    text:
      `
        — Ничего. Спасибо тебе, Эцио. 
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 366,
    text:
      `
        — Аврора, будь там, где ты сейчас находишься. Я немедленно позвоню Артуру и он приедет к тебе. Слышишь меня? 
      `,
    buttons: [
      {
        text: '',
        goTo: 367
      }],
    message: 'Эцио за вас всерьез переживает и хочет сделать все возможное',
    imageFront: require('../../../../Images/Aurora/Persons/Ezio.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Person', id: 'Ezio' }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 367,
    text:
      `
        Эцио, как и обещал, рассказал Артуру и тот приехал ко мне. Все это время мы с Эцио не разрывали связи. Он старался поддержать меня и успокоить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 368
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 368,
    text:
      `
        Запыхавшийся Артур вбежал в парадную и смотрел на меня удивленными глазами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 369
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 369,
    text:
      `
        — Что случилось, Аврора? — уточнил он, помогая мне встать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 370
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 370,
    text:
      `
        — Отец… нет письма, — от подступающих слез и эмоций стало стыдно, но я не могла ничего с собой поделать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 371
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 371,
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
            return statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'RefuseArthur' }) >= 1
          },
          goTo: 373
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.Aurora, category: 'Person', id: 'Arthur' }) <= 2
          },
          goTo: 373
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'RefuseArthur' }) <= 0
          },
          goTo: 372
        }
      ],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 372,
    text:
      `
        Артур, не долго думая, заключил в свои объятия и начал успокаивать, шепча мне на ухо о том, что все будет хорошо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 374
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 373,
    text:
      `
        Артур сел передо мной на колени, взял за руки и начал говорить, чтобы я выдохнула и успокоилась. Все будет хорошо.
      `,
    buttons: [
      {
        text: '',
        goTo: 374
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 374,
    text:
      `
        Немного придя в себя, я тут же спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 375
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 375,
    text:
      `
        — Мы можем к нему съездить? 
      `,
    buttons: [
      {
        text: '',
        goTo: 376
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 376,
    text:
      `
        — Я тебе уже говорил, что если это необходимо — разумеется. Зайди домой и возьми какие-нибудь вещи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 377
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 377,
    text:
      `
        — Мне нечего брать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 378
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 378,
    text:
      `
        — Хорошо, — Артур проверил свою сумку. — Едем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 379
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 379,
    text:
      `
        Мы не разговаривали. Просто не находилось слов, которые бы описали происходящее. Паника. Сумбур. Слезы. Боль. 
      `,
    buttons: [
      {
        text: '',
        goTo: 380
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 380,
    text:
      `
        Это я довела до всего этого? 
      `,
    buttons: [
      {
        text: '',
        goTo: 381
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Car.jpg')
  },

  {
    id: 381,
    text:
      `
        Через несколько часов езды мы приехали на место. На маяк. У меня не было времени даже поностальгировать о месте, в котором я провела столько времени.
      `,
    buttons: [
      {
        text: '',
        goTo: 419
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 382,
    text:
      `
        Лишь шум волн избавлял от гнетущей тишины, которая нависла надо мной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 383
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 383,
    text:
      `
        — Папа! — я надеялась, что мои громкие крики смогут до него дойти. 
      `,
    buttons: [
      {
        text: '',
        goTo: 384
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 384,
    text:
      `
        Подбежавший Артур внимательно осмотрел местность и констатировал:
      `,
    buttons: [
      {
        text: '',
        goTo: 385
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 385,
    text:
      `
        — Может быть он на самом маяке?
      `,
    buttons: [
      {
        text: '',
        goTo: 386
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 386,
    text:
      `
        Я тут же последовала ее рекомендациям и, подбежав к башне, начала отчаянно стучать по металлической двери. И вдруг услышала мужской голос: 
      `,
    buttons: [
      {
        text: '',
        goTo: 387
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 387,
    text:
      `
        — Тихо-тихо. Кто там так ломится?
      `,
    buttons: [
      {
        text: '',
        goTo: 388
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Stranger_Man.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 388,
    text:
      `
        К нам вышел незнакомый мужчина и мой мир в одночасье рухнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 389
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 389,
    text:
      `
        Артур взял инициативу в свои руки и спросил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 390
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 390,
    text:
      `
        — Здесь работал мужчина. Где он сейчас?
      `,
    buttons: [
      {
        text: '',
        goTo: 391
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 391,
    text:
      `
        — Так в больнице он. Чего раскричались?
      `,
    buttons: [
      {
        text: '',
        goTo: 392
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Stranger_Man.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 392,
    text:
      `
        Я не обратила внимания на негативный тон смотрителя. Упав коленями на землю, мне в голову тотчас пришли образы матери, которая мучилась в больничной палате, где впоследствии и оборвалась ее жизнь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 393
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 393,
    text:
      `
        Испугавшись, что я могу потерять дорогого человека, слезы полились по моим щекам, а про себя я стала проговаривать: 
      `,
    buttons: [
      {
        text: '',
        goTo: 394
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 394,
    text:
      `
        — Папа, вернись домой! Я никуда больше не уеду. Ян, прошу, где бы ты ни был, услышь меня и мои мольбы о возвращении.
      `,
    buttons: [
      {
        text: '',
        goTo: 395
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 395,
    text:
      `
        <i> Я так люблю вас, я так хочу, чтобы мы снова стали семьей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 396
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 396,
    text:
      `
        Дорогая мама, подожди нас ещё немного на небесах. Не забирай его у меня…
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('Aurora', 'Глава 1', 'Часть 5', '0')
        }
      }],
    achievement: { story: EStoriesEn.Aurora, name: 'Chapter01Part04Completed' },
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },
  {
    id: 397,
    text:
      `
        Это вполне могло быть правдой, ведь я видела перед собой маяк. Точнее его размытые очертания, которые проглядывались сквозь пелену. 
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse_Night_Blur.jpg')
  },

  {
    id: 398,
    text:
      `
        Меня трясло. Тело охватывала неизвестная жажда, будто бы я сейчас могла залпом выпить несколько бутылок воды. 
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 399,
    text:
      `
        Чтобы хоть как-то сбросить напряжение, я решила принять горячую ванну в надежде, что процедура поможет прийти в себя.
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 400,
    text:
      `
        Я понимала, что могут быть разные причины этого и более того, он никогда не давал повода сомневаться в себе и в своих чувствах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 401,
    text:
      `
        — Аврора, я должен перед тобой извиниться за свое вчерашнее поведение. Я не знаю, что на меня нашло, но обещаю — такого больше не повторится.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 402,
    text:
      `
        — Спасибо, Артур, — улыбнулась я. — Это правда важно для меня. Уверена, от этого наши взаимоотношения станут только крепче. 
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 403,
    text:
      `
       — Хм, — я начала анализировать историю. — Кажется, что в этом нет ничего супер-интересного. Беглец, который начал строить бизнес. 
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 404,
    text:
      `
        За увлекательной беседой мы незаметно подошли к той самой пекарне.
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 405,
    text:
      `
        — Не могу определиться, — пробурчала я, надеясь, что парень сможет мне помочь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 406,
    text:
      `
        Рассматривая внутреннее убранство помещения, я обратила внимание на стену и висевший на ней плакат о том, что в пекарню требуется сотрудник. 
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 407,
    text:
      `
        — Аврора, — сказал Артур. — Я уже говорил, что тебе не обязательно работать… 
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 408,
    text:
      `
        — Куда мы пойдём? — улыбка не спадала с моего лица. 
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    music: require('../../../../Sounds/Aurora/Romantic_Man.mp3'),
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 409,
    text:
      `
        Что это за чувство? Почему Артур кажется мне каким-то другим сегодня? 
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 410,
    text:
      `
        Я растворилась в этом закономерном ощущении близости, уткнувшись носом в его плечо. Мы простояли так несколько минут, безмолвно слушая завывания ветра и совершенно игнорируя шум проходящих мимо людей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Alley.jpg')
  },

  {
    id: 411,
    text:
      `
        День прошел быстро и без каких-либо происшествий. Отдыхая в кровати, я размышляла о том, как же счастлива и какие прекрасные люди меня окружают. 
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 412,
    text:
      `
        На следующее утро я проснулась полностью разбитая, но с четким осознанием того, что я должна сразу пойти к почтовому ящику и там непременно будет весточка от папы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 413,
    text:
      `
        — Я немедленно выезжаю, пожалуйста, дождись меня и главное никуда не уходи.  
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    imageFront: require('../../../../Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 414,
    text:
      `
        Лишь только шум волн избавлял от гнетущей тишины, которая нависла надо мной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 310
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 415,
    text:
      `
        Я тут же последовала его рекомендациям и, подбежав к башне, начала отчаянно стучать по металлической двери. И вдруг услышала мужской голос: 
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 416,
    text:
      `
       Он оборвал звонок, оставив меня наедине с открытым пустым ящиком, который так сильно бросался в глаза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 417,
    text:
      `
        Выйдя из машины, я не раздумывая рванула в сторону дома и тут же обнаружила, что дверь заперта. 
      `,
    buttons: [
      {
        text: '',
        goTo: 341
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  },

  {
    id: 418,
    text:
      `
        — Эцио, ты можешь приехать? — спросила я холодным тоном. 
      `,
    buttons: [
      {
        text: '',
        goTo: 357
      }],
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Choice', id: 'CallEzio' }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Images/Aurora/Backgrounds/Flat_Post.jpg')
  },

  {
    id: 419,
    text:
      `
        Выйдя из машины, я не раздумывая рванула в сторону дома и тут же обнаружила, что дверь заперта. 
      `,
    buttons: [
      {
        text: '',
        goTo: 382
      }],
    imageBack: require('../../../../Images/Aurora/Backgrounds/Lighthouse.jpg')
  }
])
