import { scenarioManager, statsManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'Katarina',
  image: require('../../Media/Images/Katarina/Covers/Story_Cover.jpg'),
  video: require('../../Media/Images/Katarina/Covers/Story_Cover.mp4'),
  title: require('../../Media/Images/Katarina/Covers/Title.png'),
  description:
    'Роберт приезжает в Нью-Йорк в поисках правды о монстрах и того, кто за всем этим стоит. Городская жизнь поглощает его, а новые знакомые не дадут заскучать.',
  genre: 'Романтика, Фантастика',
  mature: true,
  status: 'Временная история',
  chapters: [
    {
      name: 'Глава 1',
      image: require('../../Media/Images/Katarina/Backgrounds/Theatre_Scene.jpg'),
      parts: [
        {
          name: 'Часть 1',
          code: '0',
          image: require('../../Media/Images/Katarina/Backgrounds/NY.jpg'),
          loadingImage: require('../../Media/Images/Katarina/Covers/Prologue_LS.png'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          }
        },
        /*{
          name: 'Часть 2',
          code: '0',
          image: require('../../Images/Immortals/Backgrounds/Lection_Hall.jpg'),
          loadingImage: require('../../Images/Immortals/Covers/Part01.png'),
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
