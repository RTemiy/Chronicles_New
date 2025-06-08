import { scenarioManager, statsManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'UL',
  image: require('../../Images/UL/Covers/Story_Cover.jpg'),
  video: require('../../Images/UL/Covers/Story_Cover.mp4'),
  title: require('../../Images/UL/Covers/Title.png'),
  description: 'Прогулка с подругой заканчивается для героини в больнице. Но это еще не все: каждое лицо кажется теперь чужим. Кто ее друг, а кто враг — неизвестно. Что же ей делать: пытаться вернуть прошлую жизнь или обрести новую?',
  genre: 'Романтика, Драма',
  status: 'Временная история',
  chapters: [{
    name: 'Глава 1',
    image: require('../../Images/UL/Backgrounds/Rooftop.jpg'),
    parts: [
      {
        name: 'Часть 1',
        code: '0',
        image: require('../../Images/UL/Backgrounds/Icerink_Far.jpg'),
        loadingImage: require('../../Images/UL/Covers/Part01_LS.png'),
        event: (storyName: string, chapterName: string, partName: string, code: string) => {
          scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
        }
      },
      {
        name: 'Часть 2',
        code: '0',
        image: require('../../Images/UL/Backgrounds/Big_House.jpg'),
        loadingImage: require('../../Images/UL/Covers/Part02_LS.png'),
        event: (storyName: string, chapterName: string, partName: string, code: string) => {
          scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          statsManager.loadStats(false, storyName, chapterName, partName, code)
        }
      },
      {
        name: 'Часть 3',
        code: '0',
        image: require('../../Images/UL/Backgrounds/Garden.jpg'),
        loadingImage: require('../../Images/UL/Covers/Part03_LS.png'),
        event: (storyName: string, chapterName: string, partName: string, code: string) => {
          scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          statsManager.loadStats(false, storyName, chapterName, partName, code)
        }
      }
    ]
  }]
})
