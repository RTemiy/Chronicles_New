import { saveEndProgress, scenarioManager } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { whiteFlash } from '../../../../Components/Slide/Slide'

scenarioManager.addScenario({ storyName: EStoriesEn.Katarina, chapterName: 'Глава 1', partName: 'Пролог', code: '0' }, [
  {
    id: 0,
    text:
      `
        <i> Внимание! Вы начинаете 1 часть ограниченного по времени спешла истории «Бессмертные: Последняя надежда».
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY_Blur.jpg')
  },

  {
    id: 1,
    text:
      `
        <i> Для максимального погружения в перипетии персонажей и их судеб, рекомендуется пройти вышедшие части: 1-4.
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY_Blur.jpg')
  },

  {
    id: 2,
    text:
      `
        <i> Приятного чтения!
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY_Blur.jpg')
  },

  {
    id: 3,
    text:
      `
        В Нью-Йорк меня привело собственное расследование. Годами выслеживая монстров, которые довольно тесно связаны с обычным миром, я выяснил, кем мог бы быть их предполагаемый лидер. 
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    beforeBegin: whiteFlash,
    message: '<i> Нью-Йорк 1882 год',
    music: require('../../../../Sounds/Immortals/Robert_Theme.mp3'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY.jpg')
  },

  {
    id: 4,
    text:
      `
        Отрубив главную голову — посыпятся все остальные. 
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY.jpg')
  },

  {
    id: 5,
    text:
      `
        Про главаря я знал не так уж и много. Мужчина. Средних лет. Кровавый след тянется по всей Европе.
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY.jpg')
  },

  {
    id: 6,
    text:
      `
        Последнее загадочное убийство было зафиксировано в Америке, Манхеттен. Почерк без сомнения принадлежал ему.
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY.jpg')
  },

  {
    id: 7,
    text:
      `
        Необходимо было полноценно влиться в жизнь того общества и стать его частью. Это решало сразу несколько важных проблем: отсутствие нежелательных вопросов и облегчение в поисках интересующей меня информации.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY.jpg')
  },

  {
    id: 8,
    text:
      `
        Легенда была проста. Богатый предприниматель, ищущий способ выгодно вложить деньги. 
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY.jpg')
  },

  {
    id: 9,
    text:
      `
        Я никогда не чурался быть частью высшего общества. Напротив, мне казалось — это самый простой путь, чтобы погрузиться во все сладкие слухи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY.jpg')
  },

  {
    id: 10,
    text:
      `
        В соответствии с моим планом была выбрана богато обставленная квартира, где я и остановился на ближайшие годы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 11,
    text:
      `
        Мне было плевать на всю эту роскошь, ведь в голове строились четкие установки, что это всего лишь средство, которое должно оправдать мою цель. 
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 12,
    text:
      `
        Первые месяцы ушли на разведку. Я прощупывал почву, знакомясь с достаточно важными людьми и восхваляя свою личность фальшивыми достижениями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 13,
    text:
      `
        Они верили. При чем охотно. Я не давал поводов сомневаться в себе. Одетый в дорогой костюм, обладающий манерами и навыком грамотной речи — все складывалось идеально в моем образе. Но не в расследовании. 
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageFront: require('../../../../Images/Katarina/Persons/Robert_Wealthy.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 14,
    text:
      `
        Пока я не повстречал его… 
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 15,
    text:
      `
        Это произошло спустя год жизни в Нью-Йорке. Я пребывал в замешательстве, в связи с тем, что моя цель  ускользает от меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    message: '<i> Нью-Йорк 1883 год',
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY.jpg')
  },

  {
    id: 16,
    text:
      `
        Возникало ощущение: разгадка близка, но неведомые обстоятельства стали незримым врагом в попытках ухватить заветный след.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY.jpg')
  },

  {
    id: 17,
    text:
      `
        Я не прекращал быть частью светского общества. Мои позиции в его кругах сильно укрепились. Однако я все больше убеждал себя, что мое нахождение в Нью-Йорке — это не более чем просчет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    music: require('../../../../Sounds/Immortals/Ball.mp3'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 18,
    text:
      `
        На одном из приемов, который организовал Томас Эдисон, прославившейся своими революционными научными достижениями, я скучающее сидел на диване, попивая игристое вино. 
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 19,
    text:
      `
        Признаюсь честно, данное мероприятие я посетил исключительно для того, чтобы удовлетворить собственный интерес. Прогресс тесно шел рядом со временем, которое менялось слишком стремительно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 20,
    text:
      `
        Изобретения Эдисона были чем-то слишком чужеродным для устоявшихся привычек общества. Но в этом и заключалась их изюминка.<p> <p>Я надеялся пообщаться с виновником торжества, однако мое присутствие оставалось без внимания, чем вызвало негодование и глупую обиду. 
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Thomas.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 21,
    text:
      `
        За этот год я успел зарекомендовать себя, как довольно успешный предприниматель, хоть и, признаться, конкретного протеже найти мне, так и не удалось. 
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 22,
    text:
      `
        Но Томас Эдисон видимо посчитал, что моя персона не достойна его внимания и лишних денег он не хотел получить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Thomas.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    stats: [{ story: EStoriesEn.Katarina, value: 0, category: 'Person', id: 'Thomas' }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 23,
    text:
      `
        Была ли это гордость? Или желание показать свое прочное положение на рынке? 
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Thomas.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 24,
    text:
      `
        Как бы то ни было, прием продолжал свой ход, а мое терпение заканчивалось. 
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 25,
    text:
      `
        Неожиданно ко мне подсел мужчина, который выглядел крайне воодушевленно. Взгляд его цеплялся за Эдисона. Именно так смотрят на кумира, буквально боготворя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 26,
    text:
      `
        Он был весь, как на иголках, желал с ним поговорить, лично услышать слова, предназначавшиеся лишь его персоне.
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 27,
    text:
      `
        Я решил, что ничего не потеряю, если заведу с ним разговор. Прием обещал быть для меня мрачным кошмаром, поэтому я сухо произнес, обращаясь к нему:
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 28,
    text:
      `
        — Роберт Джонсон. 
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageFront: require('../../../../Images/Katarina/Persons/Robert_Wealthy.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 29,
    text:
      `
        От неожиданности незнакомец вздрогнул и виновато посмотрел на меня, проговаривая:
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 30,
    text:
      `
        — Никола Тесла. Простите, где мои манеры… 
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 31,
    text:
      `
        — Ничего страшного, — я выпил согревающий напиток. — Какими судьбами вас сюда занесло? 
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageFront: require('../../../../Images/Katarina/Persons/Robert_Wealthy.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 32,
    text:
      `
        — Я работаю с мистером Эдисоном. По доброте душевной он пригласил меня на это мероприятие, посвященное его деятельности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 33,
    text:
      `
        — Вы так им восхищаетесь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageFront: require('../../../../Images/Katarina/Persons/Robert_Wealthy.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 34,
    text:
      `
        — Разумеется, — Никола добродушно улыбнулся. — Его изобретения стали моим подспорьем для дальнейшей деятельности. Я стольким хочу с ним поделиться. У меня множество идей касающихся улучшения его проектов.
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 35,
    text:
      `
        Молодой ум, что хочет быть услышанным. Я видел в его глазах решимость, а речь казалось слишком наивной для реалий, в которых он очутился. 
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 36,
    text:
      `
        — И как вы хотите этого добиться? — с искренне любопытством уточнил я. 
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageFront: require('../../../../Images/Katarina/Persons/Robert_Wealthy.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 37,
    text:
      `
        — Говорить. Показывать наработки. Мистер Эдисон очень занятой человек, но если он позвал меня на это мероприятие, значит, видит мой потенциал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 38,
    text:
      `
        Отчего-то мне стало жаль этого человека. Я отчетливо понимал эгоизм и собственническое поведение Томаса Эдисона. 
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 39,
    text:
      `
        Он ревниво относился к своим изобретениям, а малейшее изменение в его проектах, скорее будет расценено как попытка подорвать авторитет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 40,
    text:
      `
        — Расскажите лучше мне о своих идеях улучшения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageFront: require('../../../../Images/Katarina/Persons/Robert_Wealthy.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 41,
    text:
      `
        Тесла не постеснялся и действительно поведал обо всем, что задумал реализовать. К сожалению, я много чего не понял, ведь инженерия не была моей сильной стороной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 42,
    text:
      `
        Но я чувствовал потенциал, поэтому рискнул предложить спонсорство и помочь стать независимым изобретателем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 43,
    text:
      `
        — Мистер Джонсон, прошу простить, но я уже нахожусь в комфортных для меня условиях и вынужден отклонить ваше предложение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 44,
    text:
      `
        — Однако благодарю за проявленный интерес к моим исследованиям. Я бы хотел и дальше обсуждать с вами подобное, ведь ваше общество очень располагает к интересным беседам.  
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 45,
    text:
      `
        Мне трудно понять, почему я решил вдруг согласиться. Этот человек никто, он никак не связан с моим делом и истинными мотивами. Я что-то смог почувствовать тогда? Разглядеть личность, а не средство? 
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    stats: [
      { story: EStoriesEn.Katarina, value: 0, category: 'Person', id: 'Nicola' }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/Bankee.jpg')
  },

  {
    id: 46,
    text:
      `
        После такого случайного знакомства, мы с Николой частенько собирались в различных заведениях, скрашивая время за действительно увлекательными разговорами.
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    music: require('../../../../Sounds/Immortals/Robert_Theme.mp3'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/Gaming_Club.jpg')
  },

  {
    id: 47,
    text:
      `
        Порой это были и не самые правильные места, вроде игорных клубов. Я не имел права осуждать Теслу за его пристрастие, ведь сам имел множество вредных привычек. Да и кто я такой, чтобы выступать в роли наставника?
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/Gaming_Club.jpg')
  },

  {
    id: 48,
    text:
      `
        В 1883 году я неожиданно почувствовал вкус к жизни. Я ни в коем случае не забывал о моей миссии и всячески старался найти подсказки, хоть что-то, только бы оно помогло выйти на него.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY.jpg')
  },

  {
    id: 49,
    text:
      `
        Однако мысль, что я обрел друга, хоть и не на долгий срок — грела каменное сердце. 
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY.jpg')
  },

  {
    id: 50,
    text:
      `
        Однажды Никола пригласил меня на спектакль, в котором играла его подруга. Из вежливости я принял приглашение, скептически воспринимая замысел постановки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/Theatre_Scene.jpg')
  },

  {
    id: 51,
    text:
      `
        По сюжету маленькая девочка, выросшая в бедной семье пьющих родителей, проходит тяжелый путь взросления и жестоко отвергается обществом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/Theatre_Scene.jpg')
  },

  {
    id: 52,
    text:
      `
        Когда она стала старше, то по воле случая выбрала профессию проститутки, а жизнь ее чуть позже оборвалась от своей же руки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/Theatre_Scene.jpg')
  },

  {
    id: 53,
    text:
      `
        Устроившись в первых рядах, я стал наблюдать за постановкой. На удивление я даже смог заинтересоваться сюжетом, а актерская игра погрузила в тонкости замысла.
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/Theatre_Scene.jpg')
  },

  {
    id: 54,
    text:
      `
        И вот на сцену вышла Катарина, игравшая роль взрослой девочки. Нежная, ранимая. Взгляд обращен в небесные декорации. Она говорила с богом, спрашивая, за что ей были даны такие испытания.
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageFront: require('../../../../Images/Katarina/Persons/Katarina_White.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/Theatre_Scene.jpg')
  },

  {
    id: 55,
    text:
      `
        Она привлекла меня. Не буду скрывать, что в первую очередь из-за очаровательного лица, длинных волос, светлой улыбки. Но и в том числе всплывало некое чувство: а не мог ли я ее где-то ранее видеть? 
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageFront: require('../../../../Images/Katarina/Persons/Katarina_White.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/Theatre_Scene.jpg')
  },

  {
    id: 56,
    text:
      `
        Но отчего оно могло возникнуть? Я был убежден, что прежде никогда не сталкивался с ней. Если же такой прецедент имелся, такую девушку было бы трудно забыть.
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/Theatre_Scene.jpg')
  },

  {
    id: 57,
    text:
      `
        Когда занавес опустился, а большинство зрителей покинули пределы театра, Никола предложил мне пойти в недра здания, чтобы отыскать Катарину и продолжить вечер такой компанией. 
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Theatre_Scene.jpg')
  },

  {
    id: 58,
    text:
      `
        В глубине театра творился свой собственный хаос. Актеры, техники, случайные прохожие бегали туда-сюда по своим делам, попутно расхваливая сегодняшнее выступление.  
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Theatre_Scene.jpg')
  },

  {
    id: 59,
    text:
      `
        В небольшой комнате с различной одеждой сидело несколько актеров, в том числе и Катарина. Она расчесывала свои волосы, была в легком белом платье и рассматривала себя в зеркале.<p> <p>При виде наших отражений, она тут же повернула голову и устало поздоровалась, стараясь держать улыбку.
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageFront: require('../../../../Images/Katarina/Persons/Katarina_White.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/Wardrobe.jpg')
  },

  {
    id: 60,
    text:
      `
        Тесла вручил ей скромный букет, немного смущаясь, я ограничился простым приветствием. 
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/Wardrobe.jpg')
  },

  {
    id: 61,
    text:
      `
        — Никола, спасибо, чудесные цветы. Мои любимые. 
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageFront: require('../../../../Images/Katarina/Persons/Katarina_White.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/Wardrobe.jpg')
  },

  {
    id: 62,
    text:
      `
        — Ты выступала сегодня, как обычно, великолепно, — Тесла не скрывал волнение перед ее персоной. — Кстати, хотел познакомить тебя Робертом. Мы с ним в последнее время часто проводим совместный досуг. 
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/Wardrobe.jpg')
  },

  {
    id: 63,
    text:
      `
        — Приятно познакомиться, — она кивнула, стараясь не задерживать на мне взгляд. — Еще минут десять и я буду готова. Пойдем в то же кафе? 
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    imageFront: require('../../../../Images/Katarina/Persons/Katarina_White.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/Wardrobe.jpg')
  },

  {
    id: 64,
    text:
      `
        — Позвольте, — я решил ответить за Николу. — Мы можем пойти в ресторан, который находится в трех кварталах отсюда. Там отменная кухня и повод прекрасный. 
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/Wardrobe.jpg')
  },

  {
    id: 65,
    text:
      `
        Тесла и Катарина обменялись сомневающимися взглядами, после чего девушка произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/Wardrobe.jpg')
  },

  {
    id: 66,
    text:
      `
        — Не буду лукавить и скажу прямо: у меня нет денег на походы по таким заведениям. 
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageFront: require('../../../../Images/Katarina/Persons/Katarina_White.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/Wardrobe.jpg')
  },

  {
    id: 67,
    text:
      `
        — В связи с нашим знакомством, почту за честь, если вы примите мое приглашение. Расходы я беру полностью на себя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/Wardrobe.jpg')
  },

  {
    id: 68,
    text:
      `
        Катарина задумалась, а Никола стоял молча, рассматривая ее фигуру. 
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/Wardrobe.jpg')
  },

  {
    id: 69,
    text:
      `
        — Да, почему бы и нет, спасибо, — она приняла мои правила и стала собираться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageFront: require('../../../../Images/Katarina/Persons/Katarina_White.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/Wardrobe.jpg')
  },

  {
    id: 70,
    text:
      `
        После этих слов мы отправились в экипаже до места назначения. Внутри повисла неловкая пауза, которую пытался разбавлять Тесла, рассказывая о своих новых наработках. 
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 71,
    text:
      `
        Катарина изредка кивала, блеклыми глазами смотря в окно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 72,
    text:
      `
        В тот вечер мы отменно поужинали и выпили. Никола имел неосторожность увлечься алкоголем, поэтому я взял ему экипаж до дома, а сам вызвался проводить актрису до квартиры. 
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/Restaurant.jpg')
  },

  {
    id: 73,
    text:
      `
        Идя по темным улицам, мы с Катариной увлеклись непринужденной беседой. Из вежливости я спросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY_Night.jpg')
  },

  {
    id: 74,
    text:
      `
        — Все ли у вас хорошо? Вы выглядите печальной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY_Night.jpg')
  },

  {
    id: 75,
    text:
      `
        — Это всего лишь усталость, — легкая ухмылка проскользнула по ее лицу. — Многие думают, что актерам живется просто. Запомнил несколько строчек, вышел на сцену и все. 
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    imageFront: require('../../../../Images/Katarina/Persons/Katarina_White.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY_Night.jpg')
  },

  {
    id: 76,
    text:
      `
        — Но на этом наша работа не заканчивается. Мало кто понимает, как сложно быть частью театра и как сложно бывает с руководством. 
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    imageFront: require('../../../../Images/Katarina/Persons/Katarina_White.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY_Night.jpg')
  },

  {
    id: 77,
    text:
      `
        — Я надеюсь, что сегодняшний вечер хоть немного скрасил ваше переживание. 
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY_Night.jpg')
  },

  {
    id: 78,
    text:
      `
        — Благодарю, это так, — Катарина посмотрела на темное небо и спросила. — Позвольте нескромный вопрос?
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    imageFront: require('../../../../Images/Katarina/Persons/Katarina_White.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY_Night.jpg')
  },

  {
    id: 79,
    text:
      `
        — Разумеется. 
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY_Night.jpg')
  },

  {
    id: 80,
    text:
      `
        — Вы же Роберт Джонсон, верно? Кажется, что каждая девушка Нью-Йорка слышала о вас. Почему вы все еще не женаты? 
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageFront: require('../../../../Images/Katarina/Persons/Katarina_White.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY_Night.jpg')
  },

  {
    id: 81,
    text:
      `
        — Я…  —  вопрос поставил меня в тупик, ведь мне даже в голову подобные мысли не приходили. — Может быть еще не встретилась та самая. 
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY_Night.jpg')
  },

  {
    id: 82,
    text:
      `
        — Вы верите в любовь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    imageFront: require('../../../../Images/Katarina/Persons/Katarina_White.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY_Night.jpg')
  },

  {
    id: 83,
    text:
      `
        — Когда-то верил. 
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY_Night.jpg')
  },

  {
    id: 84,
    text:
      `
        — Спасибо, — девушка посмотрела на меня. — Извините, если вопросы как-то испортили вам настроение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    imageFront: require('../../../../Images/Katarina/Persons/Katarina_White.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY_Night.jpg')
  },

  {
    id: 85,
    text:
      `
        — Нет-нет, прекратите так сильно переживать, я же сам дал добро. Но почему вам так интересна моя персона? 
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY_Night.jpg')
  },

  {
    id: 86,
    text:
      `
        — Любопытство. О вас ходит множество слухов. Даже говорят о ваших близких отношениях с Николой… 
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageFront: require('../../../../Images/Katarina/Persons/Katarina_White.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY_Night.jpg')
  },

  {
    id: 87,
    text:
      `
        — Забавно, — я искренне рассмеялся. — Слишком много лишнего внимания. Люди так любят обсуждать все на свете.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY_Night.jpg')
  },

  {
    id: 88,
    text:
      `
        — Верно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageFront: require('../../../../Images/Katarina/Persons/Katarina_White.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY_Night.jpg')
  },

  {
    id: 89,
    text:
      `
        Слова Катарины заставили задуматься. Я не планирую покидать Нью-Йорк, по крайне мере, пока не выясню следующую точку назначения. А это может быть год, два или больше, учитывая, что дело встало мертвым грузом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    stats: [
      { story: EStoriesEn.Katarina, value: 0, category: 'Person', id: 'Katarina' }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY_Night.jpg')
  },

  {
    id: 90,
    text:
      `
        Люди задают вопросы. Это логично, ведь я сам приковал к себе внимание. Значит, мне нужна ненастоящая семья? 
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY_Night.jpg')
  },

  {
    id: 91,
    text:
      `
        Мне не хотелось в это погружаться. Пока я решил отложить вопрос в долгий ящик и вернуться к нему, когда определюсь со временем пребывания в городе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY_Night.jpg')
  },

  {
    id: 92,
    text:
      `
        Мы попрощались с актрисой на пороге ее дома. Тихо и без особых эмоций. 
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/NY_Night.jpg')
  },

  {
    id: 93,
    text:
      `
        В течение нескольких месяцев мы периодически виделись с Катариной на ее выступлениях или изредка Никола приглашал ее в игорные дома, где она молча смотрела, как Тесла проигрывал деньги.
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/Gaming_Club.jpg')
  },

  {
    id: 94,
    text:
      `
        Однажды на очередном выступлении девушки, куда Тесла не смог прийти, я решил, что поздним вечером ей будет довольно опасно ходить одной, поэтому отправился в комнату актеров, чтобы предложить проводить до дома. 
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Theatre_Scene.jpg')
  },

  {
    id: 95,
    text:
      `
        Чем ближе я приближался, тем сильнее были слышны крики и звуки чего-то бьющегося. Перейдя на бег, я отворил нужную дверь и обомлел от увиденного. 
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Katarina/Backgrounds/Theatre_Scene.jpg')
  },

  {
    id: 96,
    text:
      `
        Первое, что бросилось в глаза — Катарина. Ее одежда была немного порвана в нескольких местах, она дрожала и плакала в объятиях незнакомого мне молодого парня в странной маске. 
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/Wardrobe.jpg')
  },

  {
    id: 97,
    text:
      `
        Напротив них стоял крупный пожилой мужчина, который вытирал лицо от крови, что струилась из его носа. Он выглядел разъяренно, потирал кулаки и натягивал немного спущенные штаны. 
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/Wardrobe.jpg')
  },

  {
    id: 98,
    text:
      `
        Мое появление, казалось, никто не заметил. Защитник Катарины вышел вперед и грозным тоном стал говорить старику:
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/Wardrobe.jpg')
  },

  {
    id: 99,
    text:
      `
        — Еще хоть пальцем ее тронешь, я убью тебя. Убью тебя! Как ты посмел опорочить ее?!
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Mask.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/Wardrobe.jpg')
  },

  {
    id: 100,
    text:
      `
        — Александр, прошу, — Катарина схватила его за руку, пытаясь унять его гнев.
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageFront: require('../../../../Images/Katarina/Persons/Katarina_White.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/Wardrobe.jpg')
  },

  {
    id: 101,
    text:
      `
        — Щенок! В моем театре, как ты смеешь. Я вызову соответствующие органы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageFront: require('../../../../Images/Katarina/Persons/Old_Man.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/Wardrobe.jpg')
  },

  {
    id: 102,
    text:
      `
        — Похоже, вы слишком глупы, чтобы понять простую истину, —  Александр стал замахиваться, целясь в лицо пожилого мужчины. 
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Mask.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/Wardrobe.jpg')
  },

  {
    id: 103,
    text:
      `
        Не надо было иметь много ума, чтобы понять, что этот старик сделал или пытался сделать с Катариной. Все вставало на свои места: ее печальное лицо, вопросы про любовь, разорванная одежда, дрожь в теле и опустошенный взгляд.
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/Wardrobe.jpg')
  },

  {
    id: 104,
    text:
      `
        Я старался держаться, чтобы лично не придушить этого подонка. Ведь понимал — лишние эмоции навредят моему делу. Когда я вышел в центр комнаты, вставая между разгорающейся дракой, я не мог произнести другого.
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    imageBack: require('../../../../Images/Katarina/Backgrounds/Wardrobe.jpg')
  },

  {
    id: 105,
    text:
      `
        — Еще хоть слово, старик, отправишься на тот свет. 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('Katarina', 'Глава 1', 'Часть 1', '0')
        }
      }],
    achievement: { story: EStoriesEn.Katarina, name: 'PrologueCompleted' },
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Katarina/UI/Border.png'),
    imageBack: require('../../../../Images/Katarina/Backgrounds/Wardrobe.jpg')
  }
])
