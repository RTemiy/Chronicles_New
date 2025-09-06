import { saveEndProgress, scenarioManager } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { previousSlideMessage } from '../../../../Utils/TextConsts'

scenarioManager.addScenario({ storyName: EStoriesEn.MM, chapterName: 'Глава 1', partName: 'Пролог', code: '1' }, [
  {
    id: 0,
    text:
      `
        За окном разбушевалась гроза. Капли барабанили по стеклу, заполняя кабинет монотонным гулом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/MM/Calm.mp3'),
    ambient: require('../../../../Sounds/MM/Rain.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 1,
    text:
      `
        Тёмные, грузные тучи без единого проблеска света висели так низко, словно само небо стремилось свалиться людям на головы…
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    message: previousSlideMessage,
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 2,
    text:
      `
        Впрочем, для местных такая погода в Илинге оставалась обычным явлением. К ней привыкали все, кому довелось прожить в Лондоне больше месяца.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 3,
    text:
      `
        — Ну что, сколько насчитала?
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: 0, category: 'Person', id: 'Dylan' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 4,
    text:
      `
        Маргарита нервно моргнула, возвращая себя обратно в реальность.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 5,
    text:
      `
        — Ты о чём?
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 6,
    text:
      `
        — О птицах на дереве. 
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 7,
    text:
      `
        Детектив закатила глаза. Дилан усмехнулся, но, заметив рассеянное состояние девушки, тяжело вздохнул. Во взгляде пробилось сочувствие, граничащее с волнением.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 8,
    text:
      `
        — Марго, в чём дело? Ты уже минут десять взгляд от окна оторвать не можешь. Я всё понимаю: созерцание города, особенно в дождь — весьма занимательно, успокаивает. 
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 9,
    text:
      `
        — Но ты сама задала мне вопрос и вдруг застыла, впав в этот свой загадочный ступор… Не выспалась?
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 10,
    text:
      `
        — Нет, извини. Всё нормально. Какой вопрос я тебе задавала? 
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 11,
    text:
      `
        — Хватит извиняться по каждой ерунде. Ещё чуть-чуть — и от истинной англичанки тебя будет не отличить.
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 12,
    text:
      `
        Дилан приблизился к рабочему столу Маргариты и протянул ей стаканчик кофе. Девушка благодарно кивнула напарнику.
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 13,
    text:
      `
        — Ты спросила, не хочу ли я пообедать вместе в «У Полсон». Буквально умоляла пойти с тобой.
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 14,
    text:
      `
        — Ты со своими шуточками... Спешу напомнить: нам сегодня сдавать отчёт по обыску.
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 15,
    text:
      `
        Маргарита сделала глоток кофе и блаженно прикрыла глаза, ощутив яркий привкус корицы на языке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 16,
    text:
      `
        Дилан недовольно поморщился от услышанного, выражение его лица буквально кричало: «Уймите эту женщину, Бога ради. Сколько можно работать?!»
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 17,
    text:
      `
        — Как насчёт «отдохнуть»? В последнее время тебя не поймать, всё время в себе или бумагах. И наш киновечер по средам… За него не прощу! 
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 18,
    text:
      `
        Заметив синие круги под глазами детектива, Дилан решительно направился к шкафу.
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 19,
    text:
      `
        — Нет, так точно не пойдёт. Вставай, отказы не принимаются.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 20,
    text:
      `
        Маргарита выставила ладони в примирительном жесте, молча принимая предложение Дилана. Или требование? 
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 21,
    text:
      `
        Напарник помог девушке облачиться в пальто, протянул второй зонт. 
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 22,
    text:
      `
        — Как ты понял, что я соглашусь?
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 23,
    text:
      `
        — Я не понял. Просто <i>хотел<i/>, чтобы согласилась. Но мне льстит твоя непоколебимая вера в мой дар убеждения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 24,
    text:
      `
        — Тогда к чему притащил второй зонт на работу?
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 25,
    text:
      `
        Дилан подмигнул напарнице. 
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 26,
    text:
      `
        Маргарита собирала сумку, хаотично закидывая необходимые вещи. Детектив искренне не любила тратить время на подобные мелочи.
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 27,
    text:
      `
        — Был уверен, что не станешь проверять прогноз погоды. Прихватил с собой второй зонт. Планировал отдать после работы, чтобы не намокла по дороге домой… не заболела.
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 28,
    text:
      `
        Мужчина, поняв, как прозвучали его слова, поспешил разрядить обстановку.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 29,
    text:
      `
        — Что тут сказать… забочусь о начальстве. 
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 30,
    text:
      `
        — Дилан, забыл? Я предпочитаю термин «напарники».
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 31,
    text:
      `
        Маргариту повысили полтора месяца назад. Дилан был искренне рад за коллегу, но не упускал возможности лишний раз над ней пошутить.
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 32,
    text:
      `
        <i>Старший детектив<i/>. Звучало хорошо, и эта должность должна была стоить того, чтобы со спокойной душой пренебрегать выходными и крепким сном без кошмаров.
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 33,
    text:
      `
        Маргарита оставалась профи по умолчанию — сдержанная, хладнокровная на всех этапах расследования, включая вскрытия и изучение мест преступлений, где, бывало, жертв и их части тела растаскивало по асфальту. 
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 34,
    text:
      `
        — Спасибо, Дилан. Зонт, кофе, попытки отвлечь... Не представляю, за какие такие заслуги мне в напарники дали тебя.
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 35,
    text:
      `
        — Видать, тебе и правда нехорошо. Обычная Марго скорее сформулировала бы нечто вроде «за какие такие грехи»?
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 36,
    text:
      `
        Бросив насмешливый взгляд, детектив закатила глаза и пихнула друга в плечо.
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 37,
    text:
      `
        — Давай уже выметаться отсюда, пока рабочий день не закончился. 
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 38,
    text:
      `
        Маргарита действительно испытывала усталость. Голова казалась тяжёлой, а под веки будто насыпали горсть песка. Изнурение провоцировало раздражение.
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 39,
    text:
      `
        Ночами девушка оставалась наедине с темнотой, и смотреть сквозь неё казалось сложнее, чем в открытые, пустые глаза не успевших остыть мертвецов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 40,
    text:
      `
        Тишина не помогала расслабиться. Она давила. Обнажала страхи, демонстрировала уродство людских душ. 
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 41,
    text:
      `
        Ведь все преступления — страшные, местами невообразимо жестокие, совершали обычные <i>люди<i>.
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 42,
    text:
      `
        Кошмары мучили Маргариту. Часто. 
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 43,
    text:
      `
        После четырёх с половиной лет активной практики наступило затишье, и детектив даже задумалась: неужто вновь научилась спать?
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 44,
    text:
      `
        Заключительная неделя сентября обрубила надежды серией ужасов, от которых девушка подрывалась, обливаясь холодным потом, и встречала рассвет со включенным в спальне светом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 45,
    text:
      `
        Дорогущему консилеру из брендированного магазина оказалось не под силу скрыть въевшуюся под кожу век синеву. 
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 46,
    text:
      `
        Маргарита подумывала выудить у знакомого бальзамировщика тюбик плотного тона, которым тот красит трупов… замазать следы кошмаров…
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 47,
    text:
      `
        До кафе детективы добрались в тишине. Молчание не угнетало, в их дуэте оно оставалось оплотом спокойствия.
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    music: require('../../../../Sounds/MM/Romantic.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 48,
    text:
      `
        Дилан искоса поглядывал на коллегу, в который раз отмечая про себя красоту и утончённость её изящного профиля.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 49,
    text:
      `
        Мужчина не навязывал Маргарите свою компанию, но всякий раз испытывал необъяснимое удовольствие, когда девушка сама инициировала совместный досуг.
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 50,
    text:
      `
        Просмотр фильмов по средам под чай, стопку листов со списком улик и подобного рода бумаг… Да, это были <i>их<i/> вечера. 
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 51,
    text:
      `
        Пока Маргарита смотрела сквозь улицу и прохожих, вновь потонув в размышлениях, Дилан думал о ней. О себе. <i>О них<i>. 
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 52,
    text:
      `
        <i>«Будь всё иначе… Другое прошлое, другие должности, обстоятельства. Хватило бы мне смелости?»<i>
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 53,
    text:
      `
        Статус товарища и напарника — с недавних пор подчинённого — мужчина воспринимал как должное, но в глубине души желал совершенно иного.
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 54,
    text:
      `
        Он и Марго. Вместе…
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 55,
    text:
      `
        Как только Дилан поймал себя на подобных мыслях, он тотчас принялся отгонять их подальше. И временами это оборачивалось импульсивной внутренней бойней с самим собой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 56,
    text:
      `
        Не позволять лишних касаний. Не думать о том, как красиво она улыбается. И как идеально сосредотачивается. Не предлагать. Не желать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 57,
    text:
      `
        Было много подобных «не».
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 58,
    text:
      `
        Не переступать черту, не выносить отношения за порог офиса... 
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 59,
    text:
      `
        Если только Маргарита сама не сделает первый шаг.
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 60,
    text:
      `
        Даже в этом случае Дилан считал, что не имеет права нырять в неё с головой. Иначе как — в случае их разрыва — продолжать работать в одном кабинете? Это будет невыносимо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 61,
    text:
      `
        <i>«Околдовала, не иначе…»<i>
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 62,
    text:
      `
        В кафе «У Полсон» Маргарита и Дилан провели не более получаса.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 63,
    text:
      `
        Девушка никогда не позволяла себе задерживаться на обеде, и почти весь приём пищи изводила мужчину фразами о том, сколько же работы их ждёт и как много времени они тратят на «всякую ерунду». 
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 64,
    text:
      `
        Дом встретил детектива тьмой и беспощадным одиночеством. Квартира полностью олицетворяла своего жильца — погружённая в полумрак, прохладная, аскетично обставленная. 
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    message: 'Спустя шесть часов беспрерывной работы…',
    music: require('../../../../Sounds/MM/Darkness.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 65,
    text:
      `
        В прихожей с утра остался лёгкий бардак — хаотично разбросанная обувь у входа, открытая дверца шкафа, пустая бутылка воды перед пуфиком. 
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 66,
    text:
      `
        В последнее время Маргарита и правда работала без остановки — времени на порядок не оставалось совершенно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 67,
    text:
      `
        Работа… Детектив любила свою сферу деятельности всей душой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 68,
    text:
      `
        Загадки, анализ, слежки, отчёты. 
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 69,
    text:
      `
        Разрушенные судьбы, спасённые жизни, прохладная рукоять пистолета в руке и пульсирующий в висках адреналиновый пульс…
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 70,
    text:
      `
        Да, Маргарита <i>жила<i/> этим делом. Но трудоголизм нещадно настиг её, выбив из реальности ударом под дых. Моргнуть не успела, как неделя уже подошла к концу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 71,
    text:
      `
        Вспомнились слова Дилана о собственном «потерянном» состоянии. Девушка нервно выдохнула.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 72,
    text:
      `
        <i>«Проклятье, как я умудрилась пропустить коллегиальный турнир по теннису? Весь прошлый месяц тренировалась, хотела выйти в финал, но из-за заседания суда не успела на него попасть…»<i>
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 73,
    text:
      `
        Бросив ключи на тумбочку, Маргарита принялась расшнуровывать ботинки. Взгляд зацепился за небольшой клочок бумаги у коврика.
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 74,
    text:
      `
        — Что тут у нас, счёт за электричество ветром с подъезда задуло?
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 75,
    text:
      `
        Нагнувшись за находкой, детектив подняла листок. Включив общий свет, пробежалась глазами по чуть пляшущим строчкам. Каждое последующее слово вынуждало замедлиться, перечитать, <i>осознать<i>.
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 76,
    text:
      `
        Смысл написанного не на шутку напряг. Жёсткий взгляд карих глаз на миг устремился вперёд, цепляя глазами стену. Маргарита стиснула челюсти и медленно выдохнула, возвращая разуму ясность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 77,
    text:
      `
        <i>23.09.2022<p>«Детектив, взываю о помощи именно к Вам, ведь персонализированная статистика говорит сама за себя: 125 раскрытых дел, 58 выигранных заседаний и ни единого промаха. Готовы взяться за очередную загадку?»<i>
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    message: 'По мере продвижения сюжета вы будете сталкиваться с предметами, которые помогут в расследовании. Найденные улики попадут в ваш инвентарь',
    imageFront: require('../../../../Images/MM/Objects/Burnt_Letter.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Item', id: 'BurntMessage' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 78,
    text:
      `
        <i>«Вверяю судьбу Томаса Брауна в Ваши руки и искренне желаю, чтобы это дело пополнило копилку успешно завершённых расследований».<i>
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    imageFront: require('../../../../Images/MM/Objects/Burnt_Letter.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 79,
    text:
      `
        <i>«В парке у излюбленного Вами кафе «У Полсон» (где вы наверняка сегодня уже вкусно отобедали с Диланом, не так ли?), рядом с памятником Вы обнаружите украшение».<i>
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageFront: require('../../../../Images/MM/Objects/Burnt_Letter.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 80,
    text:
      `
        <i>«Маргарита, Вы целую неделю проходили с одной серьгой в ухе и даже не заметили пропажу. Профдеформация или переутомление? Постарайтесь порыться в том месте и откопаете…»<i>
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageFront: require('../../../../Images/MM/Objects/Burnt_Letter.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 81,
    text:
      `
        <i>«Увы, не клад, но кое-что более занимательное — труп всеми известного бизнесмена».<i>
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageFront: require('../../../../Images/MM/Objects/Burnt_Letter.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 82,
    text:
      `
        <i>«Помните — убийцей может оказаться совершенно любой человек. Даже тот, в ком вы станете сомневаться в последний момент. Не доверяйте напрасно».<i>
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    imageFront: require('../../../../Images/MM/Objects/Burnt_Letter.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 83,
    text:
      `
        <i>«Ваш покорный слуга, Д».<i>
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageFront: require('../../../../Images/MM/Objects/Burnt_Letter.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 84,
    text:
      `
        Рука Маргариты машинально взметнулась к уху. Детектив рвано вздохнула, прикрыв на мгновение глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 85,
    text:
      `
        Пальцы нащупали мочку — серьги в ней не оказалось.
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 86,
    text:
      `
        Девушка напряглась, в пальцах наметилась дрожь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 87,
    text:
      `
        Стараясь взять себя в руки, детектив глубоко задышала, считая в уме от одного до десяти и обратно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 88,
    text:
      `
        <i>«Мне следует успокоиться и решить, как быть с этим дальше…»<i>
      `,
    buttons: [
      {
        text: 'Позвонить начальству',
        goTo: 89
      },
      {
        text: 'Ехать к Дилану',
        goTo: 91
      }],
    message: 'Каждый детектив в процессе работы опирается на свой метод ведения расследования. Кому-то ближе логика и сухие факты, для кого-то весомее внутреннее чутьё. Выбирайте тот путь, который Вам ближе. Это повлияет на финал',
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 89,
    text:
      `
        Набрав Артуру, Маргарита продолжала стоять на пороге с запиской в руке, вслушиваясь в монотонные гудки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Effect', id: 'Instinct' },
      { story: EStoriesEn.MM, value: +1, category: 'Choice', id: 'CallBoss' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 90,
    text:
      `
        Добив до конца, девушку поприветствовал автоответчик. 
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 91,
    text:
      `
        <i>«Сначала расскажу обо всём Дилану. Вдруг это просто чья-то неудачная шутка? Пока рано подключать руководство».<i>
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Effect', id: 'Analyse' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 92,
    text:
      `
        С трудом уняв не вовремя подскочивший пульс, детектив резко выскочила из квартиры и, хлопнув дверью, кинулась по ступеням вниз.
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 93,
    text:
      `
        Ноги интуитивно вело по пролётам, пока пальцы быстро перебирали контакты. Найдя нужный, Маргарита ткнула в экран на заветное имя — Дилан.
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Flat_Stairs.jpg')
  },

  {
    id: 94,
    text:
      `
        <i>«Пожалуйста, ответь! Или хотя бы окажись дома!»<i>
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Flat_Stairs.jpg')
  },

  {
    id: 95,
    text:
      `
        Гудки тянулись громко и медленно, раздражая слух. Девушка лихорадочно размышляла. 
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Flat_Stairs.jpg')
  },

  {
    id: 96,
    text:
      `
        Как проникли в квартиру? Кто? И, главное — при чём здесь её серьга? 
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Flat_Stairs.jpg')
  },

  {
    id: 97,
    text:
      `
        <i>«Это подстава? Или попытка вовлечь в дело? Чёрт!»<i>
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Flat_Stairs.jpg')
  },

  {
    id: 98,
    text:
      `
        Нервы играли на мыслях, путая их. Внезапно затронувшая лично её ситуация угнетала, мешала сосредоточиться и выстроить чёткий порядок действий.
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Flat_Stairs.jpg')
  },

  {
    id: 99,
    text:
      `
        <i>«Мало мне было проблем и забот?»<i/>
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Flat_Stairs.jpg')
  },

  {
    id: 100,
    text:
      `
        Парк. «У Полсон». Памятник. Серьга. Срочно…
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Flat_Stairs.jpg')
  },

  {
    id: 101,
    text:
      `
        Маргарита не любила играть вслепую. Её злили ловушки, но интриговали загадки. Девушка намеревалась найти «смельчака», чтобы донести до него как можно чётче.
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Flat_Stairs.jpg')
  },

  {
    id: 102,
    text:
      `
        Если указанное в записке — правда, детектив обязательно возьмётся за это дело. Не ради очередной победы, нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Flat_Stairs.jpg')
  },

  {
    id: 103,
    text:
      `
        Маргарита раскроет его, чтобы показать незнакомцу: она не играет в чужие игры. И в этом расследовании правила будут установлены ею.
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Flat_Stairs.jpg')
  },

  {
    id: 104,
    text:
      `
        Впереди очередная загадка, которую Маргарита решительно настроена разгадать. Получится ли? Кто знает…
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('MM', 'Глава 1', 'Часть 1', '1')
        }
      }],
    achievement: { story: EStoriesEn.MM, name: 'PrologueCompleted' },
    imageBack: require('../../../../Images/MM/Backgrounds/Flat_Stairs.jpg')
  }
])
