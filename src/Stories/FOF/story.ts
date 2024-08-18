import { scenarioManager, statsManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'FOF',
  video: require('../../Images/FOF/Covers/Story_Cover.mp4'),
  title: require('../../Images/FOF/Covers/Title.png'),
  description: 'Кассандра наслаждается находиться в центре внимания и готовится стать королевой бала. Но несчастный случай заставит девушку согласиться на сделку, которая изменит ее судьбу. Сможет ли она прожить чужую жизнь, отличить настоящее от воспоминаний, и раскрыть потенциал, который заложен в новом для нее теле?',
  genre: 'Фэнтези, Драма',
  mature: true,
  chapters: [{
    name: 'Глава 1',
    image: require('../../Images/FOF/Backgrounds/Night_Streets.jpg'),
    parts: [
      {
        name: 'Пролог',
        code: '0',
        image: require('../../Images/FOF/Backgrounds/Gym.jpg'),
        loadingImage: require('../../Images/FOF/Covers/Prologue.jpg'),
        event: (storyName: string, chapterName: string, partName: string, code: string) => {
          scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
        }
      },
      {
        name: 'Часть 1',
        code: '0',
        image: require('../../Images/FOF/Covers/Cover_Part01.jpg'),
        loadingImage: require('../../Images/FOF/Covers/Part01.jpg'),
        event: (storyName: string, chapterName: string, partName: string, code: string) => {
          scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          statsManager.loadStats(false, storyName, chapterName, partName, code)
        }
      },
      {
        name: 'Часть 2',
        code: '0',
        image: require('../../Images/FOF/Backgrounds/Classroom.jpg'),
        loadingImage: require('../../Images/FOF/Covers/Part02.jpg'),
        event: (storyName: string, chapterName: string, partName: string, code: string) => {
          scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          statsManager.loadStats(false, storyName, chapterName, partName, code)
        }
      },
      {
        name: 'Часть 3',
        code: '0',
        image: require('../../Images/FOF/Backgrounds/Facade_Far.jpg'),
        loadingImage: require('../../Images/FOF/Covers/Part03.jpg'),
        event: (storyName: string, chapterName: string, partName: string, code: string) => {
          scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          statsManager.loadStats(false, storyName, chapterName, partName, code)
        }
      },
      {
        name: 'Часть 4',
        code: '0',
        image: require('../../Images/FOF/Backgrounds/Club.jpg'),
        loadingImage: require('../../Images/FOF/Covers/Part04.jpg'),
        event: (storyName: string, chapterName: string, partName: string, code: string) => {
          scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          statsManager.loadStats(false, storyName, chapterName, partName, code)
        }
      },
      {
        name: 'Скоро',
        code: '0',
        image: require('../../Images/UI/background.png'),
        loadingImage: require('../../Images/FOF/Covers/Part01.jpg'),
        event: (storyName: string, chapterName: string, partName: string, code: string) => {
          scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          statsManager.loadStats(false, storyName, chapterName, partName, code)
        }
      }
    ]
  }]
})
