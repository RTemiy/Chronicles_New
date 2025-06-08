import { scenarioManager, statsManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'MM',
  image: require('../../Images/MM/Covers/Story_Cover.jpg'),
  video: require('../../Images/MM/Covers/Story_Cover.mp4'),
  title: require('../../Images/MM/Covers/Title.png'),
  description:
    'Успешный детектив по имени Маргарита обнаруживает в своем доме таинственную записку, раскрывающую убийство богатого бизнесмена. Она принимает вызов, погружаясь в тернии запутанного следствия. Как не стать пешкой в играх разума и понять, кто является ключом к разгадке?',
  genre: 'Детектив, Психологическая драма, Триллер',
  mature: true,
  chapters: [
    {
      name: 'Глава 1',
      image: require('../../Images/MM/Covers/Chapter01.jpg'),
      parts: [
        {
          name: 'Пролог',
          code: '0',
          image: require('../../Images/MM/Backgrounds/London_Street.jpg'),
          loadingImage: require('../../Images/MM/Covers/Prologue.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          }
        },
        {
          name: 'Часть 1',
          code: '0',
          image: require('../../Images/MM/Backgrounds/Watchroom.jpg'),
          loadingImage: require('../../Images/MM/Covers/Part01.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        },
        {
          name: 'Часть 2',
          code: '0',
          image: require('../../Images/MM/Backgrounds/Margo_Bedroom.jpg'),
          loadingImage: require('../../Images/MM/Covers/Part02.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        },
        {
          name: 'Часть 3',
          code: '0',
          image: require('../../Images/MM/Backgrounds/Countryhouse.jpg'),
          loadingImage: require('../../Images/MM/Covers/Part03.jpg'),
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
