import { scenarioManager, statsManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'MM',
  image: require('../../Media/Images/MM/Covers/Story_Cover.jpg'),
  video: require('../../Media/Images/MM/Covers/Story_Cover.mp4'),
  title: require('../../Media/Images/MM/Covers/Title.png'),
  description:
    'Старший детектив Маргарита обнаруживает у себя дома таинственную записку с информацией об убийстве известного бизнесмена. Девушка оказывается в центре опасной игры, где каждый ход может стать решающим. Получится ли у неё раскрыть это дело, не потеряв при этом себя?',
  genre: 'Детектив, Психологическая драма, Триллер',
  mature: true,
  status: 'Новая часть',
  chapters: [
    {
      name: 'Глава 1',
      image: require('../../Media/Images/MM/Covers/Chapter01.jpg'),
      parts: [
        {
          name: 'Пролог',
          code: '1',
          image: require('../../Media/Images/MM/Backgrounds/London_Street.jpg'),
          loadingImage: require('../../Media/Images/MM/Covers/Prologue.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          }
        },
        {
          name: 'Часть 1',
          code: '1',
          image: require('../../Media/Images/MM/Backgrounds/Dark_Park.jpg'),
          loadingImage: require('../../Media/Images/MM/Covers/Part01.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        },
        {
          name: 'Часть 2',
          code: '1',
          image: require('../../Media/Images/MM/Backgrounds/Interrogation_Room.jpg'),
          loadingImage: require('../../Media/Images/MM/Covers/Part02.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        },
        {
          name: 'Скоро',
          code: '0',
          image: require('../../Media/Images/UI/background.png'),
          loadingImage: require('../../Media/Images/ITLH/Covers/Chapter01Part01.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        }
      ]
    }
  ]
})
