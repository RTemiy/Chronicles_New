import { saveEndProgress, scenarioManager, statsManager } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { redFlash } from '../../../../Components/Slide/Slide'

scenarioManager.addScenario({ storyName: EStoriesEn.UL, chapterName: 'Глава 1', partName: 'Часть 2', code: '0' }, [
  {
    id: 0,
    text:
      `
        Мужчины смотрели на меня, терпеливо ожидая решения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Audio/UL/Thinking.mp3'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 1,
    text:
      `
        С кем мне пойти?
      `,
    buttons: [
      {
        text: 'Дэвид проведет меня',
        goTo: 2
      },
      {
        text: 'С вами, доктор',
        goTo: 99
      }],
    speaker: 'Амелия',
    stats: [{ story: EStoriesEn.UL, value: +1, category: 'Item', id: 'Bag' }],
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 2,
    text:
      `
        Спасибо вам, доктор, но мы успели побеседовать с Дэвидом, он совершенно неопасный человек. Завтра на приеме вы сможете убедиться, что я жива и здорова.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    stats: [
      { story: EStoriesEn.UL, value: +1, category: 'Person', id: 'David' },
      { story: EStoriesEn.UL, value: +1, category: 'Choice', id: 'GoWithDavid' }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 3,
    text:
      `
        Дэвид одобрительно кивнул, немного с вызовом посмотрев на доктора. 
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 4,
    text:
      `
        Между мужчинами будто бы прошел невидимый поток искр. Враждебных искр. 
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 5,
    text:
      `
        Хорошо. Позвольте мне дать вам свой номер. На случай консультации или возможных ухудшений. Такой исход маловероятен, но лишним не будет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 6,
    text:
      `
        Меня зовут Джозеф. Не стесняйтесь звонить мне в любое время суток. И можно опустить официальный тон речи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 7,
    text:
      `
        Мужчина протянул мне на листочке номер, мы попрощались и вышли.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    stats: [
      { story: EStoriesEn.UL, value: +1, category: 'Item', id: 'HintDoctor' }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 8,
    text:
      `
        Прохлада вечернего города бодрила. Наконец-то я смогла выбраться из этих белых стен и насладиться свежим воздухом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    music: require('../../../../Audio/UL/Main.mp3'),
    ambient: require('../../../../Audio/UL/Street.mp3'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 9,
    text:
      `
        Эти улицы не стали для меня новым открытием. Где-то на задворках утерянных воспоминаний всплывали размытые фрагменты. 
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 10,
    text:
      `
        «Я видела эти места. Возможно даже кто-то показывал мне их».
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 11,
    text:
      `
        Немного придя в себя после пережитого, я решила сейчас сосредоточиться на поисках правды о себе и своем окружении. 
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 12,
    text:
      `
        «Работа и прочее подождет. В конце концов я только недавно узнала, где живу».
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 13,
    text:
      `
        Мне было приятно видеть рядом со мной шагающего Дэвида. Его походка была легкой и в какой-то степени задорной.
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 14,
    text:
      `
        И все же мне крайне неловко просить его о дальнейшей помощи, поэтому я завела разговор:
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 15,
    text:
      `
        Наверное не стоило тебе провожать меня. Ты и так потратил достаточно времени.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 16,
    text:
      `
        Ну ты чего? Мне приятно помочь.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 17,
    text:
      `
        Ты всем незнакомкам помогаешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 18,
    text:
      `
        Нет, только самым симпатичным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 19,
    text:
      `
        Я смущенно улыбнулась, скрывая пылающие щеки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 20,
    text:
      `
        Эх, совершенно тебя засмущал...
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 21,
    text:
      `
        Что? Нет! Я просто...
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 22,
    text:
      `
        Ты покраснела. Неужели никто не говорил тебе, что ты очень милая и красивая?
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 23,
    text:
      `
        Возможно. Но я не помню этого.
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 24,
    text:
      `
        Послушай, чтобы дальше не произошло — я на твоей стороне. Я уже спас тебя один раз, спасу и второй. 
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 25,
    text:
      `
        Твоя доброта трогает. Но мне даже нечем с тобой поделиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 26,
    text:
      `
        Ты и не обязана. Как истинный джентльмен я все сделал правильно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 27,
    text:
      `
        Дэвид остановился и посмотрел на меня, набираясь сил сказать следующее:
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 28,
    text:
      `
        За такую короткий срок нашего общения, ты мне очень понравилась. Особенно твое желание не сдаваться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 29,
    text:
      `
        Тебе больно. Тебе тяжело, но ты тут. Идешь к неизвестному дому, хочешь знать правду.
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 30,
    text:
      `
        Возможно, это не к месту. Но вдруг наша встреча — судьба? 
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 31,
    text:
      `
        Слова Дэвида вызывали во мне противоречия. С одной стороны, он милый парень, готовый помочь в любой момент. 
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 32,
    text:
      `
        С другой стороны, что я о нем знаю?
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 33,
    text:
      `
        Что я знаю хоть о ком-то?
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 34,
    text:
      `
        Дэвид, он...
      `,
    buttons: [
      {
        text: 'Мне нравится',
        goTo: 35
      },
      {
        text: 'Меня раздражает',
        goTo: 38
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 35,
    text:
      `
        А почему бы и нет? Он красивый, добрый, заботливый. Не каждый незнакомец будет так трепетно ухаживать за девушкой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    stats: [
      { story: EStoriesEn.UL, value: +1, category: 'Person', id: 'David' }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 36,
    text:
      `
        Он не бросил меня, когда я больше всего нуждалась в поддержке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 37,
    text:
      `
        Я хочу ему верить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 38,
    text:
      `
        Он слишком добрый для этого мира. Какой незнакомец будет говорить такое девушке, даже не зная ее? 
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    stats: [
      { story: EStoriesEn.UL, value: -1, category: 'Person', id: 'David' }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 39,
    text:
      `
        Мне сложно это принять. Но время покажет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 40,
    text:
      `
        Слова Дэвида так или иначе заставляли сердце биться быстрее. Но в голове навязчиво мелькал вопрос. 
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 41,
    text:
      `
        «Есть ли у меня парень? Но если и был, где он сейчас? Хоть немного беспокоится? Или я живу одна?»
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 42,
    text:
      `
        Я решила, что на данный момент на высказывания моего компаньона, я отвечу:
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 43,
    text:
      `
        Дэвид... Прости, но сейчас... Я не в том состоянии, чтобы обсуждать подобные темы. Я просто не могу.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 44,
    text:
      `
        Я понимаю. Это просто, мысли вслух. 
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 45,
    text:
      `
        Мы продолжили идти в умиротворяющей тишине. 
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 46,
    text:
      `
        Погруженная в свои мысли, я не заметила небольшую яму на дороге и споткнулась об нее, теряя равновесие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 47,
    text:
      `
        Сильные мужские руки вмиг обняли меня за талию, поддерживая со спины. 
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 48,
    text:
      `
        Легкая дрожь прошлась по еще неокрепшему телу, но Дэвид продолжал быть рядом, не давая упасть. Он обеспокоенно спросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 49,
    text:
      `
        Амелия, ты как? Я держу. Можешь встать?
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 50,
    text:
      `
        Я буквально повисла на нем, стараясь нащупать опору. 
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 51,
    text:
      `
        Он был близко. Слишком близко. 
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 52,
    text:
      `
        Развернув меня к себе лицом, парень постарался помочь мне устоять. 
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 53,
    text:
      `
        Да, все хорошо. Просто я слишком долго лежала в больнице. 
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 54,
    text:
      `
        Наши взгляды пересекались. 
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 55,
    text:
      `
        Его говорил о защите, желании, смятении.
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 56,
    text:
      `
        Мой больше пребывал в сомнении и раздумьях. Но был трепетный и благодарный.
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 57,
    text:
      `
        Когда опора была найдена, Дэвид отпустил меня и произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 58,
    text:
      `
        Никогда не нравилось жить здесь. Несмотря на доброе детство, душа всегда тянулась к исследованию мира. 
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 59,
    text:
      `
        Почему тогда ты этим не занимаешься?
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 60,
    text:
      `
        Потому что без меня незнакомки будут попадать в неприятности, а я должен их спасать.
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 61,
    text:
      `
        Этот парень знал, как заставить меня улыбнуться. Я игриво стукнула его кулаком в плечо и мы продолжали беседовать обо всем на свете, пока, наконец, не пришли в нужное место.
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 62,
    text:
      `
        Адрес соответствует прописке. Получается, я живу здесь.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Big_House.jpg')
  },

  {
    id: 63,
    text:
      `
        Волнуешься?
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Big_House.jpg')
  },

  {
    id: 64,
    text:
      `
        Немного. Хотя с другой стороны, не встречу же я там чего-то сверхъестественного...
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Big_House.jpg')
  },

  {
    id: 65,
    text:
      `
        Я тоже. Соли от призраков с собой не имею, к сожалению. 
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Big_House.jpg')
  },

  {
    id: 66,
    text:
      `
        Мы поднялись на одиннадцатый этаж, и достав из рюкзака ключи от квартиры, я провернула их в замочной скважине. 
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    ambient: require('../../../../Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Images/UL/Backgrounds/Big_House.jpg')
  },

  {
    id: 67,
    text:
      `
        Перед моим взглядом застыла пара: незнакомый парень и Валентина. При виде нашего с Дэвидом появления, их объятия разорвались.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    music: require('../../../../Audio/UL/Awakening.mp3'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 68,
    text:
      `
        Мужчина с волнением стал смотреть на меня, а затем поспешно подошел. 
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 69,
    text:
      `
        Амелия?! Валентина сказала, что ты в больнице... Я как раз собирался к тебе выезжать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    speaker: 'Незнакомец',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 70,
    text:
      `
        Да, Пол, она была в больнице. Не понимаю, что случилось? Почему тебя так рано выписали?
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 71,
    text:
      `
        Я не знала, что мне делать. Голова начала болеть от переизбытка ощущений. 
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 72,
    text:
      `
        Это правда, что ты ничего не помнишь? Как ты себя чувствуешь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 73,
    text:
      `
        Я смотрела на Валентину, совершенно не понимая: почему она здесь? В объятиях незнакомого человека. Почему не рядом со мной?
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 74,
    text:
      `
        Кто был этот парень, который так беспокойно смотрел на меня?
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 75,
    text:
      `
        Амелия, я Пол. Твой Пол, помнишь?
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 76,
    text:
      `
        Видя мою растерянность, Дэвид решил поддержать меня легким прикосновением за руку. Он спросил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 77,
    text:
      `
        Амелия? Ты узнаешь его?
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 78,
    text:
      `
        Нет... Я не понимаю. Мой Пол? 
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 79,
    text:
      `
        Да! Мы любим друг друга, дорогая. Уже как полгода. 
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 80,
    text:
      `
        Эти смешанные эмоции давили на меня все больше и больше. Что мне ответить? О какой любви может идти речь, если я вижу его перед собой первый раз?
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 81,
    text:
      `
        Вам не стоит так давить на нее. Это может негативно сказаться на здоровье.
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 82,
    text:
      `
        Кто вы, собственно?
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 83,
    text:
      `
        Пол с некой злобой смотрел на Дэвида.
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 84,
    text:
      `
        Если вы какой-нибудь таксист, я заплачу. Уходите, это не ваше дело.
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 85,
    text:
      `
        Дэвид кинул презрительный взгляд сначала на Пола, а затем и на Валентину, которая продолжала спокойно сидеть, хмуря лицо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 86,
    text:
      `
        Он без эмоций проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 87,
    text:
      `
        Я спас Амелию. Был с ней все это время, пока ты тут заигрываешь с ее подругой. Я никуда не уйду, пока она сама этого не захочет.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 88,
    text:
      `
        Да что ты...
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 89,
    text:
      `
        Каждый пытался донести свою правду, и в один момент гул голосов стал невыносимым. 
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 90,
    text:
      `
        ЗАМОЛЧИТЕ ВСЕ!
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 91,
    text:
      `
        Никто не посмел больше ничего сказать. Наконец-то наступила тишина, которая дала мне время собраться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 92,
    text:
      `
        Дэвид никуда не уйдет. Давайте спокойно пройдем внутрь и поговорим. 
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 93,
    text:
      `
        Мы сняли верхнюю одежду и прошли в гостиную. 
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 94,
    text:
      `
        Осматривая комнату, я осознала, что это место не вызывает никаких ассоциаций. В голове была пустота. Ни одной положительной эмоции. 
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 95,
    text:
      `
        Пустой взгляд блуждал по помещению, которое я когда-то называла своим домом.
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 96,
    text:
      `
        Валентина встала со своего места и учтиво предложила:
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 97,
    text:
      `
        Сделаю всем чая. Надеюсь, вы не против. 
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 98,
    text:
      `
        Пока она хозяйничала на кухне, к ней решил присоединиться Дэвид, видимо, чтобы дать нам с Полом время.
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 99,
    text:
      `
        Нам все равно по пути. А ты, Дэвид и так для меня много сделал.
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 100,
    text:
      `
        Спасибо тебе большое. Если бы не твоя помощь, я не знаю, что со мной было бы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 101,
    text:
      `
        Не нужно благодарностей. Давай я дам тебе свой номер на всякий случай. Не стесняйся звонить в любое время. 
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 102,
    text:
      `
        Парень протянул мне свой номер на бумажке. Мы попрощались с Дэвидом и вышли с доктором на улицу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    stats: [
      { story: EStoriesEn.UL, value: +1, category: 'Item', id: 'HintDavid' }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 103,
    text:
      `
        Прохлада вечернего города бодрила. Наконец-то я смогла выбраться из этих белых стен и насладиться свежим воздухом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    music: require('../../../../Audio/UL/Main.mp3'),
    ambient: require('../../../../Audio/UL/Street.mp3'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 104,
    text:
      `
        Эти улицы не стали для меня новым открытием. Где-то на задворках утерянных воспоминаний всплывали размытые фрагменты. 
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 105,
    text:
      `
        «Я видела эти места. Возможно даже кто-то показывал мне их».
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 106,
    text:
      `
        Немного придя в себя после пережитого, я решила сейчас сосредоточиться на поисках правды о себе и своем окружении. 
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 107,
    text:
      `
        «Работа и прочее подождет. В конце концов я только недавно узнала, где живу».
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 108,
    text:
      `
        Доктор шел рядом со мной, периодически обеспокоенно поглядывая. 
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 109,
    text:
      `
        Вероятно заметив мой растерянный взгляд на окружение, он спросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 110,
    text:
      `
        Вы что-нибудь вспоминаете? 
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 111,
    text:
      `
        Нет. Но я чувствую, что была тут ранее. Это трудно объяснить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 112,
    text:
      `
        В этом нет ничего странного. Вы видите, как вам кажется, новые объекты, но мозг все равно будет пытаться выдавать ассоциации из прошлого. 
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 113,
    text:
      `
        Также допустимо появление отдельных фрагментов. Если воспоминание сильное: ваше любимое место, место, которое вы часто посещали. 
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 114,
    text:
      `
        Вы увидите картинку будто бы наяву. Это может быть болезненно, но совершенно не опасно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 115,
    text:
      `
        Получается, когда я войду в свою квартиру, я точно что-нибудь вспомню?
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 116,
    text:
      `
        Не факт. Ключом к воспоминаниям может быть все что угодно: сказанная фраза, запах, прикосновение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 117,
    text:
      `
        Здесь нет точной формулы. Поэтому самой правильной рекомендацией было бы спокойно жить, постепенно узнавая о своем окружении. 
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 118,
    text:
      `
        Надеюсь, что этот кошмар скоро закончится. 
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 119,
    text:
      `
        Не волнуйтесь. Вместе с процедурами и вашим стремлением — все обязательно получится. 
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 120,
    text:
      `
        Его оптимизм внушал доверие. Разумеется, это была его работа. Но он точно не обязан так далеко заходить и провожать пациентку до дома. 
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 121,
    text:
      `
        Мой любопытный взгляд осматривал доктора с ног до головы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 122,
    text:
      `
        Мужчина выглядел серьезным, собранным. Вероятно, в такой профессии не место лишним эмоциям и врач это показывал всем своим видом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 123,
    text:
      `
        Задумавшись обо всем этом, я невольно произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 124,
    text:
      `
        Тяжелая у вас работа. 
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 125,
    text:
      `
        Может быть. Но это дело привычки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 126,
    text:
      `
        Доктора, казалось, совершенно не смутило мое высказывание. Он продолжил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 127,
    text:
      `
        Это нелегкий путь. Но и в этом есть нечто очаровательное. 
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 128,
    text:
      `
        Но и много ответственности. Когда осознаешь, что каждая минута на счету, и любое промедление может стоить жизни пациенту. А в итоге... 
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 129,
    text:
      `
        В итоге...? 
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 130,
    text:
      `
        Он смотрел на меня с интересом. Его усталое, немного морщинистое лицо, ухмылялось. Доктор словно испытывал меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 131,
    text:
      `
        Довольный взгляд ребенка, слезы счастья родителей, родственников, мольбы семьи, надежда родных — все это и дает силы двигаться дальше.
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 132,
    text:
      `
        И почему-то мне неловко, что вы сейчас здесь. Что вы тратили время на меня, а не на кого-нибудь, кому действительно нужна помощь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 133,
    text:
      `
        Доктор остановился. Он легонько дотронулся до моего локтя, разворачивая меня к себе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 134,
    text:
      `
        Мы стояли лицом к лицу. Он тепло улыбался, проговаривая:
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 135,
    text:
      `
        Я же сам предложил вас провести, Амелия. Вы мой пациент, и ваше здоровье — моя ответственность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 136,
    text:
      `
        Не принижайте себя. Ваше здоровье не менее важно, как и здоровье любого больного. 
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 137,
    text:
      `
        Он был искренен. Был чуток и внимателен. И все же, набравшись смелости я уточнила: 
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 138,
    text:
      `
        Вы за всеми своими пациентами там трепетно ухаживаете, доктор?
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 139,
    text:
      `
        Всего на миг, но я уловила легкое смущение, скользнувшее по его лицу. Не разнимая наших взглядов, он произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 140,
    text:
      `
        Я — Джозеф. И нет, не все пациенты получают от меня столько внимания, если честно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    stats: [
      { story: EStoriesEn.UL, value: +1, category: 'Person', id: 'Doctor' }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 141,
    text:
      `
        Что-то в груди затрепетало. Его мудрость, его взрослое обаяние откликались в моем сердце теплыми чувствами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 142,
    text:
      `
        И я думаю, мы можем опустить формальности и не общаться в деловом тоне. Как считаете? 
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 143,
    text:
      `
        Да... Приятно познакомиться, Джозеф! 
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 144,
    text:
      `
        Мы засмеялись и продолжили путь к моему дому. На удивление с Джозефом мы легко нашли общий язык. 
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 145,
    text:
      `
        Я могла поинтересоваться, почему он стал врачом, но, возможно, ответ на него будет слишком личным, или не переходить черту?
      `,
    buttons: [
      {
        text: 'Почему ты выбрал эту профессию?',
        goTo: 146
      },
      {
        text: 'Как тебе жизнь в городе?',
        goTo: 172
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 146,
    text:
      `
        Решение принималось на основе множества факторов. Не знаю даже с чего начать... 
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 147,
    text:
      `
        Что-нибудь самое значимое. Событие, после которого вы дали себе однозначный ответ.
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 148,
    text:
      `
        Ты. 
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 149,
    text:
      `
        Я вопросительно на него посмотрела. 
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 150,
    text:
      `
        Мы вроде ранее договорились не использовать формальности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 151,
    text:
      `
        Прост... Извини! Немного сложно привыкнуть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 152,
    text:
      `
        Я не такой уж и старый.
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 153,
    text:
      `
        Не в этом дело...
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 154,
    text:
      `
        Я отвернулась, не желая, чтобы он видел лишние эмоции. 
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 155,
    text:
      `
        Так что там с ответом на мой вопрос. 
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 156,
    text:
      `
        Джозеф улыбнулся. Несмотря на его отзывчивость, мне казалось, что я видела печаль в его глазах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 157,
    text:
      `
        Не ждите уникальной истории. Мой близкий человек тяжело болел. Я хотел сделать все, чтобы ей помочь. Пожалуй, это и повлияло на мое решение.
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 158,
    text:
      `
        И вы помогли?
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 159,
    text:
      `
        Нет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 160,
    text:
      `
        Гнетущая тишина обрушилась на нас, словно ураган. Я тотчас пожалела о заданном вопросе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 161,
    text:
      `
        Это была чересчур личная тема и границы были нарушены. 
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 162,
    text:
      `
        Не хмурься. А то быстрее станешь такой, как я. 
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 163,
    text:
      `
        Но Джозеф не выглядел расстроенным. Возможно в какой-то степени он был рад открыться и поделиться болью. 
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 164,
    text:
      `
        Когда тебе есть что терять, жизнь обретает смысл, верно?
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 165,
    text:
      `
        Я будто бы снова вернулась в процедурный кабинет. Его слова тогда и сейчас. Они имели одинаковый смысл. 
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 166,
    text:
      `
        Что бы ни случилось, уверена, ты сделал все, что в твоих силах.
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 167,
    text:
      `
        Безусловно. Но я никогда не смирюсь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 168,
    text:
      `
        Его категоричность немного пугала. Я боялась дальше продолжать этот разговор, ведь мы только-только стали лучше понимать друг друга. 
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 169,
    text:
      `
        Но Джозеф, видимо чувствуя мою неловкость, взял меня за руку и сказал: 
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 170,
    text:
      `
        Все хорошо, Амелия. Не надо за меня печалиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 171,
    text:
      `
        Я сжала его руку в ответ. Меньшее, что мне сейчас хотелось — это видеть тоску на его лице. 
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    stats: [
      { story: EStoriesEn.UL, value: +1, category: 'Person', id: 'Doctor' }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 172,
    text:
      `
        Сумбурно. Я не любитель быстрого темпа жизни. Предпочитаю уединение в своем загородном доме. 
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 173,
    text:
      `
        А по тебе и не скажешь...
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 174,
    text:
      `
        Почему же?
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 175,
    text:
      `
        Просто внутренние ощущения. Смотришь на тебя и прямо видишь задумчивую фигуру, гуляющую по площади в окружение множества людей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 176,
    text:
      `
        А ты, значит, романтичная натура? 
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 177,
    text:
      `
        Просто ассоциации... А в том доме у вас есть сад? 
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 178,
    text:
      `
        Я не очень этим горжусь, но да. Только вот садовод из меня не очень. Все, к чему я прикасаюсь, вскоре умирает. 
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 179,
    text:
      `
        Все настолько плохо?
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 180,
    text:
      `
        Да! К примеру, недавно матушка привезла какие-то редкие розы. Следуя инструкции, я посадил их в специально отведенное место, все делал правильно...
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 181,
    text:
      `
        Но они завяли спустя месяц, даже не распустившись. 
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 182,
    text:
      `
        Жаль меня не было рядом. Уверена, я бы не допустила этого.
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 183,
    text:
      `
        Не знаю с чего я взяла это, но почему-то была уверена в своих словах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 184,
    text:
      `
        Джозеф игриво посмотрел на меня и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 185,
    text:
      `
        Вот оно как... Чем не повод для приглашения?
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 186,
    text:
      `
        Я смутилась, оставляя его вопрос без ответа. 
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Night.jpg')
  },

  {
    id: 188,
    text:
      `
        Вскоре показался многоэтажный дом, который по словам Джозефа нам и был нужен. 
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Big_House.jpg')
  },

  {
    id: 189,
    text:
      `
        Адрес соответствует прописке. Получается, я живу здесь.
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Big_House.jpg')
  },

  {
    id: 190,
    text:
      `
        Давай поднимемся. Нужно точно убедиться. Мало ли ключи от съемной квартиры? 
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Big_House.jpg')
  },

  {
    id: 191,
    text:
      `
        Мы поднялись на одиннадцатый этаж, и достав из рюкзака ключи от квартиры, я провернула их в замочной скважине. 
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    ambient: require('../../../../Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Images/UL/Backgrounds/Big_House.jpg')
  },

  {
    id: 192,
    text:
      `
        Перед моим взглядом застыла пара: незнакомый парень и Валентина. При виде нашего с Джозефом появления, их объятия разорвались.
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    music: require('../../../../Audio/UL/Awakening.mp3'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 193,
    text:
      `
        Мужчина с волнением стал смотреть на меня, а затем поспешно подошел. 
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 194,
    text:
      `
        Амелия?! Валентина сказала, что ты в больнице... Я как раз собирался к тебе выезжать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    speaker: 'Незнакомец',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 195,
    text:
      `
        Да, Пол, она была в больнице. Не понимаю, что случилось? Почему тебя так рано выписали?
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 196,
    text:
      `
        Я не знала, что мне делать. Голова начала болеть от переизбытка ощущений. 
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 197,
    text:
      `
        Это правда, что ты ничего не помнишь? Как ты себя чувствуешь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 198,
    text:
      `
        Я смотрела на Валентину, совершенно не понимая: почему она здесь? В объятиях незнакомого человека. Почему не рядом со мной?
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 199,
    text:
      `
        Кто был этот парень, который так беспокойно смотрел на меня?
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 200,
    text:
      `
        Амелия, я Пол. Твой Пол, помнишь?
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 201,
    text:
      `
        Видя мою растерянность, Джозеф решил поддержать меня легким прикосновением за руку. Он спросил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 202,
    text:
      `
        Амелия? Ты узнаешь этого молодого человека?
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 203,
    text:
      `
        Нет... Я не понимаю. Мой Пол? 
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 204,
    text:
      `
        Да! Мы любим друг друга, дорогая. Уже как полгода. 
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 205,
    text:
      `
        Эти смешанные эмоции давили на меня все больше и больше. Что мне ответить? О какой любви может идти речь, если я вижу его перед собой первый раз?
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 206,
    text:
      `
        Пол, верно? Не стоит так резко заявлять подобные высказывания. Это может негативно сказаться на здоровье Амелии. 
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 207,
    text:
      `
        Кто вы, собственно?
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 208,
    text:
      `
        Пол с некой злобой смотрел на Джозефа.
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 209,
    text:
      `
        Если вы какой-нибудь таксист, я заплачу. Уходите, это не ваше дело.
      `,
    buttons: [
      {
        text: '',
        goTo: 511
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 511,
    text:
      `
        Доктор равнодушно смотрел на Пола, а затем спокойно произнес: 
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 210,
    text:
      `
        Я лечащий врач Амелии. Ее состояние — причина, по которой я здесь.  И никуда не собираюсь уходить, пока не удостоверюсь, что здесь ей ничего не угрожает. 
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 211,
    text:
      `
        Да что ты...
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 212,
    text:
      `
        Каждый пытался донести свою правду, и в один момент гул голосов стал невыносимым. 
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 213,
    text:
      `
        ЗАМОЛЧИТЕ ВСЕ!
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 214,
    text:
      `
        Никто не посмел больше ничего сказать. Наконец-то наступила тишина, которая дала мне время собраться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 215,
    text:
      `
        Джозеф никуда не уйдет. Давайте спокойно пройдем внутрь и поговорим. 
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 216,
    text:
      `
        Мы сняли верхнюю одежду и прошли в гостиную. 
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 217,
    text:
      `
        Осматривая комнату, я осознала, что это место не вызывает никаких ассоциаций. В голове была пустота. Ни одной положительной эмоции. 
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 218,
    text:
      `
        Пустой взгляд блуждал по помещению, которое я когда-то называла своим домом.
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 219,
    text:
      `
        Валентина встала со своего места и учтиво предложила:
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 220,
    text:
      `
        Сделаю всем чая. Надеюсь, вы не против. 
      `,
    buttons: [
      {
        text: '',
        goTo: 510
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 510,
    text:
      `
        Пока она хозяйничала на кухне, к ней решил присоединиться Джозеф, видимо, чтобы дать нам с Полом время.
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 221,
    text:
      `
        Амелия, мне сложно представить, как ты себя сейчас чувствуешь, но я никогда не желал тебе зла. Смотри... 
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    stats: [{ story: EStoriesEn.UL, value: 0, category: 'Person', id: 'Paul' }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 222,
    text:
      `
        Он указал на висящие фотографии на стене. 
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 223,
    text:
      `
        Это ты и я в Англии. Ты всегда хотела побывать там, и я исполнил твою мечту. Я долго уговаривал тебя сделать хоть один совместный снимок, ведь ты совершенно не любишь это дело. 
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 224,
    text:
      `
        Я провела рукой по немного пыльным изображениям. 
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 225,
    text:
      `
        Мы были счастливы?
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 226,
    text:
      `
        Мы и сейчас счастливы, милая. 
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 227,
    text:
      `
        Я позволила ему коснуться меня. Он потянул нас на диван и когда мы сели, он взял мои руки в свои, говоря:
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 228,
    text:
      `
        А еще мы часто любим выбираться в различные рестораны и кафе. Больше всего ты любишь пиццу. Едим ее чуть ли не каждые выходные. 
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 229,
    text:
      `
        Ты очень ответственный человек. Я всегда поражался тому, как ты совмещаешь в жизни все: и работу, и развлечения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 230,
    text:
      `
        Эта квартира — ты выбрала ее. Именно ты хотела жить высоко, недосягаемо. Смотреть на ночное небо в прекрасное панорамное окно.
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 231,
    text:
      `
        А я всегда боялся высоты. Но не подавал виду. Когда я увидел, как горели твои глаза, то не хотел погасить этот огонь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 232,
    text:
      `
        Ты научила меня смеяться, научила обращать внимание на обычные вещи. И с твоей любовью все обычное становится самым редким, самым прекрасным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 233,
    text:
      `
        Мне больно осознавать, что ты забыла все то прекрасное, что мы пережили. Но я поделюсь с тобой каждым мгновением, распишу его в мельчайших подробностях, лишь бы ты не покинула меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 234,
    text:
      `
        Он заботливо проводил пальцами по моему запястью, ожидая моего ответа. 
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 235,
    text:
      `
        Мне не хотелось врать. Врать ему, врать самой себе. И я решила поделиться своими переживаниями: 
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 236,
    text:
      `
        Я не хочу делать тебе больно. Никому. 
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 237,
    text:
      `
        Но твои слова, твои истории... Я не могу принять этого. Я не чувствую, что все рассказанное относится ко мне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 238,
    text:
      `
        Пол изменился в лице. Казалось, его надежда медленно угасала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 239,
    text:
      `
        Как я могу подбодрить его?
      `,
    buttons: [
      {
        text: 'Обнять Пола',
        goTo: 240
      },
      {
        text: 'Сказать, что все будет хорошо',
        goTo: 250
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 240,
    text:
      `
        Сама не понимая почему, но я осмелилась обнять его.
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    stats: [
      { story: EStoriesEn.UL, value: +1, category: 'Person', id: 'Paul' }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 241,
    text:
      `
        Положив его голову к себе на плечо, мне казалось, что это действие было верным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 242,
    text:
      `
        Пол обвил мою талию, крепко прижимая к себе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 550
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 550,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Images/UL/CutScenes/AmeliaAndPaul.mp4'), goTo: 243 },
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 243,
    text:
      `
        Я чувствовала его. Его запах. Прерывистое дыхание, которое касалось моей шеи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 244,
    text:
      `
        Мы были едины. Всего на миг, но принадлежали только друг другу, забыв о проблемах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 245,
    text:
      `
        Амелия... 
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 246,
    text:
      `
        Он зарылся носом в мои непослушные волосы, вдыхая меня, заставляя таять под его прикосновениями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 247,
    text:
      `
        Я не могу потерять тебя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 248,
    text:
      `
        Все будет хорошо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 249,
    text:
      `
        Мы разомкнули объятия, пребывая в легкой эйфории. 
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 250,
    text:
      `
        Пол, мы оказались в непростой ситуации. Но это не повод опускать руки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 251,
    text:
      `
        Парень на миг оживился, всматриваясь в мое лицо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 252,
    text:
      `
        Я хочу в это верить. Просто все так запутанно. Передо мной сидит моя Амелия, которая смотрит на меня пустым взглядом... 
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 253,
    text:
      `
        Это ты. Но одновременно совершенно другой человек. 
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 254,
    text:
      `
        Понимаю. Я здесь и никуда не ухожу. Мы во всем разберемся. Просто нужно время. 
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 256,
    text:
      `
        Несмотря на приятную беседу с Полом, один вопрос все же не давал мне покоя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 257
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 257,
    text:
      `
        Я покосилась на Валентину, которая о чем-то воодушевленно рассказывала моему спутнику. 
      `,
    buttons: [
      {
        text: '',
        goTo: 258
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 258,
    text:
      `
        Она выглядела совершенно обычно. Возможно даже чересчур веселой.
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 259,
    text:
      `
        Пол, скажи. Почему ты обнимал Валентину, когда мы вошли в квартиру? 
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 260,
    text:
      `
        Это не... Амелия, она твоя подруга, которая сильно переживала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 261,
    text:
      `
        Вы близки?
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 262,
    text:
      `
        Послушай, твои опасения напрасны. Мы все очень хорошие друзья. 
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 263,
    text:
      `
        Я резко схватилась за виски. Невыносимая боль буквально парализовала меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    beforeBegin: redFlash,
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 264,
    text:
      `
        На миг мне показалось, что я увидела трех человек, мило беседующих в кафе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Memory.jpg')
  },

  {
    id: 265,
    text:
      `
        Они беззаботно проводили время. Улыбались, разговаривали о пустом, поедая аппетитный пирог.
      `,
    buttons: [
      {
        text: '',
        goTo: 266
      }],
    simple: require('../../../../Audio/UL/Laugh.mp3'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Memory.jpg')
  },

  {
    id: 266,
    text:
      `
        Парень положил руку на колени одной из девушек и игриво поглаживал их, любуясь ее реакцией. 
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Memory.jpg')
  },

  {
    id: 267,
    text:
      `
        Она не смущалась. Принимала это как должное. Отвечала на прикосновения, даже решаясь на более смелые движения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Memory.jpg')
  },

  {
    id: 268,
    text:
      `
        Амелия, ты слышишь? Все в порядке? Вызвать скорую?
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 269,
    text:
      `
        Нет. Хорошо. Со мной все хорошо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 270,
    text:
      `
        Пол недоверчиво посмотрел на меня, но возражать не стал. Мягким голосом он проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 271,
    text:
      `
        Я с тобой, милая. Завтра же поедем в больницу вместе, и обеспечим тебе должный уход. Ты все вспомнишь и мы продолжим жить, как раньше.
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 272,
    text:
      `
        А на шесть вечера я забронирую столик в твоем любимом ресторане. Пусть мы сейчас никто друг другу, но это наш шанс начать все сначала, с чистого листа.
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 273,
    text:
      `
        Я ничего не ответила, так как искренне боялась думать о завтрашнем дне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 274,
    text:
      `
        Но Пол не настаивал. Вместо этого он встал с дивана, посмотрел на гостей и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 275
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 275,
    text:
      `
        Им пора уходить. Нам нужно побыть вдвоем, а тебе хорошенько отдохнуть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 276
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 276,
    text:
      `
        Я чувствовала себя на распутье, и не знала, как правильно поступить, поэтому в смятении проследовала за ним на кухню. 
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 277,
    text:
      `
        Моей девушке необходим покой. Уходите. 
      `,
    buttons: [
      {
        text: '',
        goTo: 278
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 278,
    text:
      `
        Валентина стала с ужасом смотреть то на меня, то на Пола. Ее руки немного затряслись и волнительным тоном она произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 279,
    text:
      `
        Нет, я не оставлю ее. Я ее близкая подруга. Она ничего не помнит, а ты для нее сейчас — незнакомец. Оставаться с тобой для нее — стресс. 
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 280,
    text: '',
    buttons: [
      {
        text: ''
      }],
    condition: [{
      condition: () => {
        return statsManager.get({ story: EStoriesEn.UL, category: 'Choice', id: 'GoWithDavid' }) >= 1
      },
      goTo: 281
    },
    {
      condition: () => {
        return statsManager.get({ story: EStoriesEn.UL, category: 'Choice', id: 'GoWithDavid' }) <= 0
      },
      goTo: 306
    }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 281,
    text:
      `
        Я не знаю, что у вас происходит, но ты, Амелия, прекрасно видела, что здесь было. Боюсь представить, что произошло бы, не появись мы здесь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 282
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 282,
    text:
      `
        А не пойти ли тебе отсюда? Ты лезешь не в свое дело, не представляя ничего о наших взаимоотношениях. 
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 283,
    text:
      `
        Я только успокоила Пола, ведь случившееся с тобой — удар для всех нас. И хоть ты не помнишь, но мы частенько проводили время втроем, и для нас это — нормально.
      `,
    buttons: [
      {
        text: '',
        goTo: 284
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 284,
    text:
      `
         И кому ты поверишь? Незнакомцу?
      `,
    buttons: [
      {
        text: '',
        goTo: 285
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 285,
    text:
      `
        Что-то вы не особо торопились в больницу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 286
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 286,
    text:
      `
        Отрицать слова Дэвида я не могла. Как бы мне не хотелось верить этим людям, но возникало слишком много вопросов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 287
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 287,
    text:
      `
        И кто был ключом к тому, как же мне разобраться?
      `,
    buttons: [
      {
        text: '',
        goTo: 288
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 288,
    text:
      `
        Ответ пришел сам собой:
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 289,
    text:
      `
        Вы все можете идти. Валентина, а ты останься. Я уверена, нам есть о чем поговорить.
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 290,
    text:
      `
        Она удивилась, но затем расплылась в ехидной улыбке.
      `,
    buttons: [
      {
        text: '',
        goTo: 291
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 291,
    text:
      `
        Амелия выразилась отчетливо. Вы все можете идти.
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 292,
    text:
      `
        Дорогая... Я очень переживаю за тебя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 293,
    text:
      `
        Дэвид отрицательно покачал головой. Он выглядел взволнованным и обратился к Валентине: 
      `,
    buttons: [
      {
        text: '',
        goTo: 294
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 294,
    text:
      `
        Ты уже бросила ее, и отправилась якобы на работу. Мне твои мотивы неясны.
      `,
    buttons: [
      {
        text: '',
        goTo: 295
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 295,
    text:
      `
         Зато мне ваши ясны. Оставила вас ненадолго, а вы уже роман завели?
      `,
    buttons: [
      {
        text: '',
        goTo: 296
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 296,
    text:
      `
        Я совершенно не понимала обвинения со стороны подруги. Вместо поддержки я то и дело ощущала себя уязвимой перед ней.
      `,
    buttons: [
      {
        text: '',
        goTo: 297
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 297,
    text:
      `
        Что ты такое говоришь?
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 298,
    text:
      `
        На лице Пола отражался гнев и недовольство. Слова Валентины полностью вывели его из равновесия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 299
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 299,
    text:
      `
        Заявляешься в наш дом, строишь из себя непонятного спасителя. Решил воспользоваться тем, что у нее нет памяти?
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 300,
    text:
      `
        Больше не в силах терпеть этот шум, перерастающий в крики, я произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 301,
    text:
      `
        Пожалуйста! Оставьте меня наедине с Валентиной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 302,
    text:
      `
        Нехотя, но парни согласились с моим решением. Напоследок Дэвид сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 303
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 303,
    text:
      `
        Я оставлю тебе свой номер. Можешь звонить в любое время. До встречи, Амелия.
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    stats: [
      { story: EStoriesEn.UL, value: +1, category: 'Item', id: 'HintDavid' }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 304,
    text:
      `
        Пол никак не стал комментировать этот жест. Когда Дэвид вышел из квартиры, он лишь напомнил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 305
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 305,
    text:
      `
        Я буду рядом. Подожду тебя внизу в кафе. Не страшно, если ты не придешь. Просто знай, что я не хочу так легко расставаться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 332
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 306,
    text:
      `
        Мне неизвестно, что между вами всеми происходит, но я не могу оставить Амелию одну. Все, что вы делаете — это создаете для нее стресс. 
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    speaker: 'Джозеф ',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Indoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 307,
    text:
      `
        А не пойти ли тебе отсюда? Ты лезешь не в свое дело, не представляя ничего о наших взаимоотношениях. 
      `,
    buttons: [
      {
        text: '',
        goTo: 308
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 308,
    text:
      `
        Я только успокоила Пола, ведь случившееся с тобой — удар для всех нас. И хоть ты не помнишь, но мы частенько проводили время втроем, и для нас это — нормально.
      `,
    buttons: [
      {
        text: '',
        goTo: 309
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 309,
    text:
      `
         И кому ты поверишь? Незнакомцу?
      `,
    buttons: [
      {
        text: '',
        goTo: 310
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 310,
    text:
      `
        Прежде всего я — врач. И если мои действия оправданы, то к вашим есть ряд вопросов. Никто из вас почему-то не торопился в больницу.
      `,
    buttons: [
      {
        text: '',
        goTo: 311
      }],
    speaker: 'Джозеф ',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Indoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 311,
    text:
      `
        Отрицать слова Джозефа я не могла. Как бы мне не хотелось верить этим людям, но возникало слишком много вопросов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 312
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 312,
    text:
      `
        И кто был ключом к тому, как же мне разобраться?
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 313,
    text:
      `
        Ответ пришел сам собой:
      `,
    buttons: [
      {
        text: '',
        goTo: 314
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 314,
    text:
      `
        Вы все можете идти. Валентина, а ты останься. Я уверена, нам есть о чем поговорить.
      `,
    buttons: [
      {
        text: '',
        goTo: 315
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 315,
    text:
      `
        Она удивилась, но затем расплылась в ехидной улыбке.
      `,
    buttons: [
      {
        text: '',
        goTo: 316
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 316,
    text:
      `
        Амелия выразилась отчетливо. Вы все можете идти.
      `,
    buttons: [
      {
        text: '',
        goTo: 317
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 317,
    text:
      `
        Дорогая... Я очень переживаю за тебя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 318
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 318,
    text:
      `
        Джозеф отрицательно покачал головой. Он выглядел взволнованным и обратился к Валентине: 
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 319,
    text:
      `
        Мне не нравится, что пациентка будет испытывать с вами сильное  напряжение. В ее ситуации это нежелательно. А ваши мотивы, девушка, мне не ясны.
      `,
    buttons: [
      {
        text: '',
        goTo: 320
      }],
    speaker: 'Джозеф ',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Indoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 320,
    text:
      `
        Зато мне ваши ясны. Оставила вас ненадолго, а вы уже роман завели? С пациенткой? Да вас работы лишат за это!
      `,
    buttons: [
      {
        text: '',
        goTo: 321
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 321,
    text:
      `
        Я совершенно не понимала обвинения со стороны подруги. Вместо поддержки я то и дело ощущала себя уязвимой перед ней.
      `,
    buttons: [
      {
        text: '',
        goTo: 322
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 322,
    text:
      `
        Что ты такое говоришь?
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 323,
    text:
      `
        На лице Пола отражался гнев и недовольство. Слова Валентины полностью вывели его из равновесия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 324
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 324,
    text:
      `
        Заявляешься в наш дом, строишь из себя непонятного доктора. Решил воспользоваться тем, что у нее нет памяти?
      `,
    buttons: [
      {
        text: '',
        goTo: 325
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 325,
    text:
      `
        Больше не в силах терпеть этот шум, перерастающий в крики, я произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 326
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 326,
    text:
      `
        Пожалуйста! Оставьте меня наедине с Валентиной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 327,
    text:
      `
        Нехотя, но парни согласились с моим решением. Напоследок Джозеф сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 328,
    text:
      `
        Я оставлю тебе свой номер. Можешь звонить в любое время. До завтрашнего приема, Амелия.
      `,
    buttons: [
      {
        text: '',
        goTo: 329
      }],
    speaker: 'Джозеф ',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Indoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    stats: [
      { story: EStoriesEn.UL, value: +1, category: 'Item', id: 'HintDoctor' }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 329,
    text:
      `
        Пол никак не стал комментировать этот жест. Когда Джозеф вышел из квартиры, он лишь напомнил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 330
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 330,
    text:
      `
        Я буду рядом. Подожду тебя внизу в кафе. Не страшно, если ты не придешь. Просто знай, что я не хочу так легко расставаться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 332
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 332,
    text:
      `
        Когда он вышел, настало время интересующих меня вопросов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 333
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 333,
    text:
      `
        Ты знала, что я в отношениях и не сказала? Почему?
      `,
    buttons: [
      {
        text: '',
        goTo: 334
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 334,
    text:
      `
        Ты потеряла память, я распереживалась, я же тоже не железная, испугалась, что ты...
      `,
    buttons: [
      {
        text: '',
        goTo: 335
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 335,
    text:
      `
        По ее щекам стали литься слезы.
      `,
    buttons: [
      {
        text: '',
        goTo: 336
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 336,
    text:
      `
        Нет. Ее слезы были фальшью. Она открыто мне врала, пользуясь ситуацией? Или я ошибалась?
      `,
    buttons: [
      {
        text: '',
        goTo: 337
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 337,
    text:
      `
        Почему ты оставила меня одну?
      `,
    buttons: [
      {
        text: '',
        goTo: 338
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 338,
    text:
      `
        Мой руководитель позвонил мне и сказал, что надо незамедлительно явиться в офис и согласовать правки. Потом я поехала к Полу и сообщила о происшествии. 
      `,
    buttons: [
      {
        text: '',
        goTo: 339
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 339,
    text:
      `
        Не могла позвонить? Телефон же...
      `,
    buttons: [
      {
        text: '',
        goTo: 340
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 340,
    text:
      `
        И только сейчас я осознала, что в рюкзаке не было моего мобильного телефона. 
      `,
    buttons: [
      {
        text: '',
        goTo: 341
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 341,
    text:
      `
        Подожди. Мобильник. Когда я очнулась какой-то телефон лежал на тумбочке. И ты забрала его. 
      `,
    buttons: [
      {
        text: '',
        goTo: 342
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 342,
    text:
      `
        Глаза Валентины лихорадочно забегали по помещению. 
      `,
    buttons: [
      {
        text: '',
        goTo: 343
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 343,
    text:
      `
        Ты забрала мой, так?
      `,
    buttons: [
      {
        text: '',
        goTo: 344
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 344,
    text:
      `
        И что с того? Врач сказал — необходимо избегать стресс. Я хотела подготовить нас всех к встрече. 
      `,
    buttons: [
      {
        text: '',
        goTo: 345
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 345,
    text:
      `
        Я не знала, что и думать. С каждым новым откровением мне было все тяжелее верить человеку, стоящему передо мной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 346
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 346,
    text:
      `
        Не надо так переживать. Вот он. В целости и сохранности.
      `,
    buttons: [
      {
        text: '',
        goTo: 347
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 347,
    text:
      `
        Я убрала телефон в карман. Смотря на Валентину, я не могла подобрать нужных слов, чтобы что-то сказать.
      `,
    buttons: [
      {
        text: '',
        goTo: 348
      }],
    stats: [
      { story: EStoriesEn.UL, value: +1, category: 'Item', id: 'Phone' }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 348,
    text:
      `
        Да что с тобой? Мы постоянно тусуемся вместе, так в чем проблема?
      `,
    buttons: [
      {
        text: '',
        goTo: 349
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 349,
    text:
      `
        Больше сил у меня сдерживаться не было. 
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 350,
    text:
      `
        В тебе, Валентина. Ты оставила свою подругу одну в тяжелый момент!
      `,
    buttons: [
      {
        text: '',
        goTo: 351
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 351,
    text:
      `
        Подруга начала кипеть от ярости и грубым тоном произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 352
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 352,
    text:
      `
        Тебе нужно отдохнуть. Проспись.
      `,
    buttons: [
      {
        text: '',
        goTo: 353
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 353,
    text:
      `
        Не уходи от темы! Мне нужна правда!
      `,
    buttons: [
      {
        text: '',
        goTo: 354
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 354,
    text:
      `
        Я схватила девушку за руку, когда она собралась уходить. Похоже, ее зацепила моя реакция, и, сменив скорбь на стервозность, она прошипела:
      `,
    buttons: [
      {
        text: '',
        goTo: 355
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 355,
    text:
      `
        Правда тебе нужна?
      `,
    buttons: [
      {
        text: '',
        goTo: 356
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 356,
    text:
      `
        Она дерзко откинула мою руку и угрожающе ответила:
      `,
    buttons: [
      {
        text: '',
        goTo: 357
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 357,
    text:
      `
        Ты никогда не ценила то, что имела. Твои книги считают лучшими, хоть они и далеки от идеала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 358
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 358,
    text:
      `
        Как же долго я носила маску, и как же мне было тяжело называться твоей подругой. Да меня тошнит от тебя!
      `,
    buttons: [
      {
        text: '',
        goTo: 359
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 359,
    text:
      `
        Лучшее, что ты мне дала — это Пол. Он просто идеальный мужчина, которого ты не заслуживаешь! 
      `,
    buttons: [
      {
        text: '',
        goTo: 360
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 360,
    text:
      `
        Каждая сказанная фраза ранила все сильнее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 361
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 361,
    text:
      `
        Но каток... Зачем мы проводили время вместе?
      `,
    buttons: [
      {
        text: '',
        goTo: 362
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 362,
    text:
      `
        Ты и правда недалекая, да? Это я поставила тебе подножку. Надеялась, что ты пострадаешь сильнее. Но судьба, похоже, снова улыбнулась тебе: какой-то идиот кинулся помогать.
      `,
    buttons: [
      {
        text: '',
        goTo: 363
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 363,
    text:
      `
        Мне пришлось сыграть свою роль: я начала кричать и истерить, в душе, надеясь на твой конец. Но нет же, ты лишь потеряла память. 
      `,
    buttons: [
      {
        text: '',
        goTo: 364
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 364,
    text:
      `
        Я не могла сказать ни слова: горло пересохло, а ненависть в глазах подруги сжигала изнутри.
      `,
    buttons: [
      {
        text: '',
        goTo: 365
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 365,
    text:
      `
        Да, Амелия. Как же я была разочарована. Но я не упустила момент: стащила твой телефон и пошла на встречу к Полу. Я была бы его опорой, его близким человеком...
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 366,
    text:
      `
        Я бы смогла утешить его, вначале в объятиях, а потом — в постели.
      `,
    buttons: [
      {
        text: '',
        goTo: 367
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 367,
    text:
      `
        Но какое это имеет теперь значение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 368
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 368,
    text:
      `
        Как ты могла? Все из-за парня? Я могла умереть! Неужели ты сама себя не слышишь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 369
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 369,
    text:
      `
        Пол — не просто парень. Он моя судьба, а ты — преграда.
      `,
    buttons: [
      {
        text: '',
        goTo: 370
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 370,
    text:
      `
        Это просто не укладывалось в голове. Она выглядела как настоящая сумасшедшая. 
      `,
    buttons: [
      {
        text: '',
        goTo: 371
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 371,
    text:
      `
        Как ты можешь жить с таким грехом?
      `,
    buttons: [
      {
        text: '',
        goTo: 372
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 372,
    text:
      `
        Легко и непринужденно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 373
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 373,
    text:
      `
        Я видела лишь разочарование на лице Валентины. Никакого раскаяния. 
      `,
    buttons: [
      {
        text: '',
        goTo: 374
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 374,
    text:
      `
        Эмоции продолжали переполнять меня. И я... 
      `,
    buttons: [
      {
        text: 'Влепила ей пощечину',
        goTo: 375
      },
      {
        text: 'Сказала ей уйти',
        goTo: 379
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 375,
    text:
      `
        Какой смысл было сдерживаться, когда все вскрылось? 
      `,
    buttons: [
      {
        text: '',
        goTo: 376
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 376,
    text:
      `
        Я подошла к ней практически вплотную и ударила, выплескивая свой гнев. 
      `,
    buttons: [
      {
        text: '',
        goTo: 377
      }],
    simple: require('../../../../Audio/UL/Hit.mp3'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 377,
    text:
      `
        На удивление Валентина никак не отреагировала. Лишь только отвернулась, держа руку на месте удара. 
      `,
    buttons: [
      {
        text: '',
        goTo: 378
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 378,
    text:
      `
        Она приняла это как должное. 
      `,
    buttons: [
      {
        text: '',
        goTo: 383
      }],
    stats: [
      { story: EStoriesEn.UL, value: -1, category: 'Person', id: 'Valentina' }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 379,
    text:
      `
        Не было никакого желания что-то доказывать силой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 380
      }],
    stats: [
      { story: EStoriesEn.UL, value: +1, category: 'Person', id: 'Valentina' }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 380,
    text:
      `
        Я чувствовала лишь опустошение от предательства. 
      `,
    buttons: [
      {
        text: '',
        goTo: 381
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 381,
    text:
      `
        Бросив презрительный взгляд на подругу, я сказала: 
      `,
    buttons: [
      {
        text: '',
        goTo: 383
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 383,
    text:
      `
        Убирайся!
      `,
    buttons: [
      {
        text: '',
        goTo: 384
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 384,
    text:
      `
        И не собиралась тут задерживаться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 385
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 385,
    text:
      `
        Она не взглянула на меня больше, просто ушла, хлопнув дверью. 
      `,
    buttons: [
      {
        text: '',
        goTo: 386
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 386,
    text:
      `
        Оставшись одна, я осела на пол: ноги совсем не держали. Мысли превращались в бесконечный круговорот, который сводил с ума.
      `,
    buttons: [
      {
        text: '',
        goTo: 387
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 387,
    text:
      `
        Что мне делать? 
      `,
    buttons: [
      {
        text: 'Позвонить Дэвиду',
        goTo: 388
      },
      {
        text: 'Спуститься к Полу',
        goTo: 424
      },
      {
        text: 'Позвонить Джозефу',
        goTo: 460
      },
      {
        text: 'Лечь спать',
        goTo: 495
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 388,
    text:
      `
        Набрав его номер, я стала слушать противные гудки. Парень не заставил меня долго ждать.
      `,
    buttons: [
      {
        text: '',
        goTo: 389
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 389,
    text:
      `
        Амелия? Все в порядке?
      `,
    buttons: [
      {
        text: '',
        goTo: 390
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    darkSilhouette: true,
    stats: [
      { story: EStoriesEn.UL, value: +1, category: 'Person', id: 'David' }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 390,
    text:
      `
        Прости, я не знала, с кем еще могу поговорить... Возможно, прозвучит очень нагло, но ты не мог бы прийти? 
      `,
    buttons: [
      {
        text: '',
        goTo: 391
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 391,
    text:
      `
        Разумеется. Я мигом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 392
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 392,
    text:
      `
        Закончив разговор, через минуту другую, раздался звонок домофона.
      `,
    buttons: [
      {
        text: '',
        goTo: 393
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 393,
    text:
      `
        Закрыв за ним дверь, я в растерянности посмотрела на Дэвида, который аккуратно положил куртку на диванчик.
      `,
    buttons: [
      {
        text: '',
        goTo: 394
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 394,
    text:
      `
        Как ты так быстро оказался здесь?
      `,
    buttons: [
      {
        text: '',
        goTo: 395
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 395,
    text:
      `
        Крутился неподалеку. Понял, что тебе сейчас нелегко, и знал, что потребуется помощь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 396
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 396,
    text:
      `
        Я вкратце рассказала о том, что меня тревожило, и, казалось, мне стало легче.
      `,
    buttons: [
      {
        text: '',
        goTo: 397
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 397,
    text:
      `
        Не подумай ничего такого, но мне интересно, почему ты не позвонила Полу? Почему решила пригласить незнакомца?
      `,
    buttons: [
      {
        text: '',
        goTo: 398
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 398,
    text:
      `
        Потому что он пытается меня вылечить воспоминаниями, и не понимает, что грузит лишь сильнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 399
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 399,
    text:
      `
        Ты же не пытаешься проникнуть в мой мозг, не причиняешь боли. Ты принимаешь меня такой, какая я есть.
      `,
    buttons: [
      {
        text: '',
        goTo: 400
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 400,
    text:
      `
        Ты прости мне самовольность, но, может, я приготовлю кофе? Что думаешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 401
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 401,
    text:
      `
        Да, было бы неплохо.
      `,
    buttons: [
      {
        text: '',
        goTo: 402
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 402,
    text:
      `
        Мы с Дэвидом прошли в кухню, где он почти сразу же поставил чайник. Я же просто сидела на диванчике, вглядываясь в каждый уголок.
      `,
    buttons: [
      {
        text: '',
        goTo: 403
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 403,
    text:
      `
        Парень сел напротив меня и проследил за моим взглядом.
      `,
    buttons: [
      {
        text: '',
        goTo: 404
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 404,
    text:
      `
        Так странно… Если я жила здесь, тогда почему ничего могу вспомнить? Должна же быть мышечная память, но и тело будто не отзывается.
      `,
    buttons: [
      {
        text: '',
        goTo: 405
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 405,
    text:
      `
        У меня нет всех ответов на твои вопросы, но, возможно, тебе стоит перестать мучить себя? Тебе нужно принять случившееся, а не отгораживаться от него.
      `,
    buttons: [
      {
        text: '',
        goTo: 406
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 406,
    text:
      `
        Возможно, ты и прав. Но как это сделать, когда все вокруг кричит об обратном?
      `,
    buttons: [
      {
        text: '',
        goTo: 407
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 407,
    text:
      `
        Просто продолжай жить. Наслаждайся настоящим. 
      `,
    buttons: [
      {
        text: '',
        goTo: 408
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 408,
    text:
      `
        Парень встал, чтобы приготовить напиток, пока я, ненароком, разглядывала его. Его высокий рост, темные волосы до плеч, а взгляд карих глаз был настолько теплым, что физически можно было согреться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 409
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 409,
    text:
      `
        Когда Дэвид развернулся, наши взгляды пересеклись, и в этот момент я не смогла сдержать улыбки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 650
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg'),
  },

  {
    id: 650,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 410
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg'),
    cutScene: { video: require('../../../../Images/UL/CutScenes/AmeliaAndDavid.mp4'), goTo: 410 }
  },

  {
    id: 410,
    text:
      `
        Я...
      `,
    buttons: [
      {
        text: '',
        goTo: 411
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 411,
    text:
      `
        Парень тоже тепло улыбнулся и игриво произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 412
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 412,
    text:
      `
        Я помешал разглядывать кухню. Все понимаю.
      `,
    buttons: [
      {
        text: '',
        goTo: 413
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 413,
    text:
      `
        Я была благодарна ему за то, что с ним было легко и просто поддерживать контакт. Он хорошо понимал, когда стоит перевести тему и просто отшутиться.  
      `,
    buttons: [
      {
        text: '',
        goTo: 414
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 414,
    text:
      `
        Мы просидели на кухне до полуночи, я рассказала ему то, что узнала от Валентины, и, когда сон начал брать вверх, Дэвид сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 415
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 415,
    text:
      `
        Я удивлен тем, как ее не мучает совесть. Ожидал подставы, но не до такой степени. 
      `,
    buttons: [
      {
        text: '',
        goTo: 416
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 416,
    text:
      `
        Держись, Амелия, мы справимся! 
      `,
    buttons: [
      {
        text: '',
        goTo: 417
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 417,
    text:
      `
        Когда мы подходили ко входной двери, Дэвид напоследок крепко обнял меня, говоря:
      `,
    buttons: [
      {
        text: '',
        goTo: 418
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 418,
    text:
      `
        Мне уже пора. Прилично же я задержался. А ты, как порядочная хозяйка даже не намекнула, что гостю уже надо уйти.
      `,
    buttons: [
      {
        text: '',
        goTo: 419
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 419,
    text:
      `
        Потому что мне понравилось беседовать с тобой, Дэвид.
      `,
    buttons: [
      {
        text: '',
        goTo: 420
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 420,
    text:
      `
        Парень надел куртку и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 421
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 421,
    text:
      `
        Спокойной ночи, Амелия. Надеюсь, скоро увидимся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 422
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 422,
    text:
      `
        Спокойной ночи, Дэвид. Спасибо за то, что был со мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 423
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 423,
    text:
      `
        Он ушел, а я, оставшись одна, отправилась в спальню, чтобы начать готовиться ко сну. 
      `,
    buttons: [
      {
        text: '',
        goTo: 506
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 424,
    text:
      `
        Я надела куртку и спустилась в кафе, о котором ранее говорил Пол. 
      `,
    buttons: [
      {
        text: '',
        goTo: 425
      }],
    stats: [
      { story: EStoriesEn.UL, value: +1, category: 'Person', id: 'Paul' }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 425,
    text:
      `
        Парень в одиночестве сидел за столиком, медленно попивая кофе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 426
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 426,
    text:
      `
        При виде меня он оживился и подошел ко мне, приглашая присесть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 427
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 427,
    text:
      `
        Я так рад тебя видеть, дорогая. Садись. Давай я повешу куртку. Что-то хочешь поесть? 
      `,
    buttons: [
      {
        text: '',
        goTo: 428
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 428,
    text:
      `
        Спасибо! Мне ничего не нужно, только... 
      `,
    buttons: [
      {
        text: '',
        goTo: 429
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 429,
    text:
      `
        Я не сдержалась. Заплакала. Опять. 
      `,
    buttons: [
      {
        text: '',
        goTo: 430
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 430,
    text:
      `
        Пол не растерялся, подсел ко мне и тепло прижал к себе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 431
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 431,
    text:
      `
        Тише, милая. Все хорошо. Я рядом. Ну что такое?
      `,
    buttons: [
      {
        text: '',
        goTo: 432
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 432,
    text:
      `
        Это... Просто... Не могу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 433
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 433,
    text:
      `
        Официант, воды, пожалуйста. 
      `,
    buttons: [
      {
        text: '',
        goTo: 434
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 434,
    text:
      `
        Молодой человек сразу же принес стакан и поставил передо мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 435
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 435,
    text:
      `
        Я сделала пару глотков и отставила стакан в сторону.
      `,
    buttons: [
      {
        text: '',
        goTo: 436
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 436,
    text:
      `
        Почему ты сразу мне не позвонила? Я бы был рядом.
      `,
    buttons: [
      {
        text: '',
        goTo: 437
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 437,
    text:
      `
        Потому что я ничего не помню! Я очнулась в чертовой палате, где все для меня были незнакомцами! Как и ты. 
      `,
    buttons: [
      {
        text: '',
        goTo: 438
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 438,
    text:
      `
        Я не должен бы позволять тебе проходить через все это в одиночку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 439
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 439,
    text:
      `
         <p>Начинаю думать о том, что рассказала Валентина... Как ты ударилась головой... Больница, потеря памяти. Она была так расстроена... А самое ужасное, я ведь даже не знал.
      `,
    buttons: [
      {
        text: '',
        goTo: 440
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 440,
    text:
      `
        Давай еще раз. Что тут делала Валентина, когда мы пришли?
      `,
    buttons: [
      {
        text: '',
        goTo: 441
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 441,
    text:
      `
        Она с порога начала рыдать, говорить, что ты в беде, как тебе плохо. Ей стало плохо и я успокоил ее. Разумеется, пытаясь выяснить, что случилось и где ты. 
      `,
    buttons: [
      {
        text: '',
        goTo: 442
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 442,
    text:
      `
        И поэтому ты обнимал ее?
      `,
    buttons: [
      {
        text: '',
        goTo: 443
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 443,
    text:
      `
        Амелия, не позволяй какому-то проходимцу запудрить тебе мозги. Валентина — наша подруга. У нас даже есть множество совместных фото.
      `,
    buttons: [
      {
        text: '',
        goTo: 444
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 444,
    text:
      `
        Парень достал мобильный телефон и начал показывать фотографии, рассказывая о каждом моменте. 
      `,
    buttons: [
      {
        text: '',
        goTo: 445
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 445,
    text:
      `
        Смотри! Тут мы катаемся на лошадях. Кажется, я возил вас в соседний городок на фестиваль. 
      `,
    buttons: [
      {
        text: '',
        goTo: 446
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 446,
    text:
      `
        А тут мы поедаем мороженное в нашем любимом кафе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 447
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 447,
    text:
      `
        Извини, если давлю на тебя. Я просто хочу доказать тебе, что мои слова не пустой звук. 
      `,
    buttons: [
      {
        text: '',
        goTo: 448
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 448,
    text:
      `
        Каждое воспоминание так и хотело снова стать частью моей жизни, но лишь вызывало дикую боль. И как бы я ни пыталась вспомнить — все было бестолку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 449
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 449,
    text:
      `
        Ты в норме? Может, вернемся домой?
      `,
    buttons: [
      {
        text: '',
        goTo: 450
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 450,
    text:
      `
        Нет. Мы с Валентиной поговорили...
      `,
    buttons: [
      {
        text: '',
        goTo: 451
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 451,
    text:
      `
        И что она сказала?
      `,
    buttons: [
      {
        text: '',
        goTo: 452
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 452,
    text:
      `
        Я пересказала наш разговор, отчего Пол пришел в ярость.
      `,
    buttons: [
      {
        text: '',
        goTo: 453
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 453,
    text:
      `
        Я пытаюсь разобраться во всем. Но как? Почему все обернулось таким образом?
      `,
    buttons: [
      {
        text: '',
        goTo: 454
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 454,
    text:
      `
        Эта сука обязательно ответит за все, что сделала нам.  Как я мог быть так слеп...
      `,
    buttons: [
      {
        text: '',
        goTo: 455
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 455,
    text:
      `
        Давай сейчас не будем говорить об этом?
      `,
    buttons: [
      {
        text: '',
        goTo: 456
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 456,
    text:
      `
        Конечно. Мы всегда понимали друг друга, Амелия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 457
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 457,
    text:
      `
        Через некоторое время сон начал брать вверх. Пол, чтобы не смущать меня, решил переночевать в гостинице.
      `,
    buttons: [
      {
        text: '',
        goTo: 458
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 458,
    text:
      `
        И я была ему за это благодарна. Он понимал и ценил мои желания. 
      `,
    buttons: [
      {
        text: '',
        goTo: 459
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 459,
    text:
      `
        Я отправилась домой, в спальню, чтобы начать готовиться ко сну. 
      `,
    buttons: [
      {
        text: '',
        goTo: 506
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Night.jpg')
  },

  {
    id: 460,
    text:
      `
        Дрожащими руками я набрала его номер, ожидая ответа. Он представился по фамилии, а я робко ответила:
      `,
    buttons: [
      {
        text: '',
        goTo: 461
      }],
    stats: [
      { story: EStoriesEn.UL, value: +1, category: 'Person', id: 'Doctor' }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 461,
    text:
      `
        Прости, но я не знала, с кем еще могу поговорить... Это Амелия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 462
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 462,
    text:
      `
        С тобой все хорошо? 
      `,
    buttons: [
      {
        text: '',
        goTo: 463
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Indoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 463,
    text:
      `
        Я в полной растерянности.
      `,
    buttons: [
      {
        text: '',
        goTo: 464
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 464,
    text:
      `
        Ничего не болит?
      `,
    buttons: [
      {
        text: '',
        goTo: 465
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Indoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 465,
    text:
      `
        Нет, доктор, мне морально тяжело.
      `,
    buttons: [
      {
        text: '',
        goTo: 466
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 466,
    text:
      `
        Если ты не возражаешь, то я приду.
      `,
    buttons: [
      {
        text: '',
        goTo: 467
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Indoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 467,
    text:
      `
        Я не хочу отвлекать тебя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 468
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 468,
    text:
      `
        Брось, Амелия. Я врач, и моя работа — помогать людям. 
      `,
    buttons: [
      {
        text: '',
        goTo: 469
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Indoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 469,
    text:
      `
        Он пришел довольно быстро. 
      `,
    buttons: [
      {
        text: '',
        goTo: 470
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 470,
    text:
      `
        Расскажешь, что тебя тревожит?
      `,
    buttons: [
      {
        text: '',
        goTo: 471
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 471,
    text:
      `
        Но разве это в твоей компетенции? 
      `,
    buttons: [
      {
        text: '',
        goTo: 472
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 472,
    text:
      `
        У меня есть диплом психолога, но я решил идти дальше. Поэтому, да, помогать разгребать мысли — моя компетенция.
      `,
    buttons: [
      {
        text: '',
        goTo: 473
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 473,
    text:
      `
        Я пригласила его в кухню, где мы начали беседовать за чашкой чая. Я рассказала ему все то, что узнала о подруге, и, к концу разговора настолько расклеилась, что не могла сдержать слез.
      `,
    buttons: [
      {
        text: '',
        goTo: 474
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 474,
    text:
      `
        Дурацкие эмоции. 
      `,
    buttons: [
      {
        text: '',
        goTo: 475
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 475,
    text:
      `
        Ты пережила огромный стресс, и лучше сейчас не думать о Валентине. Сейчас главное — спокойствие.
      `,
    buttons: [
      {
        text: '',
        goTo: 476
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Indoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 476,
    text:
      `
        Врач коснулся моей руки в знак молчаливой поддержки, но мне этого было мало. Я не могла перестать думать о том, что услышала в свой адрес.
      `,
    buttons: [
      {
        text: '',
        goTo: 477
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 477,
    text:
      `
        Не могу. И что самое ужасное, мой парень обнимал ее. Мне мало его оправданий. Может быть это сговор? Меня обманывали все это время?
      `,
    buttons: [
      {
        text: '',
        goTo: 478
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 478,
    text:
      `
        Тише. Не возражаешь, если я дам тебе успокоительное? 
      `,
    buttons: [
      {
        text: '',
        goTo: 479
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Indoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 479,
    text:
      `
        Я кивнула, и доктор передал мне стакан, предварительно размешав там раствор.
      `,
    buttons: [
      {
        text: '',
        goTo: 480
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 480,
    text:
      `
        Скоро подействует, а мысли станут прозрачнее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 481
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Indoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 481,
    text:
      `
        Выпив все содержимое, я отставила стакан в сторону, а доктор начал беседу на отвлеченную тему: 
      `,
    buttons: [
      {
        text: '',
        goTo: 482
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 482,
    text:
      `
        У тебя очень милая квартира. 
      `,
    buttons: [
      {
        text: '',
        goTo: 483
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Indoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 483,
    text:
      `
        Да. Не верится, что я живу в таких апартаментах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 484
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 484,
    text:
      `
        Мое тело начало постепенно расслаблялось. Каждой клеточкой я чувствовала эту эйфорию: не было ни мыслей, ни отвлекающих чувств.
      `,
    buttons: [
      {
        text: '',
        goTo: 485
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 485,
    text:
      `
        Теперь я и правда ощущаю себя лучше, будто начала жизнь с чистого листа. Это поразительно.
      `,
    buttons: [
      {
        text: '',
        goTo: 486
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 486,
    text:
      `
        Очень часто жизнь ставит нам подножки, но самое важное — надо подниматься и идти дальше. И как бы ни было трудно, надо держаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 487
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Indoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 487,
    text:
      `
        Очень мудрый совет. Спасибо тебе, Джозеф. Без тебя я не знаю, что бы со мной было.
      `,
    buttons: [
      {
        text: '',
        goTo: 488
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 488,
    text:
      `
        Он выглядел уставшим, но в глазах все еще теплился огонек. Когда наши взгляды соприкоснулись, мужчина отвел глаза в сторону. 
      `,
    buttons: [
      {
        text: '',
        goTo: 489
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 489,
    text:
      `
        «Почему он такой неприступный? И почему я думаю о нем? Он действительно мне нравится или все дело в лекарстве?»
      `,
    buttons: [
      {
        text: '',
        goTo: 490
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 490,
    text:
      `
        Думаю, мне пора. Успокоительное позволит вам уснуть, а утром мы увидимся в процедурном кабинете.
      `,
    buttons: [
      {
        text: '',
        goTo: 491
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Indoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Kitchen.jpg')
  },

  {
    id: 491,
    text:
      `
        Он встал со стула и пошел в прихожую. Я пошла следом. Когда Джозеф надел пальто, я сказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 492
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 492,
    text:
      `
        До завтра. И, спасибо, что согласился побеседовать. Для меня это многое значит.
      `,
    buttons: [
      {
        text: '',
        goTo: 493
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 493,
    text:
      `
        Спокойной ночи, Амелия. Я не забуду наш разговор.
      `,
    buttons: [
      {
        text: '',
        goTo: 494
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 494,
    text:
      `
        Он ушел, а я, оставшись одна, отправила в спальню, чтобы начать готовиться ко сну. 
      `,
    buttons: [
      {
        text: '',
        goTo: 506
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Flat_Enter.jpg')
  },

  {
    id: 495,
    text:
      `
        Мне совершенно не хотелось никого видеть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 496
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Bedroom.jpg')
  },

  {
    id: 496,
    text:
      `
        Я была благодарна этим людям за помощь, но еще больше мне хотелось просто побыть с собой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 497
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Bedroom.jpg')
  },

  {
    id: 497,
    text:
      `
        Я лежала на атласных простынях, размышляя, кто же я на самом деле и чего хочу?
      `,
    buttons: [
      {
        text: '',
        goTo: 498
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Bedroom.jpg')
  },

  {
    id: 498,
    text:
      `
        На столе стоял ноутбук, а рядом лежала раскрытая книга с обведенным абзацем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 499
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Bedroom.jpg')
  },

  {
    id: 499,
    text:
      `
        Чуть приподнявшись, я схватила книгу и покрутила ее, рассматривая обложку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 500
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Bedroom.jpg')
  },

  {
    id: 500,
    text:
      `
        Амелия Карел. «Последняя искра».
      `,
    buttons: [
      {
        text: '',
        goTo: 501
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Bedroom.jpg')
  },

  {
    id: 501,
    text:
      `
        Без сомнения эта книга была написана мной. Удивительное чувство гордости и противоречий нахлынуло на меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 502
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Bedroom.jpg')
  },

  {
    id: 502,
    text:
      `
        Я надеюсь, что смогу вспомнить все, хотя бы ради того, чтобы продолжить это дело. 
      `,
    buttons: [
      {
        text: '',
        goTo: 503
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Bedroom.jpg')
  },

  {
    id: 503,
    text:
      `
        Хоть какой-то плюс в этом есть. Неплохая история выйдет на основе всего происходящего. 
      `,
    buttons: [
      {
        text: '',
        goTo: 504
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Bedroom.jpg')
  },

  {
    id: 504,
    text:
      `
        Отложив книгу, я свернулась калачиком, заставляя себя забыть сегодняшнюю боль, как страшный сон. 
      `,
    buttons: [
      {
        text: '',
        goTo: 506
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Bedroom.jpg')
  },

  {
    id: 506,
    text:
      `
        Я не видела другого варианта, кроме как постараться заснуть. Но мне это давалось с трудом: тысяча мыслей роилась в голове, и я не знала, как от них избавиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 507
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Bedroom.jpg')
  },

  {
    id: 507,
    text:
      `
        Кровать казалась чужой, запахи — посторонними. Кем я была и главное, что я вообще тут делала?
      `,
    buttons: [
      {
        text: '',
        goTo: 508
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Bedroom.jpg')
  },

  {
    id: 508,
    text:
      `
        Как я могла просто спать после случившегося? 
      `,
    buttons: [
      {
        text: '',
        goTo: 509
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Bedroom.jpg')
  },

  {
    id: 509,
    text:
      `
        Как избавиться от противоречивых мыслей и остаться собой? 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('UL', 'Глава 1', 'Часть 3', '0')
        }
      }],
    achievement: { story: EStoriesEn.UL, name: 'Part02Completed' },
    imageBack: require('../../../../Images/UL/Backgrounds/Bedroom.jpg')
  }
])
