import { saveEndProgress, scenarioManager } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { blackFlash } from '../../../../Components/Slide/Slide'

scenarioManager.addScenario({ storyName: EStoriesEn.ISML, chapterName: 'Глава 1', partName: 'Пролог', code: '0' }, [
  {
    id: 0,
    text:
      `
        Я открыла глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/ISML/Prologue.mp3'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 1,
    text:
      `
        Блеклый свет просачивался сквозь плотные шторы.
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 2,
    text:
      `
        Но даже этот свет был слишком острой болью для моих глаз.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 3,
    text:
      `
        Я лежала на кровати, смотрела в потолок и чувствовала, как одеяло усталости окутало меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 4,
    text:
      `
        Оно плотно обхватило, затягиваясь все туже и туже, словно петля вокруг шеи.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 5,
    text:
      `
        Хотелось встать и уйти, убежать из этого нескончаемого кошмара.
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 6,
    text:
      `
        Под моим телом ощущались крошки. Они впивались в кожу, словно тысячи острых иголок, напоминая о том, что я сама создала этот хаос.
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 7,
    text:
      `
        Было невыносимо мерзко от этой грязи и беспорядка.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 8,
    text:
      `
        И…
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 9,
    text:
      `
        От себя…
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 10,
    text:
      `
        И тут, в этом самоистязании, я начала говорить сама с собой.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 11,
    text:
      `
        — Я уже лежу так два дня и начался третий. 
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    speaker: 'Нина ',
    imageFront: require('../../../../Images/ISML/Persons/Nina.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 12,
    text:
      `
        — Я не понимаю зачем живу, быть может, я просто буду так лежать и ждать, пока не умру?
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    speaker: 'Нина ',
    imageFront: require('../../../../Images/ISML/Persons/Nina.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 13,
    text:
      `
        — Конечно это будет очень скучно. Но я уже не знаю причину своего существования.
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 14,
    text:
      `
        — Убить себя? Нет…
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 15,
    text:
      `
        Последняя мысль прошла сквозь мой разум, словно удар молота о стекло, оставив за собой лишь эхо страха.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 16,
    text:
      `
        Но жизнь, казалось, и так ускользала из моих рук, оставляя за собой лишь пустоту.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 17,
    text:
      `
        Тяжесть в груди стала еще более ощутимой, когда я вспомнила о том, как меня выперли с учебы, лишив возможности реабилитироваться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 18,
    text:
      `
        Конечно, мне давали уже много шансов все исправить, но я не воспользовалась ни одним из них.
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 19,
    text:
      `
        Винить в этом я никого не могла, кроме себя самой.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 20,
    text:
      `
        Я упустила возможность, не смогла справиться с давлением, не нашла в себе силы продолжить.
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 21,
    text:
      `
        Это был как удар по самолюбию.
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 22,
    text:
      `
        — Я лишила себя будущего. Карьеры своей мечты.
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 23,
    text:
      `
        А было ли мне когда-нибудь до этого дело?
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 24,
    text:
      `
        Я бы так всю жизнь и продолжала ничего не делать.
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 25,
    text:
      `
        Догнивая и деградируя дальше в своем сознании.
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 26,
    text:
      `
        — Как я могла допустить это?
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 27,
    text:
      `
        Позволить себе.
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 28,
    text:
      `
        — Даже мой молодой человек, которому я отдала свое сердце — оставил меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 29,
    text:
      `
        Мысли о нем были как нож, протыкающий мою грудную клетку.
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 30,
    text:
      `
        Я спрашивала себя, что я сделала не так, почему я была недостаточно хороша, чтобы он остался рядом.
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 31,
    text:
      `
        Хотя я могу его понять. 
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 32,
    text:
      `
        — Зачем ему нужна такая девушка?
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 33,
    text:
      `
        — Ведь я не хочу с ним никуда ходить, не могу больше поддержать диалог.
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 34,
    text:
      `
        — И я ненавижу себя и свое тело.
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 35,
    text:
      `
        — Как такую можно любить?
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 36,
    text:
      `
        От этих мыслей я неосознанно ударила кулаком по кровати.
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 37,
    text:
      `
        Слезы сами полились из моих и без того опухших глаз.
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    ambient: require('../../../../Sounds/ISML/Cry.mp3'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 38,
    text:
      `
        И последним ударом по мне стало осознание того, что друзья, с которыми я когда-то делила все, теперь молчали.
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 39,
    text:
      `
        Они исчезли из моей жизни, словно испуганные тени, побоявшись пробиться сквозь мрак, который окутал меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 40,
    text:
      `
        И я, оставшись в одиночестве, начала задаваться вопросом, стоила ли я чего-то в их жизни, если они так легко растворились.
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 41,
    text:
      `
        Окруженная тьмой и забытая миром, я осталась одна в этой грязной комнате. 
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 42,
    text:
      `
        Пытаясь склеить разбитые кусочки своего сердца и собраться с духом, чтобы идти дальше.
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 43,
    text:
      `
        В этой фрустрации, тени проникали в комнату как невидимые хищники, голодные и жаждущие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    beforeBegin: blackFlash,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Demons.jpg')
  },

  {
    id: 44,
    text:
      `
        Они ползали по стенам, тихо шептались, будто хранители мучений.
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Demons.jpg')
  },

  {
    id: 45,
    text:
      `
        Слабость, боль, отчаяние – все это было пищей для них, которую они пожирали с наслаждением.
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Demons.jpg')
  },

  {
    id: 46,
    text:
      `
        Каждый вздох, каждый стон, каждая слеза — амброзия для этих сущностей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Demons.jpg')
  },

  {
    id: 47,
    text:
      `
        Они смотрели своими бесформенными лицами, на которых нельзя было различить ни капли сострадания, лишь беспощадное желание поглотить душу до последней капли.
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    ambient: require('../../../../Sounds/ISML/Whisper.mp3'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Demons.jpg')
  },

  {
    id: 48,
    text:
      `
        Их присутствие было ощутимо даже в самых спокойных моментах жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Demons.jpg')
  },

  {
    id: 49,
    text:
      `
        Они заполняли пространство своим мерзким дыханием, наполняли воздух гнетущей тяжестью. 
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Demons.jpg')
  },

  {
    id: 50,
    text:
      `
        Подстерегая на каждом углу разрушенного разума.
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Demons.jpg')
  },

  {
    id: 51,
    text:
      `
        Вытягивая все, что дорого оставляя лишь пустоту, пока не станешь лишь тенью самой себя.
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Demons.jpg')
  },

  {
    id: 52,
    text:
      `
        Тень, ставшая спутником, теперь стала палачом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Demons.jpg')
  },

  {
    id: 53,
    text:
      `
        Забравшись под кожу, обволакивая сердце и ум ледяным холодом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Demons.jpg')
  },

  {
    id: 54,
    text:
      `
        И в этом мраке я осталась одна, беззащитная перед их силой, теряясь в лабиринте своих собственных мыслей. 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('ISML', 'Глава 1', 'Часть 1', '0')
        }
      }],
    achievement: { story: EStoriesEn.ISML, name: 'PrologueCompleted' },
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Demons.jpg')
  }
])
