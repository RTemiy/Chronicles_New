import { scenarioManager, statsManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'Immortals',
  image: require('../../Images/Immortals/Covers/Story_Cover.jpg'),
  video: require('../../Images/Immortals/Covers/Story_Cover.mp4'),
  title: require('../../Images/Immortals/Covers/Title.png'),
  description:
    'Волею судьбы студентка была втянута в распри богов и бессмертных. Вам предстоит распутать множество тайн, встречаться с реальными историческими личностями, менять ход истории и понять: так ли прекрасна вечная жизнь?',
  genre: 'Романтика, Фантастика',
  mature: true,
  chapters: [
    {
      name: 'Глава 1',
      image: require('../../Images/Immortals/Backgrounds/Tesla_Door.jpg'),
      parts: [
        {
          name: 'Пролог',
          code: '0',
          image: require('../../Images/Immortals/Backgrounds/Guides_World.jpg'),
          loadingImage: require('../../Images/Immortals/Covers/Prologue.png'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          }
        },
        {
          name: 'Часть 1',
          code: '0',
          image: require('../../Images/Immortals/Backgrounds/Lection_Hall.jpg'),
          loadingImage: require('../../Images/Immortals/Covers/Part01.png'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        },
        {
          name: 'Часть 2',
          code: '0',
          image: require('../../Images/Immortals/Backgrounds/NY_1885.jpg'),
          loadingImage: require('../../Images/Immortals/Covers/Part02.png'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        },
        {
          name: 'Часть 3',
          code: '0',
          image: require('../../Images/Immortals/Backgrounds/Flowerfield.jpg'),
          loadingImage: require('../../Images/Immortals/Covers/Part03.png'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        },
        {
          name: 'Часть 4',
          code: '1',
          image: require('../../Images/Immortals/Backgrounds/Ball_Hall.jpg'),
          loadingImage: require('../../Images/Immortals/Covers/Part04.png'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        },
        {
          name: 'Скоро',
          code: '0',
          image: require('../../Images/UI/background.png'),
          loadingImage: require('../../Images/Immortals/Covers/Part01.png'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        }
      ]
    }
  ]
})
