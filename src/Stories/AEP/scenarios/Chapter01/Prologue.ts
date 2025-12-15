import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { saveEndProgress, scenarioManager } from '../../../../index'
import { firstChoiceMessage, previousSlideMessage } from '../../../../Utils/textConsts'
import { askForInput } from '../../../../Components/TextInput/TextInput'
import { saveData } from '../../../../Functions/localStorageManager'

scenarioManager.addScenario({ storyName: EStoriesEn.AEP, chapterName: 'Глава 1', partName: 'Пролог', code: '0' }, [
  {
    id: 0,
    text:
			`
        Стоя на арене величественного Колизея, я и представить не могла, что когда-нибудь окажусь в подобной ситуации. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/AEP/Prologue.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 1,
    text:
			`
        Оглушающие выстрелы свистели у меня над головой.  А я, лежа в раскорячку, просто не понимала, куда себя деть. Меня окружали дурацкие древние колонны, которые я охотно использовала как укрытие. 
      `,
    message: previousSlideMessage,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 2,
    text:
			`
        Рядом со мной устроился Джон — мой сокурсник. Он судорожно пытался вставить патроны в барабан простенького маленького револьвера. 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          askForInput('Как меня зовут?', 'Белла', (value) => {
            scenarioManager.beginScene(3)
            saveData([EStoriesEn.AEP, 'Name'], [value])
          })
        },
        goTo: 3
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 3,
    text:
			`
        Я не могла смотреть на его жалкие попытки сделать что-то сносное, поэтому:
      `,
    buttons: [
      {
        text: 'Отобрала пушку',
        goTo: 4
      },
      {
        text: 'Отвернулась',
        goTo: 8
      },
      {
        text: 'Стукнула его хорошенько',
        goTo: 15
      }],
    message: firstChoiceMessage,
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 4,
    text:
			`
        — Хей, — недоуменно проговорил парень. — Ты же даже пользоваться им не умеешь! 
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    stats: [{ story: EStoriesEn.AEP, category: 'Choice', id: 'TakeJohnGun', value: 1 }],
    speaker: 'Джон',
    imageFront: require('../../../../Images/AEP/Persons/John.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 5,
    text:
			`
        — Все интуитивно понятно: вставить патроны, взвести курок… — я с легкостью проделывала все махинации. — Я жить хочу, а ты, черт тебя подери, не можешь элементарно зарядить пушку. Еще и втянул нас во все это. 
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 6,
    text:
			`
        — Втянул во все это?! Лучше бы спросила своего дружка Мэтта, который переспал чуть ли не со всем университетом и ввязался в разборки с плохими дядьками… 
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    speaker: 'Джон',
    imageFront: require('../../../../Images/AEP/Persons/John.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 7,
    text:
			`
        — Самое время обосрать Мэтта, а не искать выход из ситуации. Такими темпами мы здесь скоро подохнем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 8,
    text:
			`
        Не в силах смотреть на сие «извращение», я решила проверить обстановку и медленно выглянула из укрытия. Особой пользы это не принесло. 
      `,
    stats: [{ story: EStoriesEn.AEP, category: 'Choice', id: 'TurnAway', value: 1 }],
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 9,
    text:
			`
        «Мда. Только пули свистят над головой… Очень лирично. И почему до сих пор не приехала полиция? Как только власти допускают перестрелку на чертовом историческом объекте?»
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 10,
    text:
			`
        Джон наконец-то закончил возиться с револьвером.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 11,
    text:
			`
        — Что будем делать? — с нетерпением спросила я. 
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 12,
    text:
			`
        — Откуда я знаю? У меня опыта в таких делах не больше, чем у тебя. Или ты думаешь, что я решу все по щелчку пальцев?
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    speaker: 'Джон',
    imageFront: require('../../../../Images/AEP/Persons/John.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 13,
    text:
			`
        — Я надеялась, — нервная усмешка не сходила с моего лица. — Но у нас хотя бы есть оружие, это увеличивает наши шансы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 14,
    text:
			`
        — На что? — парень съежился после моего утверждения. — Умереть? 
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    speaker: 'Джон',
    imageFront: require('../../../../Images/AEP/Persons/John.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 15,
    text:
			`
        Удар пришелся по затылку. Джон от неожиданности выронил револьвер, а вместе с ним и пули, которые затерялись в ночной темноте. 
      `,
    stats: [{ story: EStoriesEn.AEP, category: 'Choice', id: 'HitJohn', value: 1 }],
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 16,
    text:
			`
        — Ты больная или как? — парень судорожно пытался нащупать выпавшие патроны.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    speaker: 'Джон',
    imageFront: require('../../../../Images/AEP/Persons/John.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 17,
    text:
			`
        — Я не виновата, что у тебя руки из одного места…
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 18,
    text:
			`
        Джон схватился за голову и стал причитать о скорой смерти. Было бессмысленно его успокаивать. Если уж он что-то напридумывал, то так и будет на этом зациклен. 
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 19,
    text:
			`
        — Сука… — Джон стал паниковать еще сильнее. — Долбанный университет, долбанные богатенькие детки.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    speaker: 'Джон',
    imageFront: require('../../../../Images/AEP/Persons/John.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 20,
    text:
			`
        — $Имя Игрока$, давай сваливать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    speaker: 'Джон',
    imageFront: require('../../../../Images/AEP/Persons/John.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 21,
    text:
			`
        — Наконец-то дельное предложение.
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 22,
    text:
			`
        Мы старались красться, словно ниндзя. Мне казалось, что мы не потеряли сознание только из-за зашкаливающего адреналина. 
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 23,
    text:
			`
        Минута, другая. В ушах звенит все сильнее из-за звуков выстрелов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 24,
    text:
			`
        «Когда же это закончится?»
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 25,
    text:
			`
        Мы были уверены, что вот-вот выберемся и этот кошмар останется позади. Однако когда выход был так близко, нас как щенят поймали за шкирку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 26,
    text:
			`
        С нами не церемонились. Джона — сразу лицом в пол, а меня схватил за подбородок один из бандитов и стал рассматривать, словно я была как товар на полке магазина. 
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 27,
    text:
			`
        — А ничего такая, сгодится же на одну ночь? — он обращался к своему коллеге, который держал Джона. 
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    speaker: 'Бандит 2',
    imageFront: require('../../../../Images/AEP/Persons/Bandit_02.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 28,
    text:
			`
        — Да ты себя видел? Она даже под страхом смерти ноги перед тобой не раздвинет, — мужчины громко рассмеялись. 
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    speaker: 'Бандит 1',
    imageFront: require('../../../../Images/AEP/Persons/Bandit_01.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 29,
    text:
			`
        — Потянуло на молоденьких? Сейчас босс разберется с козлами, которые не понимают, когда надо держать язык за зубами — вот и делай что хочешь. А пока долг — превыше всего. 
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    speaker: 'Бандит 1',
    imageFront: require('../../../../Images/AEP/Persons/Bandit_01.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 30,
    text:
			`
        — Пф, — страшный мужчина средних лет со шрамами по всему лицу облизнулся. — А так хочется попробовать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speaker: 'Бандит 2',
    imageFront: require('../../../../Images/AEP/Persons/Bandit_02.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 31,
    text:
			`
        Он надел на меня наручники и грубо бросил на землю. 
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 32,
    text:
			`
        Казалось, прошла вечность с тех пор, как бандиты вновь обратили на нас внимание. В этот раз они были не одни, а в сопровождение своего лидера. 
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 33,
    text:
			`
        — Ты? — я не могла сдержать удивления. 
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 34,
    text:
			`
        — Так-так, — он провел рукой по моей грязной щеке. — Какие интересные у нас гости.
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    speaker: 'Сальваторе',
    imageFront: require('../../../../Images/AEP/Persons/Salvatore.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 35,
    text:
			`
        Мужчина наставил свой окровавленный пистолет прямо мне к виску и проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  },

  {
    id: 36,
    text:
			`
        — Поиграем? 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('AEP', 'Глава 1', 'Часть 1', '0')
        }
      }],
    speaker: 'Сальваторе',
    imageFront: require('../../../../Images/AEP/Persons/Salvatore.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    achievement: { story: EStoriesEn.AEP, name: 'PrologueCompleted' },
    imageBack: require('../../../../Images/AEP/Backgrounds/Col.jpg')
  }
])
