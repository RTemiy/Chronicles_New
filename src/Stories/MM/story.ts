import { scenarioManager, statsManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'MM',
  video: require('../../Images/MM/Covers/Story_Cover.mp4'),
  description:
    'Успешный детектив по имени Маргарита обнаруживает в своем доме таинственную записку, раскрывающую убийство богатого бизнесмена. Она принимает вызов, погружаясь в тернии запутанного следствия. Как не стать пешкой в играх разума и понять, кто является ключом к разгадке?',
  genre: 'Детектив, Психологическая драма, Триллер',
  mature: true,
  status: 'Новая история',
  chapters: [
    {
      name: 'Глава 1',
      image: require('../../Images/MM/Backgrounds/Dark_Entrance.jpg'),
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
