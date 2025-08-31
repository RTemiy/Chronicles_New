import { saveEndProgress, scenarioManager, timer, wardrobe } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { redFlash, whiteFlash } from '../../../../Components/Slide/Slide'
import { askedAmount, choiceDone, getChoice, resetChoices } from '../../../../Functions/5Choices'

scenarioManager.addScenario({ storyName: EStoriesEn.FOF, chapterName: 'Глава 1', partName: 'Часть 4', code: '0' }, [
  {
    id: 0,
    text:
      `
        Ну так что? Готова повеселиться?
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    music: require('../../../../Sounds/FOF/Main.mp3'),
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 2,
    text:
      `
        Ты так спрашиваешь, будто бы у меня есть выбор.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Pendant.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 3,
    text:
      `
        А его нет? Ты всегда можешь остаться здесь.
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 4,
    text:
      `
        Парень обвел взглядом надоевшие ему стены, и, остановившись на мне, продолжил ожидать ответ.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 5,
    text:
      `
        «Меня настораживает то, как он смотрит. Есть в нем что-то пугающее, но в то же время, он не может не очаровать».
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Pendant.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 6,
    text:
      `
        Решив избегать прямого контакта, я спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 7,
    text:
      `
        Так куда пойдем?
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Pendant.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 8,
    text:
      `
        Есть на примете одно местечко.
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 9,
    text:
      `
        Какое?
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Pendant.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 10,
    text:
      `
        Крис заговорщицки отвел взгляд и усмехнулся. И сейчас его глаза загорелись особенно ярко.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 11,
    text:
      `
        Знаешь, а я в тебе не ошибся. И, пока ты прилежно училась в школе, я позволил себе выбрать наряд для тебя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 12,
    text:
      `
        Знал, что ты не подведешь. Приоденься. Нужные вещи — на кровати. Встречаемся через час здесь.
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 13,
    text:
      `
        Ты так и не сказал, куда мы пойдем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Pendant.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 14,
    text:
      `
        И для чего нужно переодеваться?
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Pendant.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 15,
    text:
      `
        Это сюрприз, дорогая. 
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 16,
    text:
      `
        Я не стала терять время и пошла к себе, по пути гадая над тем, что же этот «странник» задумал.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 17,
    text:
      `
        «Не совершаю ли я ошибку? Я должна учиться применять магию, чтобы поскорее избавиться от этого кошмара». 
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Pendant.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 18,
    text:
      `
        «А что делаю я? Собираюсь пойти куда-то с Крисом? С тем, кого почти не знаю?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Pendant.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 19,
    text:
      `
        «Но если я и дальше продолжу истязать себя, то заполучу пару психических заболеваний, а это влечет за собой неприятные последствия».
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Pendant.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 20,
    text:
      `
        «Да и нужно признать, что Крис, вроде бы неплохой человек». 
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Pendant.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 21,
    text:
      `
        В смысле… Он не ломится ко мне в комнату, не подглядывает, и, что самое важное, не надоедает навязчивым присутствием. 
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 22,
    text:
      `
        Не проявляет интереса, и позволяет прийти в себя. Словно сосед в общежитии.
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 23,
    text:
      `
        «Почему бы и нет?»
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Pendant.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 24,
    text:
      `
        «Что бы ни происходило, я должна принять свою судьбу. И выйти из любой ситуации победителем». 
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Pendant.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 25,
    text:
      `
        Увидев на кровати пакет, я поспешила открыть его и надела то, что лежало в нем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageFront: require('../../../../Images/FOF/Objects/Packet.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 26,
    text:
      `
        Помимо одежды, обуви и аксессуаров, там лежала косметичка.
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 27,
    text:
      `
        Кулон был на мне, и, повертев его в руках, я аккуратно опустила его на шею и занялась прической и макияжем.
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 28,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    wardrobe: { story: EStoriesEn.FOF, personId: 'Abigeil_Club', goTo: 29 },
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 29,
    text:
      `
        Я осмотрела себя с ног до головы, и поняла одно:
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 30,
    text:
      `
        «Как я могу выйти в таком виде на улицу?»
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 31,
    text:
      `
        Платье казалось слишком вульгарным, а юбка была чересчур короткой. Макияж прибавлял мне возраста, но несмотря на это, я выглядела достаточно эффектно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 32,
    text:
      `
        «Да, сразу видно, что этот образ выбирал Кристофер».
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 33,
    text:
      `
        «Только в мужских мечтах девушка будет ходить на высоких каблуках, в чулках, и в мега коротком платье». 
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 34,
    text:
      `
        Но что-то в этом образе мне нравилось.
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 35,
    text:
      `
        Дерзость. Свобода, которых у меня никогда не было.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 36,
    text:
      `
        «Я всегда была загнана в рамки отличницы, от которой ожидают послушания и хороших оценок. А сейчас я выглядела иначе. И эти перемены…»
      `,
    buttons: [
      {
        text: 'Мне нравились',
        goTo: 37
      },
      {
        text: 'Не волновали меня',
        goTo: 40
      },
      {
        text: 'Были совсем не по мне',
        goTo: 41
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 37,
    text:
      `
        «Наверное где-то в глубине души я мечтала хоть раз примерить подобный образ оторвы, но боялась». 
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Shift' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 38,
    text:
      `
        «Боялась, что люди начнут видеть во мне слабость, доступность. А я не могла показать себя с этой стороны». 
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 39,
    text:
      `
        «Но теперь у меня появилась возможность измениться. Стать ненадолго той, кем я мечтала быть». 
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 40,
    text:
      `
        «Какая разница, что на мне надето, когда в моей жизни столько всего происходит?»
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 270,
    text:
      `
        Придавать значение моему образу сейчас — бессмысленно, ведь это все равно ничего не изменит.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 41,
    text:
      `
        «Мне нравится быть той, кем я являюсь, а сейчас все эти новшества давались с огромным трудом». 
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Constancy' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 42,
    text:
      `
        Но я и не хотела ничего менять. Я привыкла быть собой, носить строгие наряды, которые подчеркивают мой статус. 
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 43,
    text:
      `
        Исключением был лишь наряд на выступления. 
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 44,
    text:
      `
        Я привыкла выступать в соблазнительных нарядах, и, видимо поэтому не испытывала неловкости, когда появилась перед Кристофером. 
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 45,
    text:
      `
        За прошедший час не только я успела прихорошиться. Кристофер тоже выглядел иначе:
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 46,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    wardrobe: { story: EStoriesEn.FOF, personId: 'Chris_Club', goTo: 47 },
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 47,
    text:
      `
        Парень не сводил с меня взгляда, и, когда я подошла ближе, он сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 48,
    text:
      `
        Думаю, я выбрал подходящее платье для тебя. Выглядишь не так подавленно, как пару часов назад. 
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 49,
    text:
      `
        Поехали?
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 50,
    text:
      `
        Громкая музыка заглушала голоса многочисленных посетителей. Похоже, сегодня люди отдыхали после трудовых будней.
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    beforeBegin: whiteFlash,
    music: require('../../../../Sounds/FOF/Club.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 51,
    text:
      `
        Некоторые из них безудержно танцевали, в то время как остальные — сидели у барной стойки и за столиками, поглощая крепкий алкоголь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 52,
    text:
      `
        Ты привел меня в клуб?
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 53,
    text:
      `
        Я в растерянности стояла позади Кристофера, пытаясь хоть как-то привыкнуть к окружению.
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 54,
    text:
      `
        В это же время парень чувствовал себя здесь слишком уверенно. Крис немного повернулся ко мне, чтобы его голос не затерялся в музыке, и ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 55,
    text:
      `
        А ты имеешь что-то против?
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 56,
    text:
      `
        Запах его парфюма ударил в нос, оставляя приятное послевкусие. Я хотела высказаться, что мне не нравилось это заведение, но парень уже двинулся вперед.
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 57,
    text:
      `
        Крис вальяжно прошелся через толпу, и, сев в баре, жестом подозвал бармена.
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 58,
    text:
      `
        Мой вид привлекал ненужное внимание, и я поняла, что стоять здесь одной было не лучшей идеей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 59,
    text:
      `
        Пытаясь не нарваться на какого-нибудь пьяницу и не затеряться, я пошла следом.
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 60,
    text:
      `
        От моего взгляда не ускользали похотливые парочки, которые лапали друг друга прямо на людях. 
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 61,
    text:
      `
        Какая мерзость! Я не могу здесь находиться!
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 62,
    text:
      `
        Подойдя к парню, я немного неуверенно посмотрела на стакан перед ним.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 63,
    text:
      `
        Садись, Эби.
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 64,
    text:
      `
        Крис, я хочу уйти.
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 65,
    text:
      `
        Но мы только пришли.
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 66,
    text:
      `
        Я не люблю подобные места.
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 67,
    text:
      `
        Сказав это, я указала кивком в сторону, где пьяная женщина танцевала на столе, скидывая всю одежду на пол.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 68,
    text:
      `
        Кристофер лишь усмехнулся, и с некоторым усталым видом взял бутылку, наполнил еще один стакан и толкнул в мою сторону. 
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 69,
    text:
      `
        Выпей.
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 70,
    text:
      `
        С сомнением посмотрев на содержимое, я возмутилась:
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 71,
    text:
      `
        Я вообще-то несовершеннолетняя.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 72,
    text:
      `
        Парень закатил глаза, опустошил свой стакан, ответив:
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 73,
    text:
      `
        Кассандра может и да, но Эбигейл не моложе 21. Выпей. Расслабься.
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 74,
    text:
      `
        «Раньше я только мельком пробовала шампанское, а теперь готова ли я выпить?»
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 75,
    text:
      `
        «Мне слишком тяжело нести это бремя, и, возможно так я хоть немного отвлекусь от проблем».
      `,
    buttons: [
      {
        text: 'Выпить',
        goTo: 76
      },
      {
        text: 'Не пить',
        goTo: 95
      },
      {
        text: 'Сделать глоток',
        goTo: 107
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 76,
    text:
      `
        «Стоит же когда-то меняться».
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Shift' },
      { story: EStoriesEn.FOF, value: +1, category: 'Choice', id: 'DrinkAtClub' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 77,
    text:
      `
        Сделав пару глотков, я поморщилась и ощутила, как крепкий алкоголь обжег пищевод.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 78,
    text:
      `
        Кристофер улыбнулся, и, выпив со мной за компанию, ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 79,
    text:
      `
        Моя девочка.
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 80,
    text:
      `
        Ощущая горькое послевкусие, я поморщилась и сказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 81,
    text:
      `
        Как это можно пить?
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 82,
    text:
      `
        Легко. Стоит только попробовать.
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 83,
    text:
      `
        Кристофер не хотел останавливаться и, подозвав работника, сделал заказ.
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 84,
    text:
      `
        Эй, бармен. Принеси девушке коктейль.
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 85,
    text:
      `
        Я не разделяла настроения Криса, и не хотела напиваться. Но мне было интересно попробовать нечто новое. 
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 86,
    text:
      `
        И с любопытством рассматривала бармена, который мастерски смешивал напитки, перекидывая шейкер за спиной.
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 87,
    text:
      `
        Через пару минут передо мной стоял красивый коктейль. 
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageFront: require('../../../../Images/FOF/Objects/Cocktail_01.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 88,
    text:
      `
        На мое удивление, он оказался вкусным, и я решила не останавливаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageFront: require('../../../../Images/FOF/Objects/Cocktail_02.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 89,
    text:
      `
        Крис заигрывал с девушками, которые сидели рядом, пока я допивала уже 3 коктейль.
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 90,
    text:
      `
        Переживания ушли на второй план, уступая место веселью. Выпив очередной напиток, я встала, и, пританцовывая, пошла в центр.
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    message: 'Не стоило так увлекаться, ты опьянела',
    imageFront: require('../../../../Images/FOF/Objects/Cocktail_03.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'right',
    achievement: { story: EStoriesEn.FOF, name: 'CocktailQueen' },
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 91,
    text:
      `
        Так я ощущала себя Кассандрой. Можно было позволить телу снова чувствовать ритм и танцевать.
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 92,
    text:
      `
        Здесь музыка играла особенно громко, и мне ничего не мешало подстраиваться под ее темп и двигаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 93,
    text:
      `
        «Теперь я понимаю, почему люди пьют. И сейчас мне так хорошо. Мне ведь почти безразлично то, что я — не я».
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 94,
    text:
      `
        Мне нравилось чувствовать музыку и двигаться ей в такт, пока я не ощутила чужие руки на своих бедрах.
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 95,
    text:
      `
        Как это можно пить?
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Constancy' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 96,
    text:
      `
        Легко. Стоит только попробовать.
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 97,
    text:
      `
        Я не разделяла настроения Криса, и не хотела напиваться. И не собиралась меняться из-за каких-то трудностей.
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 98,
    text:
      `
        И все эти люди под алкоголем ведут себя словно одержимые. 
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 99,
    text:
      `
        Парень только устало закатил глаза и сделал пару глотков из стакана. 
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 100,
    text:
      `
        Тебе говорили, что ты скучная?
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 101,
    text:
      `
        Мы приехали сюда с одной целью — повеселиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 102,
    text:
      `
        Вот именно, повеселиться! Но, пить я точно не собираюсь.
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    message: 'Ты решила сохранить трезвый рассудок',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 103,
    text:
      `
        Твое дело. Бармен!
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 104,
    text:
      `
        Кристофер подозвал мужчину, чтобы сделать заказ, а я, чувствуя себя здесь лишней, направилась в центр.
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 105,
    text:
      `
        Так я ощущала себя Кассандрой. Можно было позволить телу снова чувствовать ритм и танцевать.
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 260,
    text:
      `
        Здесь музыка играла особенно громко, и мне ничего не мешало подстраиваться под ее темп.
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 106,
    text:
      `
        Мне нравилось чувствовать музыку и двигаться ей в такт, пока я не ощутила чужие руки на своих бедрах.
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 107,
    text:
      `
        «Ничего страшного, если я только пригублю».
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Shift' },
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Constancy' },
      { story: EStoriesEn.FOF, value: +1, category: 'Choice', id: 'SipAtClub' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 108,
    text:
      `
        Сделав один глоток, я поморщилась и ощутила, как крепкий алкоголь обжег пищевод.
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 109,
    text:
      `
        Кристофер улыбнулся, и, выпив со мной за компанию, ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 110,
    text:
      `
        Моя девочка.
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 111,
    text:
      `
        Как это можно пить?
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 112,
    text:
      `
        Легко. Стоит только попробовать.
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 113,
    text:
      `
        Я попробовала. Такое не по мне.
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 114,
    text:
      `
        Твое дело. Бармен!
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 115,
    text:
      `
        Кристофер подозвал мужчину, чтобы сделать заказ, а я, чувствуя себя здесь лишней, направилась в центр.
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 116,
    text:
      `
        Здесь музыка играла особенно громко, и мне ничего не мешало подстраиваться под ее темп.
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 117,
    text:
      `
        Так я ощущала себя Кассандрой. Можно было позволить телу снова чувствовать ритм и танцевать.
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 118,
    text:
      `
        Мне нравилось чувствовать музыку и двигаться ей в такт, пока я не ощутила чужие руки на своих бедрах.
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 119,
    text:
      `
        «Крис?»
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 120,
    text:
      `
        Мне, конечно, льстило, что парень последовал за мной, и не оставил одну среди всех людей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 121,
    text:
      `
        И, хоть он и казался мне симпатичным, но это было слишком. 
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 122,
    text:
      `
        Крис, это перебор!
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 123,
    text:
      `
        Развернувшись, я увидела незнакомца, который нагло лапал меня, и резко отшатнулась.
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 124,
    text:
      `
        Эй, малышка, ты куда?
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    speaker: 'Пьяный мужик',
    imageFront: require('../../../../Images/FOF/Persons/Man.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 126,
    text:
      `
        «Он пьян. Надо скорее уйти».
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 127,
    text:
      `
        Подальше от тебя, мудак.
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 129,
    text:
      `
        Он не услышал моих слов, а жаль. Заприметив женский туалет, я пошла туда, и, закрыв дверь, ощутила себя в безопасности.
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 130,
    text:
      `
        Музыка проникала сквозь закрытую дверь, но я почти не обращала на нее внимания, увлеченно изучая свое отражение.
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 131,
    text:
      `
        «Когда я до такого докатилась?»
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    music: require('../../../../Sounds/FOF/Sad.mp3'),
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 132,
    text:
      `
        Тут никого не было. Только я.
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 133,
    text:
      `
        Я снова посмотрела на кулон, который висел на моей шее... И в голове мелькнула мысль:
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 134,
    text:
      `
        Я…
      `,
    buttons: [
      {
        text: 'Скучаю по Нику',
        goTo: 135
      },
      {
        text: 'Не скучаю по Нику',
        goTo: 143
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 135,
    text:
      `
        «Даже не знаю, почему, но он не выходил у меня из головы».
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Nick' },
      { story: EStoriesEn.FOF, value: +1, category: 'Choice', id: 'MissNickAtClub' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 136,
    text:
      `
        Когда я думала о Нике, невольно вспоминались моменты, когда все мое тело так и звало к нему. 
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 137,
    text:
      `
        Это потрясающее чувство, когда я ощущала его присутствие, и мне даже не нужно было видеть его, чтобы знать: он рядом.
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 138,
    text:
      `
        Неужели вот она — магия? Так ощущается сила?
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 139,
    text:
      `
        «Это потому что он — призрак, а она — ведьма?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 140,
    text:
      `
        «Она… Это была Эбигейл, не я. Но чувство было волшебное».
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 141,
    text:
      `
        «Но я не могла не думать о том, что он обидел меня и даже не извинился. А что же я?»
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 142,
    text:
      `
        Стою в клубе, прячась от всего мира, лишь бы ненадолго побыть одной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 143,
    text:
      `
        «Мы ведь толком и не знаем друг друга. Так зачем мне думать о нем?»
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 144,
    text:
      `
        Но я все равно невольно вспоминала те моменты, когда все мое тело так и звало к Нику.
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 145,
    text:
      `
        Ужасно осознавать, что я ощущала его, и мне даже не нужно было видеть его, чтобы знать: он рядом.
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 146,
    text:
      `
        Неужели вот она — магия? Так ощущается сила?
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 147,
    text:
      `
        «Это потому что он — призрак, а она — ведьма?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 148,
    text:
      `
        «Она… Это была Эбигейл, не я. Но чувство было волшебное».
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 149,
    text:
      `
        «Но я не могла не думать о том, что он обидел меня и даже не извинился. А что же я?»
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 150,
    text:
      `
        Стою в клубе, прячась от всего мира, лишь бы ненадолго побыть одной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 151,
    text:
      `
        И все же мне было любопытно, как он ощущает себя, когда не может достучаться до меня? Испытывает ли страх? Злость? Панику? 
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 152,
    text:
      `
        А может быть, пытается найти, исследуя каждый уголок в поисках способа связаться со мной?
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 153,
    text:
      `
        Интересно, и где ты сейчас?
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 154,
    text:
      `
        В дверь настойчиво постучались, и я, закрыв глаза, сказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    simple: require('../../../../Sounds/FOF/Knocking.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 155,
    text:
      `
        Дайте мне минуту, и я выйду.
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 156,
    text:
      `
        Стук стал настойчивее, требовательнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    simple: require('../../../../Sounds/FOF/Knocking.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 157,
    text:
      `
        «Нужда такая вещь. Пора выходить, а то обмочатся прямо там».
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 158,
    text:
      `
        Тут дверь открылась, и показался он.
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 159,
    text:
      `
        Мужик покачивался и икал, направляясь в мою сторону.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    music: require('../../../../Sounds/FOF/Stress01.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 160,
    text:
      `
        «Он всего лишь пришел по нужде. Надо сваливать, пока он не заметил меня».
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 161,
    text:
      `
        Пьяница медленно огляделся, и, встав посередине, улыбнулся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 162,
    text:
      `
        «Это не к добру…»
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 163,
    text:
      `
        Нашлась, таки, краса…ик ца. 
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    speaker: 'Пьяный мужик',
    imageFront: require('../../../../Images/FOF/Persons/Man.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 164,
    text:
      `
        Пока он молча осматривал меня, я в панике взглядом обшаривала уборную в поисках того, чем смогу защищаться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 165,
    text:
      `
        Я заприметил тебя, ик! А ты сама убежала в укромное место.
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    speaker: 'Пьяный мужик',
    imageFront: require('../../../../Images/FOF/Persons/Man.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 166,
    text:
      `
        Я... Не подходи!
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 167,
    text:
      `
        Сердце бешено колотилось в груди, пока я, шаг за шагом, увеличивала расстояние между нами, отступая назад. 
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 168,
    text:
      `
        «Есть шанс его запугать!» 
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 169,
    text:
      `
        Мой голос дрожал, но я пыталась подавить страх и сказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 170,
    text:
      `
        Эй, ублюдок, лучше вали отсюда, а то тебе здорово достанется…
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 171,
    text:
      `
        Ты права. Сегодня мне здорово достанется. 
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    speaker: 'Пьяный мужик ',
    imageFront: require('../../../../Images/FOF/Persons/Man.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 172,
    text:
      `
        Ощутив спиной холодную стену, осмотрелась, и поняла — бежать некуда. Его слова заставили меня осознать, что может случиться дальше…
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 173,
    text:
      `
        Ик! Мне нравится, как ты флиртуешь. Ик! Но мы пропустим этот этап.
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    speaker: 'Пьяный мужик',
    imageFront: require('../../../../Images/FOF/Persons/Man.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 174,
    text:
      `
        Извращенец уже почти настиг меня, но я не могла так просто сдаться. В голову закрадывается мысль:
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 175,
    text:
      `
        «Я же могу использовать магию! Но как?»
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    message: 'Стат сила определяет, готова ли героиня исполнить свою часть сделки и использовать магию',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 176,
    text:
      `
        Когда его противные руки потянулись ко мне, я оттолкнула его, пытаясь сообразить, как мне спастись.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    beforeBegin: () => {
      resetChoices()
    },
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 177,
    text:
      `
        «Как мне защищаться?»
      `,
    buttons: [
      {
        text: 'Паниковать',
        goTo: 178,
        func: () => {
          timer.stop()
        }
      },
      {
        text: 'Пробовать колдовать',
        goTo: 184,
        func: () => {
          choiceDone(1)
          timer.stop()
        }
      },
      {
        text: 'Ударить его',
        goTo: 191,
        func: () => {
          choiceDone(2)
          timer.stop()
        }
      },
      {
        text: 'Умолять не трогать',
        goTo: 196,
        func: () => {
          choiceDone(3)
          timer.stop()
        }
      }],
    beforeBegin: () => {
      timer.set(7, () => { scenarioManager.beginScene(178) })
      scenarioManager.changeSceneButtonStatus(177, 0, getChoice(0))
      scenarioManager.changeSceneButtonStatus(177, 1, getChoice(1))
      scenarioManager.changeSceneButtonStatus(177, 2, getChoice(2))
      scenarioManager.changeSceneButtonStatus(177, 3, getChoice(3))
    },
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 250,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return !askedAmount(2)
        },
        goTo: 177
      },
      {
        condition: () => {
          return askedAmount(2)
        },
        goTo: 203
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 178,
    text:
      `
        Я не знала, что мне делать. Паника атаковала меня, и я чувствовала, как задыхаюсь.
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    beforeBegin: () => {
      choiceDone(0)
    },
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 179,
    text:
      `
        Я начала глубоко дышать, чтобы не терять рассудок. Сразу же вспомнила сеанс с доктором Энн.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 180,
    text:
      `
        «Дыши, дыши, это…»
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 181,
    text:
      `
        Но реальность была суровее.
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 182,
    text:
      `
        Он загонял меня в угол, а я металась, как дикий зверь, не зная, как себе помочь.
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 183,
    text:
      `
        Такая покладистая. Мы отлично повеселимся.
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    speaker: 'Пьяный мужик ',
    imageFront: require('../../../../Images/FOF/Persons/Man.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 184,
    text:
      `
        Как же это делается?
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: 1, category: 'Effect', id: 'Power' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 185,
    text:
      `
        Мимолетом вспоминались какие-то отрывки из сериалов про ведьм. 
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 186,
    text:
      `
        «Соберись! Что же делать? Выставить ладони, произнести заклинание?!» 
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 187,
    text:
      `
        Я трясла руками, пытаясь сделать хоть что-то, но все мои попытки были безуспешными.
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 188,
    text:
      `
        Давай же, ну!
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 189,
    text:
      `
        Пытаешься быть грозной? Мне нравится. 
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    speaker: 'Пьяный мужик ',
    imageFront: require('../../../../Images/FOF/Persons/Man.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 190,
    text:
      `
        Чертова магия! 
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 191,
    text:
      `
        Не найдя ничего лучше, я замахнулась, чтобы отвесить ему пощечину, но он лишь схватил мою руку.
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 192,
    text:
      `
        Отпусти! Урод, я же сказала!
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 193,
    text:
      `
        Но он не слушал. Пока я пыталась вывернуться из его грязных рук, он лишь вдохнул мой аромат и, оскалившись, провел языком по запястью.
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 194,
    text:
      `
        Быстро отдернув руку, я начала вытирать ее о платье, ощущая липкий ужас.
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 195,
    text:
      `
        Сама уже тянешься? Иди сюда, и я покажу, на что способен.
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    speaker: 'Пьяный мужик ',
    imageFront: require('../../../../Images/FOF/Persons/Man.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 196,
    text:
      `
        Прошу вас, не трогайте меня! Отпустите! Я ничего вам не сделала.
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 197,
    text:
      `
        Но его взгляд был стеклянным. Он не видел перед собой девушку, а видел лишь цель. 
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 198,
    text:
      `
        Цель для исполнения своих грязных, сексуальных и похотливых желаний.
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 199,
    text:
      `
        «Глупо было полагать, что он прислушается».
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 200,
    text:
      `
        Строишь из себя невинную овечку, и в то же время выглядишь как чертовка? 
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    speaker: 'Пьяный мужик ',
    imageFront: require('../../../../Images/FOF/Persons/Man.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 201,
    text:
      `
        Определенно мне нравится. 
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    speaker: 'Пьяный мужик',
    imageFront: require('../../../../Images/FOF/Persons/Man.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 202,
    text:
      `
        Все было напрасно.
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 203,
    text:
      `
        Ну все, достаточно строить из себя недотрогу. Сама нарвалась.
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    speaker: 'Пьяный мужик ',
    imageFront: require('../../../../Images/FOF/Persons/Man.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 204,
    text:
      `
        Когда его запах проник мне в легкие, я подумала:
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 205,
    text:
      `
        «Надо закричать! Может, кто-то меня услышит!»
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 206,
    text:
      `
        Он больше не мог сдерживаться и схватил меня за платье, вдавливая в стену. Я отвернулась от его красного лица и прокричала:
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 207,
    text:
      `
        ПОМОГИТЕ!
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 208,
    text:
      `
        Мужик с силой ударил меня по щеке, отчего я упала на холодный грязный пол.
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    beforeBegin: redFlash,
    music: require('../../../../Sounds/FOF/Noise.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 261,
    text:
      `
        Ударившись о стену, я приложила руки к голове, боясь потерять сознание.
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    beforeBegin: redFlash,
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 209,
    text:
      `
        Губы пересохли, и, поднеся ладонь ко рту, увидела на ней кровь.
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 210,
    text:
      `
        Мысли терялись в голове, пока я пыталась встать на ноги, удерживаясь на высоких каблуках.
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 211,
    text:
      `
        Так-то лучше. Будешь сопротивляться, вырублю окончательно.
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    speaker: 'Пьяный мужик ',
    imageFront: require('../../../../Images/FOF/Persons/Man.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 212,
    text:
      `
        Он усмехнулся, сплюнул на пол и добавил:
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 213,
    text:
      `
        Так ты хоть запомнишь лучший секс в своей жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    speaker: 'Пьяный мужик ',
    imageFront: require('../../../../Images/FOF/Persons/Man.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 214,
    text:
      `
        «Это конец».
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 216,
    text:
      `
        Слезы застилали взор. У меня больше не было сил бороться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 217,
    text:
      `
        Грубо взяв за руку, мужик прислонил меня к стене, и, обхватив руки, поднял над головой, не позволяя ударить его.
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 218,
    text:
      `
        Лишив меня шанса отбиваться. Спастись.
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 219,
    text:
      `
        Увидев мои слезы и дрожь в теле, он лишь равнодушно сказал: 
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 220,
    text:
      `
        Чего такая кислая? Сама потом прибежишь ко мне за добавкой.
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    speaker: 'Пьяный мужик ',
    imageFront: require('../../../../Images/FOF/Persons/Man.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 222,
    text:
      `
        Сама умолять будешь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    speaker: 'Пьяный мужик',
    imageFront: require('../../../../Images/FOF/Persons/Man.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 223,
    text:
      `
        Другая его рука похотливо и грязно трогала меня за талию, до боли сжимала грудь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 224,
    text:
      `
        Мужик жадно прислонился ко мне всем телом, отчего я испытала унижение и отвращение.
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 225,
    text:
      `
        Он застонал, вдохнул мой запах и пахом начал тереться об меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 226,
    text:
      `
        В глазах стояли слезы, и я лишь отвернулась, задержав дыхание.
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 227,
    text:
      `
        Переставая меня лапать, он нетерпеливо отдалился. 
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 228,
    text:
      `
        Даже этого расстояния мне было достаточно, чтобы шумно выдохнуть от происходящего.
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 229,
    text:
      `
        Мужик нетерпеливо начал расстегивать ремень. Видимо, одной рукой сделать это было трудно, он путался и матерился.
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 230,
    text:
      `
        Да кто их придумал?
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    speaker: 'Пьяный мужик',
    imageFront: require('../../../../Images/FOF/Persons/Man.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 231,
    text:
      `
        Бл… Сука! 
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    speaker: 'Пьяный мужик ',
    imageFront: require('../../../../Images/FOF/Persons/Man.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 232,
    text:
      `
        «У меня есть шанс!»
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 234,
    text:
      `
        Мужик отпустил меня, пытаясь снять ремень. Он чертыхался, икал, но, кажется, у него получалось.
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 235,
    text:
      `
        «Я должна что-то сделать!»
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 237,
    text:
      `
        Обдумать план побега времени не было, поэтому, приложив максимальное количество усилий, я резко ударила его в пах.
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 239,
    text:
      `
        Тупая шмара… я тебя…
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    beforeBegin: redFlash,
    speaker: 'Пьяный мужик ',
    imageFront: require('../../../../Images/FOF/Persons/Man.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 240,
    text:
      `
        Он согнулся пополам от боли, и упал на пол, держа руками свое хозяйство. Не теряя времени, я выскочила за дверь.
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Toilet.jpg')
  },

  {
    id: 241,
    text:
      `
        Музыка снова оглушила меня, скрывая бешеное сердцебиение, и я бежала, совсем не разбирая дороги. 
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    music: require('../../../../Sounds/FOF/Club.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 242,
    text:
      `
        И не заметила человека, стоявшего на моем на пути.
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 243,
    text:
      `
        Я в порядке. Все хорошо, это… это…
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 244,
    text:
      `
        В панике осматриваясь, не идет ли за мной этот долбаный извращенец, я совсем не обратила внимания на человека, с которым столкнулась.
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 245,
    text:
      `
        Мое сердце бешено колотилось, когда я подняла взгляд вверх и увидела его...
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('FOF', 'Глава 1', 'Часть 5', '0')
        }
      }],
    simple: require('../../../../Sounds/FOF/Heartbeat.mp3'),
    achievement: { story: EStoriesEn.FOF, name: 'Chapter01Part04Completed' },
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  }
])
