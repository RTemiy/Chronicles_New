import { scenarioManager, statsManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'A',
  image: require('../../Media/Images/A/Covers/Story_Cover.jpg'),
  video: require('../../Media/Images/A/Covers/Story_Cover.mp4'),
  title: require('../../Media/Images/A/Covers/Title.png'),
  description:
    'На далёком маяке Аврора жила счастливо со своей семьёй, пока её любимый брат не пропал бесследно. В поисках разгадки девушка обнаруживает, что легенды о вампирах — не вымысел. Могущественные и загадочные, они видят в ней воплощение древнего пророчества, способного изменить ход их бессмертного существования.',
  genre: 'Вампиры, Драма',
  mature: true,
  status: 'Новая часть',
  chapters: [
    {
      name: 'Глава 1',
      image: require('../../Media/Images/A/Covers/Chapter01.png'),
      parts: [
        {
          name: 'Пролог',
          code: '0',
          image: require('../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg'),
          loadingImage: require('../../Media/Images/A/Covers/Prologue.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          }
        },
        /*{
          name: 'Часть 1',
          code: '0',
          image: require('../../Media/Images/A/Backgrounds/Lectionhall_01.jpg'),
          loadingImage: require('../../Media/Images/A/Covers/Chapter01Part01.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        },*/
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
