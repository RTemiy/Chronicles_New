import { saveEndProgress, scenarioManager, wardrobe } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { purpleFlash, whiteFlash } from '../../../../Components/Slide/Slide'

scenarioManager.addScenario({ storyName: EStoriesEn.ISML, chapterName: 'Глава 1', partName: 'Часть 2', code: '0' }, [
  {
    id: 0,
    text:
      `
        — Что?
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/ISML/Main.mp3'),
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 1,
    text:
      `
        — А когда сказали об этом?
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 2,
    text:
      `
        — Да вот ночью написали в беседе нашей группы.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 3,
    text:
      `
        — А скорая вовремя приехала? Я имею в виду, он живой?
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 4,
    text:
      `
        — Никто не знает.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 5,
    text:
      `
        — Написали только, что у него случился сердечный приступ.
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 6,
    text:
      `
        — А это не может быть просто очередным вбросом?
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 7,
    text:
      `
        — Я на 90 процентов уверена, что нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 8,
    text:
      `
        — Его многие любят.
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 9,
    text:
      `
        — И я даже не знаю, кому в голову может прийти такое ляпнуть.
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 10,
    text:
      `
        — Мне кажется, если кто-то и вправду так мог пошутить, то об этом узнают в конце концов, и его возненавидит весь универ.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 11,
    text:
      `
        — Да, ты права.
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 12,
    text:
      `
        — Я просто не могу никак поверить в это, очень хочу, чтобы это было неправдой.
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 13,
    text:
      `
        — Я тоже...
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 14,
    text:
      `
        — Но, к сожалению или к счастью, люди не вечные.
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 15,
    text:
      `
        — Да знаю я! — голос сорвался на крик.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 16,
    text:
      `
        Сию секунду чувство вины застало меня врасплох.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 17,
    text:
      `
        — Извини...
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 18,
    text:
      `
        — Я не хотела на тебя кричать... Просто в последнее время любая мелочь выводит из себя…
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 19,
    text:
      `
        Подруга понимающе кивнула и немного улыбнулась.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 20,
    text:
      `
        — Ничего страшного.
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 21,
    text:
      `
        — Все хорошо.
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 22,
    text:
      `
        — В последнее время ты это говоришь все чаще.
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 23,
    text:
      `
        — У тебя все нормально? Ты отдыхаешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 24,
    text:
      `
        — Да, вроде. Стараюсь. Но почему-то после отдыха все равно чувствую усталость.
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 25,
    text:
      `
        — Блин, мне это знакомо. Но у меня это может длиться пару дней, а у тебя уже как-то долго.
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 26,
    text:
      `
        — Может, на витамины сдашь?
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 27,
    text:
      `
        — Да надо бы. Я никогда не проверяла это дело.
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 28,
    text:
      `
        — Ты что! Как можно скорее запишись к врачу. Нельзя пренебрегать здоровьем.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 29,
    text:
      `
        — Ладно...
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 30,
    text:
      `
        «Че пристала?»
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 31,
    text:
      `
        — А знаешь, что? — Лена с хитростью улыбнулась.
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 32,
    text:
      `
        — Давай наперегонки до аудитории?
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 33,
    text:
      `
        Я с удивлением посмотрела на подругу.
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 34,
    text:
      `
        — Ты серьезно?
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 35,
    text:
      `
        — Абсолютно! Давай, на счет три.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 36,
    text:
      `
        — Но...
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 37,
    text:
      `
        — Раз... 
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 38,
    text:
      `
        — Подож...
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 39,
    text:
      `
        — Два... 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 40,
    text:
      `
        — Три!
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 41,
    text:
      `
        Я не успела осознать сказанное, а подруга уже унеслась вперед.
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 42,
    text:
      `
        Быстро оглянувшись по сторонам, и, убедившись, что мы никому не мешаем, бросилась за ней следом.
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 43,
    text:
      `
        Лена хохотала, ее смех звенел как колокольчик, разрезая бубнеж коридора. 
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    simple: require('../../../../Sounds/ISML/Laugh.mp3'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 44,
    text:
      `
        Впереди была аудитория, дверь которой уже была приоткрыта.
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 45,
    text:
      `
        — Ты чего? — крикнула я, стараясь догнать ее.
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 46,
    text:
      `
        — Тренировка! — отозвалась Лена, резко свернув в сторону и почти налетев на стену.
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 47,
    text:
      `
        Я, увлекшись гонкой, не сразу заметила, как одна из преподавателей вышла из соседнего кабинета и остановилась прямо на моем пути. Тормозить было уже поздно. Я врезалась в нее, и она, потеряв равновесие, чуть не упала.
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 48,
    text:
      `
        — Простите, профессор! — я стала помогать ей подняться своими трясущимися руками.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 49,
    text:
      `
        Она смерила меня строгим взглядом, но, к моему удивлению, улыбнулась.
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 50,
    text:
      `
        — Берегитесь в следующий раз, молодежь. — преподаватель поправила свои очки и вернулась к делам.
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    speaker: 'Профессор',
    imageFront: require('../../../../Images/ISML/Persons/Professorin_S.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 51,
    text:
      `
        Я кивнула и, повернувшись, увидела, как Лена, прижимая руку к груди, пытается отдышаться у двери аудитории.
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 52,
    text:
      `
        — Все в порядке? 
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 53,
    text:
      `
        — Угу, — кивнула я, пытаясь сдержать смех. — Давай зайдем уже, а то сейчас начнется занятие.
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 54,
    text:
      `
        Мы вошли в аудиторию, где уже собрались наши однокурсники. Я вздохнула с облегчением и уселась на свое место, чувствуя, как усталость понемногу уходит.
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 55,
    text:
      `
        — Спасибо, — прошептала я Лене, когда она села рядом. — Это было весело.
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 56,
    text:
      `
        — Всегда пожалуйста, — подмигнула она. 
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 57,
    text:
      `
        Раздались шаги , заставляя студентов покорно замолчать и создать тишину.
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    simple: require('../../../../Sounds/ISML/Walk.mp3'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 58,
    text:
      `
        В воздухе витало напряжение, ведь обычно пару по анатомии вел доктор Виктор Юрьевич, но все знали, что сегодня будет замена из-за его состояния.
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 59,
    text:
      `
        Мы были поглощены своими мыслями, не заметив, как дверь кабинета начала открываться.
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 60,
    text:
      `
        — Это правда? Виктор Юрьевич в больнице?
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    speaker: 'Студент',
    imageFront: require('../../../../Images/ISML/Persons/Student_1_S.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 61,
    text:
      `
        — Я слышала, что у него был сердечный приступ.
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    speaker: 'Студентка',
    imageFront: require('../../../../Images/ISML/Persons/Studentin_S.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 62,
    text:
      `
        — Это ужасно...
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    speaker: 'Студент',
    imageFront: require('../../../../Images/ISML/Persons/Student_2_S.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 63,
    text:
      `
        Незнакомец кашлянул, привлекая наше внимание.
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    simple: require('../../../../Sounds/ISML/Cough.mp3'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 64,
    text:
      `
        — Добрый день, студенты. Меня зовут Александр Сергеевич, и я буду вести сегодняшнее занятие по анатомии вместо Виктора Юрьевича. 
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 65,
    text:
      `
        — Он действительно находится в больнице, но что с ним, боюсь, сказать не могу. Прошу вас сохранять спокойствие и внимание.
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 66,
    text:
      `
        Мы все затихли, сосредотачиваясь на материале.
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 67,
    text:
      `
        Он начал занятие, проецируя на экран схемы и изображения. Его голос был уверенным и спокойным, несмотря на напряженную обстановку.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 68,
    text:
      `
        — А он симпатичный. 
      `,
    buttons: [
      {
        text: 'На него очень приятно смотреть',
        goTo: 69
      },
      {
        text: 'Ну не знаю… ',
        goTo: 81
      }],
    speaker: 'Лена ',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 69,
    text:
      `
        — Да, я тоже заметила.
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 70,
    text:
      `
        В тот момент, когда я сказала это, Александр Сергеевич, продолжая лекцию, произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 71,
    text:
      `
        — Итак, сегодня мы рассмотрим строение сердечно-сосудистой системы. Начнем с анатомии сердца.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 72,
    text:
      `
        Я посмотрела на него, стараясь сосредоточиться на словах, но мой взгляд приковали очаровательные глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 73,
    text:
      `
        Они были глубоко задумчивыми и, казалось, пронзали меня насквозь. Я попыталась определить их цвет, но это оказалось не так просто. 
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 74,
    text:
      `
        Сначала мне показалось, что они карие, но мгновение спустя они стали зеленоватыми, как листья весной.
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 75,
    text:
      `
        Я задумалась, наблюдая за его сосредоточенным выражением лица. 
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 76,
    text:
      `
        На мгновение наши взгляды встретились, а мои щеки налились теплотой и румянцем.
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    message: 'Он запомнит твой взгляд',
    stats: [
      { story: EStoriesEn.ISML, value: +1, category: 'Person', id: 'AS' }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 77,
    text:
      `
        Сердце забилось быстрее, и я сделала вид, что конспектирую занятие.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 78,
    text:
      `
        — Он на меня посмотрел? Или мне показалось?
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    speaker: 'Нина ',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 79,
    text:
      `
        — Может быть, он просто проверял, внимательно ли мы слушаем.
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 80,
    text:
      `
        — Или он заинтересован в тебе, — улыбнулась Лена, подмигнув мне.
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 81,
    text:
      `
        — Ну не знаю… — я пожала плечами. — Может быть.
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 82,
    text:
      `
        — Как-то не до того.
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 83,
    text:
      `
        Лена слегка удивилась моему равнодушию.
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 84,
    text:
      `
        Я снова взглянула на Александра Сергеевича, стараясь сосредоточиться на его объяснениях.
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 85,
    text:
      `
        — Итак, сегодня мы рассмотрим строение сердечно-сосудистой системы. Начнем с анатомии сердца.
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 86,
    text:
      `
        «Почему Лена так реагирует? Мне он кажется обычным…» 
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ISML, value: 0, category: 'Person', id: 'AS' }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 87,
    text:
      `
        — Сердце — это центральный орган кровеносной системы. Оно обеспечивает циркуляцию крови по всему телу, доставляя кислород и питательные вещества к тканям и органам.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 88,
    text:
      `
        — Итак, сердце состоит из четырех камер: двух предсердий и двух желудочков. Давайте разберем функции каждой из них...
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 89,
    text:
      `
        — И из этого мы понимаем что…
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 90,
    text:
      `
        Когда пара подошла к концу, мы с Леной решили устроить перерыв и пойти перекусить.
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Auditory.jpg')
  },

  {
    id: 91,
    text:
      `
        Очередь, казалось, совсем не двигалась, а в воздухе витало ощущение обыденной суеты.
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 92,
    text:
      `
        — Интересно, что сегодня на обед, — пробормотала я.
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 93,
    text:
      `
        — Нина, ты слышишь меня?
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 94,
    text:
      `
        — Что? Прости, задумалась.
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 95,
    text:
      `
        Лена взглянула на меня с непониманием в глазах, но ничего не сказала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 96,
    text:
      `
        В этот момент к нам подошел один из наших однокурсников — Эдик, широко ухмыляясь.
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 97,
    text:
      `
        — О, Нина, я тут видел твою фотку с Марком. Ты, оказывается, быстро находишь новых парней, а для учебы мозгов не хватает?
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    speaker: 'Эдик',
    imageFront: require('../../../../Images/ISML/Persons/Edik.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 98,
    text:
      `
        Я замерла, чувствуя, как сердце сжалось. Остальные однокурсники, которые толпились рядом, начали перешептываться и смеяться.
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 99,
    text:
      `
        — Тупая, как пробка, и тянешь на дно всю группу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    speaker: 'Эдик',
    imageFront: require('../../../../Images/ISML/Persons/Edik.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 100,
    text:
      `
        — Зачем ты пошла учиться туда, где ты вообще ничего не понимаешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    speaker: 'Эдик',
    imageFront: require('../../../../Images/ISML/Persons/Edik.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 101,
    text:
      `
        — Че молчишь? Язык проглотила? Или правды никогда не слышала? 
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    speaker: 'Эдик',
    imageFront: require('../../../../Images/ISML/Persons/Edik.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 102,
    text:
      `
        — Нина? Ау! Проснииись!
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    speaker: 'Эдик',
    imageFront: require('../../../../Images/ISML/Persons/Edik.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 103,
    text:
      `
        — Эдик, заткнись, а! Ты совсем кукухой поехал? Тренировки последнее отбили?
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 104,
    text:
      `
        — Ой, да ладно, Лена. Все же знают, что она самая тупая в нашей группе, а ты сама же подсказываешь из-за жалости.
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    speaker: 'Эдик',
    imageFront: require('../../../../Images/ISML/Persons/Edik.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 105,
    text:
      `
        Его слова резали по живому, пронзили самые охраняемые закоулки души.
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 106,
    text:
      `
        Ведь Эдик не знал, как я готовилась к поступлению сюда.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 107,
    text:
      `
        Как всю сознательную жизнь изучала медицинские материалы.
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 108,
    text:
      `
        Как все в школе восхищались моими знаниями.
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 109,
    text:
      `
        Интересовались, как лучше поступить, почему болит голова и как справиться с отеками после бурных вечеринок.
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 110,
    text:
      `
        В общем, ко мне обращались со всем, и я чувствовала себя уверенной.
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 111,
    text:
      `
        Полезной… Признанной…
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 112,
    text:
      `
        И для меня стало ударом, что здесь все не так. И я оказалась слишком наивной, слабой. Недостаточно способной учиться на «отлично».
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 113,
    text:
      `
        Внезапно мир стал туманным и нечетким. 
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    simple: require('../../../../Sounds/ISML/Ring.mp3'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 114,
    text:
      `
        Я больше не слышала, что говорила Лена. Резкий звук пронзил голову, и я, сдерживая слезы, выскочила из столовой.
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 115,
    text:
      `
        «Не могу больше».
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Canteen.jpg')
  },

  {
    id: 116,
    text:
      `
        Я неслась по пустым коридорам, стараясь убежать как можно дальше пока мысли бурлили в голове, превращаясь в запутанный комок. 
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 117,
    text:
      `
        Слезы текли по щекам.
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 118,
    text:
      `
        Спустя пару минут я отыскала укромное место.
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 119,
    text:
      `
        Сев на широкий подоконник, я обняла колени и тихо заплакала, сдерживая желание закричать.
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 120,
    text:
      `
        Я не знала, сколько прошло минут или часов, пока не услышала шаги.
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    simple: require('../../../../Sounds/ISML/Walk.mp3'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 121,
    text:
      `
        — Почему ты тут сидишь?
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 122,
    text:
      `
        — Как тебя зовут?
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 123,
    text:
      `
        Я попыталась незаметно вытереть слезы, сделав вид, будто поправляю волосы.
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 124,
    text:
      `
        Конечно, по опухшему и покрасневшему лицу мое состояние было очевидным.
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 125,
    text:
      `
        — Нина.
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 126,
    text:
      `
        — Что случилось? — мягко спросил он, аккуратно присаживаясь рядом с беспокойством на лице.
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 127,
    text:
      `
        Я попыталась что-то сказать, но слезы снова хлынули из глаз, и я лишь покачала головой.
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 128,
    text:
      `
        Александр Сергеевич, не зная, как лучше поступить, просто заговорил.
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 129,
    text:
      `
        — Я понимаю, что тебе сейчас тяжело. Иногда жизнь бросает нам неожиданные вызовы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 130,
    text:
      `
        — Хочешь расскажу тебе одну историю?
      `,
    buttons: [
      {
        text: 'Да, расскажите мне ее полностью',
        goTo: 131,
        gift: true
      },
      {
        text: 'Давайте',
        goTo: 154
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 131,
    text:
      `
        — Это была очень важная практика…
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 132,
    text:
      `
        — На этом занятии студенты должны были показать свои навыки. Это был реальный опыт работы с человеческим телом, и ошибки тут могли означать провал на экзамене и сомнения в собственной компетенции. 
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 133,
    text:
      `
        — Я понимал, что это возможность доказать свою готовность к профессии, и я не мог позволить себе облажаться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 134,
    text:
      `
        — Передо мной лежало не просто тело, а чей-то бывший мир, чьи-то воспоминания и эмоции. Человеческая жизнь столь хрупка, что одно неверное движение может стать фатальным.
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 300,
    text:
      `
        — Смирнов, подойдите, — произнес профессор, указывая на меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    speaker: 'Петр Григорьевич',
    beforeBegin: whiteFlash,
    imageFront: require('../../../../Images/ISML/Persons/PG.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Morgue.jpg')
  },

  {
    id: 135,
    text:
      `
        — Смирнов, сделайте разрез здесь.
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    speaker: 'Петр Григорьевич',
    imageFront: require('../../../../Images/ISML/Persons/PG.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Morgue.jpg')
  },

  {
    id: 136,
    text:
      `
        «Так, тише. Это всего лишь труп. Сделаю маленький надрез, надеюсь, он не заметил, что у меня дрожат руки». 
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    speaker: 'Александр Сергеевич ',
    imageFront: require('../../../../Images/ISML/Persons/AS_Young.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Morgue.jpg')
  },

  {
    id: 137,
    text:
      `
        — Все ясно, профессор.
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    speaker: 'Александр Сергеевич ',
    imageFront: require('../../../../Images/ISML/Persons/AS_Young.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Morgue.jpg')
  },

  {
    id: 138,
    text:
      `
        Я подошел ближе, взял скальпель и, пытаясь сосредоточиться, начал делать разрез. В этот момент я подумал о том, как важно каждое движение. Ведь в будущем, на настоящих операциях, от этого будет зависеть чья-то жизнь.
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    imageFront: require('../../../../Images/ISML/Objects/Scalpel.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Morgue.jpg')
  },

  {
    id: 301,
    text:
      `
        Рука предательски дернулась. Я допустил ошибку — скальпель соскользнул, и я повредил важный сосуд.
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    imageFront: require('../../../../Images/ISML/Objects/Scalpel.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Morgue.jpg')
  },

  {
    id: 139,
    text:
      `
        Я замер, осознавая, что произошло, и сердце сжалось от страха и разочарования.
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Morgue.jpg')
  },

  {
    id: 140,
    text:
      `
        Профессор моментально отреагировал, его лицо побагровело от гнева.
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Morgue.jpg')
  },

  {
    id: 141,
    text:
      `
        — Смирнов! — громкий голос эхом отозвался в тишине морга. 
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    speaker: 'Петр Григорьевич',
    imageFront: require('../../../../Images/ISML/Persons/PG.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Morgue.jpg')
  },

  {
    id: 142,
    text:
      `
        — Вы что, совершенно ничего не понимаете?! Эта ошибка могла стоить пациенту жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    speaker: 'Петр Григорьевич',
    imageFront: require('../../../../Images/ISML/Persons/PG.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Morgue.jpg')
  },

  {
    id: 143,
    text:
      `
        — Вы ничего не стоите, если не можете выполнить такую простую задачу! 
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    speaker: 'Петр Григорьевич',
    imageFront: require('../../../../Images/ISML/Persons/PG.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Morgue.jpg')
  },

  {
    id: 144,
    text:
      `
        Я чувствовал, как в груди что-то оборвалось. Хотелось провалиться сквозь землю.
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Morgue.jpg')
  },

  {
    id: 145,
    text:
      `
        После занятия я остался один, погруженный в собственные мысли. В голове крутились слова профессора, и я никак не мог избавиться от чувства вины и беспомощности.
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Morgue.jpg')
  },

  {
    id: 146,
    text:
      `
        — Эй, ты как? 
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    speaker: 'Андрей',
    imageFront: require('../../../../Images/ISML/Persons/Andrey.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Morgue.jpg')
  },

  {
    id: 147,
    text:
      `
        — Чувствую себя ужасно, профессор отчитал перед всеми, правда за дело. Я думал, что готов к этому, но, видимо, ошибался.
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    speaker: 'Александр ',
    imageFront: require('../../../../Images/ISML/Persons/AS_Young.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Morgue.jpg')
  },

  {
    id: 148,
    text:
      `
        — Слушай, ошибки делают нас сильнее, если мы учимся на них.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    speaker: 'Андрей',
    imageFront: require('../../../../Images/ISML/Persons/Andrey.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Morgue.jpg')
  },

  {
    id: 149,
    text:
      `
        — Ты переживаешь, потому что тебе не все равно, и это хорошо.
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    speaker: 'Андрей',
    imageFront: require('../../../../Images/ISML/Persons/Andrey.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Morgue.jpg')
  },

  {
    id: 302,
    text:
      `
        — Но не позволяй этой ошибке сломать тебя. Этот Петр Григорьевич настоящий черствый и злобный хрыч. Нашел из-за чего расстраиваться. А еще это был труп, а не живой человек.
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    speaker: 'Андрей',
    imageFront: require('../../../../Images/ISML/Persons/Andrey.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Morgue.jpg')
  },

  {
    id: 150,
    text:
      `
        — Да, знаю, что не живой человек. Но вдруг у меня была бы настоящая операция… что бы тогда произошло?
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    speaker: 'Александр ',
    imageFront: require('../../../../Images/ISML/Persons/AS_Young.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Morgue.jpg')
  },

  {
    id: 151,
    text:
      `
        — Но это была не она. У тебя еще будет время научиться и избежать таких ошибок.
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    speaker: 'Андрей',
    imageFront: require('../../../../Images/ISML/Persons/Andrey.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Morgue.jpg')
  },

  {
    id: 152,
    text:
      `
        Андрей улыбнулся настолько широко, насколько мог.
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Morgue.jpg')
  },

  {
    id: 153,
    text:
      `
        — Перестань переживать из-за того, чего нет и не будет. Так тебе самому врачи понадобятся.
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    message: 'Трудности сделали вас ближе ',
    speaker: 'Андрей',
    imageFront: require('../../../../Images/ISML/Persons/Andrey.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ISML, value: +1, category: 'Person', id: 'AS' }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Morgue.jpg')
  },

  {
    id: 154,
    text:
      `
        Александр Сергеевич улыбнулся, вспомнив что-то из своего прошлого.
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 155,
    text:
      `
        — Однажды, когда я был еще студентом, мне пришлось пережить большие трудности, чтобы вырасти как специалист.
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 156,
    text:
      `
        — Я был молод и очень амбициозен, думал, что все знаю и могу справиться со всем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 157,
    text:
      `
        — Но однажды, на важной практике, я сделал грубую ошибку, и профессор... Он был действительно строгим, прямо при всех сказал, что я ничего не стою.
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 158,
    text:
      `
        — Тогда мне казалось —  мир рушится. Но знаешь, что помогло? 
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 159,
    text:
      `
        — Что?  — спросила я тихим, дрожащим голосом.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 160,
    text:
      `
        — Один из моих друзей сказал: «Ошибки делают нас сильнее, если мы учимся на них». Я принял это к сердцу и начал работать еще усерднее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 161,
    text:
      `
        — Тяжелое время. Я хотел все послать.
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 162,
    text:
      `
        — Но со временем понял, что важнее не то, сколько раз ты облажался, а то, сколько раз ты смог переосмыслить это и пойти дальше.
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 163,
    text:
      `
        Его голос был мягким, успокаивающим.
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 164,
    text:
      `
        — Но как вы справились с этим чувством… бесполезности?
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 165,
    text:
      `
        — Каждый из нас проходит через свои трудности. Мы не можем быть безупречными, но можем учиться и расти. 
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 166,
    text:
      `
        — Стараться дотянуться до того идеала, стать им, каждый день совершенствоваться.
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 167,
    text:
      `
        — И становиться лучше не для кого-то, а в первую очередь для себя.
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 168,
    text:
      `
        Его слова принесли утешение, и я почувствовала, как тяжесть немного спала с плеч.
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 169,
    text:
      `
        — Спасибо… Спасибо, Александр Сергеевич. Мне действительно было нужно это услышать.
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 170,
    text:
      `
        Он улыбнулся и слегка коснулся моего плеча.
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 171,
    text:
      `
        — В любое время, Нина. Если тебе когда-нибудь понадобится поговорить, ты всегда можешь обратиться ко мне.
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 172,
    text:
      `
        Я кивнула.
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 173,
    text:
      `
        Александр Сергеевич встал, но перед тем как уйти, еще раз посмотрел на меня с теплотой в глазах.
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 174,
    text:
      `
        — А теперь давай вернемся к делам. Мир не ждет.
      `,
    buttons: [
      {
        text: 'Продолжить',
        gift: true,
        goTo: 175
      }],
    speaker: 'Александр Сергеевич',
    imageFront: require('../../../../Images/ISML/Persons/AS_Nowadays.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Corridor_Uni.jpg')
  },

  {
    id: 175,
    text:
      `
        — Как меня все бесит!
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    message: 'Вечер того же дня…',
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 176,
    text:
      `
        — Какого хрена этот жиробас Эдик ко мне прикопался вообще сегодня?
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 177,
    text:
      `
        — Придурок…
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 178,
    text:
      `
        Сидя на кровати, я сжалась, обнимая свое тело.
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 179,
    text:
      `
        «Ведь кто меня еще обнимет?»
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 180,
    text:
      `
        Злость сошла на нет, но на ее смену пришла печаль.
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 181,
    text:
      `
        Осязаемая на кончиках пальцах грусть.
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 182,
    text:
      `
        Грусть от того, как жалко я сейчас себя чувствую. 
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 183,
    text:
      `
        Грусть от того, что хочется совсем не этого.
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 184,
    text:
      `
        Душа жаждала и мечтала о том, чтобы любимый близкий человек оказался рядом.
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 185,
    text:
      `
        И хоть я ощущала любовь и поддержку на физическом уровне, но ум понимал, — это самообман.
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 186,
    text:
      `
        От подобных мыслей стало немного стыдно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 187,
    text:
      `
        «Напишу Марку».
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Items/Phone.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 188,
    text:
      `
        — Привет
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 189,
    text:
      `
        — Привет🥰
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 190,
    text:
      `
        — Прикинь! Эдик сегодня такого говна мне наговорил😞
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 191,
    text:
      `
        — Он подошел ко мне в столовой, сказал, что видел нашу с тобой фотку. Что у меня, мол, с учебой проблемы, что я тупая и тяну группу на дно😭😭😭
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 192,
    text:
      `
        — Что за Эдик?
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 193,
    text:
      `
        — Ну жирный такой, рыжий и в очках
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 194,
    text:
      `
        — Ааааааа… Не сразу понял
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 195,
    text:
      `
        — Неужели ты знаком с этим дебилом?
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 196,
    text:
      `
        — Да, знаю
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 197,
    text:
      `
        — Он мой друг. И он не дебил, довольно умный и угарный
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 198,
    text:
      `
        — Нашла из-за кого обижаться 😅
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 199,
    text:
      `
        — Но он же в открытую издевался
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 200,
    text:
      `
        — Да это просто шутка. Ты по-любому не правильно все поняла
      `,
    buttons: [
      {
        text: 'Возможно…',
        goTo: 201
      },
      {
        text: 'Ты не прав, меня обидели и разозлили',
        goTo: 216
      }],
    message: 'Сейчас вы решите, какой хотите видеть Нину. По пути лисы героиня более сдержанная, может контролировать свой гнев, а по пути льва она ведет себя более вспыльчиво, ей труднее владеть эмоциями',
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 201,
    text:
      `
        — Ладно, раз ты так говоришь, то попробую взглянуть на это с другой стороны…
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ISML, value: +1, category: 'Effect', id: 'Fox' }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 202,
    text:
      `
        — Но мне все равно было неприятно😔
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 203,
    text:
      `
        — Ты можешь сказать Эдику, чтобы он со мной так не разговаривал? 
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 204,
    text:
      `
        — Ладно, я попробую 
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 205,
    text:
      `
        — Но старайся такую фигню близко к сердцу не воспринимать)))
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 206,
    text:
      `
        — Ладно, давай. Я пошел, а то я тут с пацанами гуляю
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 207,
    text:
      `
        — Мне помогает всегда уборка кстати)
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 208,
    text:
      `
        — Мысли в порядок привести🙂‍↔️
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 209,
    text:
      `
        — Не хочу сейчас этим заниматься
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 210,
    text:
      `
        — Ну как хочешь)
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 211,
    text:
      `
        — Мое дело предложить
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 212,
    text:
      `
        — Спокойной ночи тебе заранее 😙
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 213,
    text:
      `
        «Ненавижу!»
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 214,
    text:
      `
        «Почему нельзя просто сказать: Нина, я знаю Эдика. Понимаю, он тебя обидел. Я поговорю с этим придурком, и все будет хорошо, любовь моя».
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 215,
    text:
      `
        «И что еще за дурацкая уборка?»
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 216,
    text:
      `
        — Вот сейчас ты не прав, меня обидели и разозлили
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ISML, value: +1, category: 'Effect', id: 'Lion' }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 217,
    text:
      `
        — Это не отговорка, что он умный, крутой и т.д.
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 218,
    text:
      `
        — Он перед всеми выставил меня идиоткой😠
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 219,
    text:
      `
        — И я тебе написала про это, потому что жду от тебя поддержки, а не еще одного осуждения
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 220,
    text:
      `
        — Воу, воу. Старайся такую фигню близко к сердцу не воспринимать)))
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 221,
    text:
      `
        — А то лопнешь от злости 😄
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 222,
    text:
      `
        — Ты вообще не читаешь, что я пишу? 😡
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 223,
    text:
      `
        — Я ему говорю, что меня обидели, а он про то, что нужно не так близко к сердцу воспринимать…
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 224,
    text:
      `
        — Я пойду
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 225,
    text:
      `
        — Давай, давай)
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 226,
    text:
      `
        — А я пойду дальше с пацанами гулять. Мне помогает всегда уборка кстати)
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 227,
    text:
      `
        — Мысли в порядок привести🙂‍↔️
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 228,
    text:
      `
        — Спокойной ночи тебе заранее 😙
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 229,
    text:
      `
        «Что это было вообще?»
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 230,
    text:
      `
        «Я ему слово, он мне хрень какую-то».
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 231,
    text:
      `
        «Вот и поговорили блин».
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 232,
    text:
      `
        «Ладно, пофиг».
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 233,
    text:
      `
        «Просто расслабься».
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 234,
    text:
      `
        Мысли крутились в голове, возвращая меня к сегодняшним событиям.
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 235,
    text:
      `
        Я вспоминала разговор с Александром Сергеевичем, его добрые слова.
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 236,
    text:
      `
        «Он сказал, что ошибки делают нас сильнее. Может, и правда стоит взглянуть на все это иначе?»
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 237,
    text:
      `
        Затем мысли снова переключились на Марка. Его реакция на мое сообщение оставила неприятный осадок.
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 238,
    text:
      `
        «Может, я действительно слишком восприимчива? Или он не понял, насколько мне было неприятно?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 239,
    text:
      `
        — Ладно, — тихо сказала я самой себе, — Надо просто лечь спать и отдохнуть.
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 240,
    text:
      `
        Я чувствовала себя немного легче, хотя сердце все еще было тяжелым. 
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 241,
    text:
      `
        — Только сначала переоденусь… 
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 242,
    text:
      `
        «Интересно, мне сегодня приснится что-нибудь?»
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Pajamas.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 243,
    text:
      `
        Я закрыла глаза и почти сразу заснула. Сегодняшний день забрал у меня всю энергию.
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 244,
    text:
      `
        Я оказалась…
      `,
    buttons: [
      {
        text: 'В прекрасном лесу',
        goTo: 245
      },
      {
        text: 'На берегу могучего океана',
        goTo: 252
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 245,
    text:
      `
        Меня окружал ночной лес, залитый мягким, серебристым светом луны. 
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    beforeBegin: purpleFlash,
    music: require('../../../../Sounds/ISML/Dream.mp3'),
    ambient: require('../../../../Sounds/ISML/Leaves.mp3'),
    stats: [
      { story: EStoriesEn.ISML, value: +1, category: 'Effect', id: 'Light' },
      { story: EStoriesEn.ISML, value: +1, category: 'Choice', id: 'DreamForest' }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Forest_Dream.jpg')
  },

  {
    id: 246,
    text:
      `
        Небо было усыпано бесчисленными звездами, и казалось, что они вот-вот коснутся верхушек деревьев. 
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Forest_Dream.jpg')
  },

  {
    id: 247,
    text:
      `
        Лунные лучи создавали на земле причудливые тени, которые танцевали в такт легкому ночному бризу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Forest_Dream.jpg')
  },

  {
    id: 248,
    text:
      `
        Вокруг росли величественные деревья, они тихо шелестели под дуновением ветра. 
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Forest_Dream.jpg')
  },

  {
    id: 249,
    text:
      `
        Вдали виднелась небольшая поляна, где росли светящиеся цветы, их мягкое сияние напоминало о том, что даже в самой темной ночи можно найти источник света. 
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Forest_Dream.jpg')
  },

  {
    id: 250,
    text:
      `
        В центре этой поляны стояла фигура, излучающая теплое свечение, будто вобравшая в себя всю красоту этого места.
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Forest_Dream.jpg')
  },

  {
    id: 251,
    text:
      `
        — Привет, Нина.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('ISML', 'Глава 1', 'Часть 3', '0')
        }
      }],
    speaker: 'Тень',
    imageFront: require('../../../../Images/ISML/Persons/Shadow.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    achievement: { story: EStoriesEn.ISML, name: 'Chapter01Part02Completed' },
    imageBack: require('../../../../Images/ISML/Backgrounds/Forest_Dream.jpg')
  },

  {
    id: 252,
    text:
      `
        Меня окружал пустынный берег океана, освещенный мрачным, бледным светом луны. 
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    beforeBegin: purpleFlash,
    music: require('../../../../Sounds/ISML/Dream.mp3'),
    ambient: require('../../../../Sounds/ISML/Waves.mp3'),
    stats: [
      { story: EStoriesEn.ISML, value: +1, category: 'Effect', id: 'Despair' }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Ocean_Dream.jpg')
  },

  {
    id: 253,
    text:
      `
        Небо было покрыто плотными, серыми облаками, сквозь которые с трудом пробивались редкие звезды, их тусклый свет отражался в черных водах океана. 
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Ocean_Dream.jpg')
  },

  {
    id: 254,
    text:
      `
        Волны медленно накатывались на берег, создавая ритмичный шум, который усиливал ощущение потерянности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Ocean_Dream.jpg')
  },

  {
    id: 255,
    text:
      `
        Песок под ногами был холодным и влажным, оставленные следы быстро исчезали под неумолимыми волнами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Ocean_Dream.jpg')
  },

  {
    id: 256,
    text:
      `
        В воздухе витал легкий туман, делая очертания горизонта размытыми и нечеткими. 
      `,
    buttons: [
      {
        text: '',
        goTo: 257
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Ocean_Dream.jpg')
  },

  {
    id: 257,
    text:
      `
        На берегу виднелась одинокая фигура, окруженная холодным, тусклым светом, будто вобравшая в себя все одиночество этого места.
      `,
    buttons: [
      {
        text: '',
        goTo: 258
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Ocean_Dream.jpg')
  },

  {
    id: 258,
    text:
      `
        — Привет, Нина.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('ISML', 'Глава 1', 'Часть 3', '0')
        }
      }],
    speaker: 'Тень',
    imageFront: require('../../../../Images/ISML/Persons/Shadow.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    achievement: { story: EStoriesEn.ISML, name: 'Chapter01Part02Completed' },
    imageBack: require('../../../../Images/ISML/Backgrounds/Ocean_Dream.jpg')
  }
])
