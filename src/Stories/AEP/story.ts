import { scenarioManager, statsManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'AEP',
  video: require('../../Images/AEP/Covers/Story_Cover.mp4'),
  title: require('../../Images/AEP/Covers/Title.png'),
  description:
    'Всего нужен миг, чтобы спокойная жизнь превратилась в хаос. Главная героиня попадает в водоворот интриг, страсти и криминала в самом сердце Италии. Опасность и предательства поджидают на каждом углу. Игра началась!',
  genre: 'Повседневность, Эротика',
  status: 'Новая часть',
  mature: true,
  chapters: [
    {
      name: 'Глава 1',
      image: require('../../Images/AEP/Backgrounds/University.jpg'),
      parts: [
        {
          name: 'Пролог',
          code: '0',
          image: require('../../Images/AEP/Backgrounds/Col.jpg'),
          loadingImage: require('../../Images/AEP/Covers/Prologue.png'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          }
        },
        {
          name: 'Часть 1',
          code: '0',
          image: require('../../Images/AEP/Backgrounds/Penthouse_Party.jpg'),
          loadingImage: require('../../Images/AEP/Covers/Part01.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        },
        {
          name: 'Часть 2',
          code: '0',
          image: require('../../Images/AEP/Backgrounds/Uni_Hall.jpg'),
          loadingImage: require('../../Images/AEP/Covers/Part02.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        },
        {
          name: 'Скоро',
          code: '0',
          image: require('../../Images/UI/background.png'),
          loadingImage: require('../../Images/AEP/Covers/Prologue.png'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          }
        }
      ]
    }
  ]
})
