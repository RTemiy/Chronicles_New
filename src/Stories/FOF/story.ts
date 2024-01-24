import { scenarioManager, statsManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'FOF',
  video: require('../../Images/FOF/Covers/Story_Cover.mp4'),
  description: 'Кассандра наслаждается находиться в центре внимания и готовится стать королевой бала. Но несчастный случай заставит девушку согласиться на сделку, которая изменит ее судьбу. Сможет ли она прожить чужую жизнь, отличить настоящее от воспоминаний, и раскрыть потенциал, который заложен в новом для нее теле?',
  genre: 'Фэнтези, Драма',
  mature: true,
  status: 'Новая история',
  chapters: [{
    name: 'Глава 1',
    image: require('../../Images/FOF/Backgrounds/School_Corridor.jpg'),
    parts: [
      {
        name: 'Пролог',
        code: '0',
        image: require('../../Images/FOF/Backgrounds/Locker_Room.jpg'),
        loadingImage: require('../../Images/FOF/Covers/Prologue.jpg'),
        event: (storyName: string, chapterName: string, partName: string, code: string) => {
          scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
        }
      },
      {
        name: 'Часть 1',
        code: '0',
        image: require('../../Images/FOF/Backgrounds/Darkness.jpg'),
        loadingImage: require('../../Images/FOF/Covers/Part01.jpg'),
        event: (storyName: string, chapterName: string, partName: string, code: string) => {
          scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          statsManager.loadStats(false, storyName, chapterName, partName, code)
        }
      },
      {
        name: 'Скоро',
        code: '0',
        image: require('../../Images/FOF/Backgrounds/Abigail_Room.jpg'),
        loadingImage: require('../../Images/FOF/Covers/Prologue.jpg'),
        event: (storyName: string, chapterName: string, partName: string, code: string) => {
          scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          statsManager.loadStats(false, storyName, chapterName, partName, code)
        }
      }
    ]
  }]
})
