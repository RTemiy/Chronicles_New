import { scenarioManager, statsManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'ROR',
  video: require('../../Images/ROR/Covers/Story_Cover.mp4'),
  description: 'Страну Крейс поразила страшная болезнь - чума. В условиях эпидемии Генрих работает контрабандистом, переправляя нуждающихся за границу. Однажды к нему обратилась группа беженцев. Начавшееся приключение перевернет не только судьбы героев, но и всей страны.',
  genre: 'Фэнтези, Приключение',
  mature: true,
  status: 'Новая часть',
  chapters: [
    {
      name: 'Глава 1',
      image: require('../../Images/ROR/Backgrounds/Central_Square.jpg'),
      parts: [
        {
          name: 'Пролог',
          code: '0',
          image: require('../../Images/ROR/Backgrounds/Mortimer_Cabinet.jpg'),
          loadingImage: require('../../Images/ROR/Covers/Prologue.png'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          }
        },
        {
          name: 'Часть 1',
          code: '0',
          image: require('../../Images/ROR/Backgrounds/Glaswer_Gates.jpg'),
          loadingImage: require('../../Images/ROR/Covers/Part01.png'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        },
        {
          name: 'Часть 2',
          code: '0',
          image: require('../../Images/ROR/Backgrounds/Chapel_Fire.jpg'),
          loadingImage: require('../../Images/ROR/Covers/Part02.png'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        },
        {
          name: 'Часть 3',
          code: '0',
          image: require('../../Images/ROR/Backgrounds/Tavern.jpg'),
          loadingImage: require('../../Images/ROR/Covers/Part03.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        },
        {
          name: 'Скоро',
          code: '0',
          image: require('../../Images/UI/background.png'),
          loadingImage: require('../../Images/ROR/Covers/Part02.png'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        }
      ]
    }
  ]
})
