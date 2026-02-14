import { scenarioManager, statsManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'TDP',
  image: require('../../Media/Images/TDP/Covers/Story_Cover.jpg'),
  video: require('../../Media/Images/TDP/Covers/Story_Cover.mp4'),
  title: require('../../Media/Images/TDP/Covers/Title.png'),
  description:
    'Страну Крейс поразила страшная болезнь — чума. В условиях эпидемии Генрих работает контрабандистом, переправляя нуждающихся за границу. Но все меняется, когда к нему за помощью обращается группа беженцев. Начавшееся приключение перевернет не только судьбы героев, но и всего мира. ',
  genre: 'Фэнтези, Приключение',
  mature: true,
  status: 'Обновление истории',
  chapters: [
    {
      name: 'Глава 1',
      image: require('../../Media/Images/TDP/Backgrounds/Street_Bodies.jpg'),
      parts: [
        {
          name: 'Пролог',
          code: '0',
          image: require('../../Media/Images/TDP/Backgrounds/Mortimer_Tablet.jpg'),
          loadingImage: require('../../Media/Images/TDP/Covers/Prologue.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          }
        },
        {
          name: 'Часть 1',
          code: '0',
          image: require('../../Media/Images/TDP/Backgrounds/City_Gates_Closed.png'),
          loadingImage: require('../../Media/Images/TDP/Covers/Chapter01Part01.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        },
        {
          name: 'Скоро',
          code: '0',
          image: require('../../Media/Images/UI/background.png'),
          loadingImage: require('../../Media/Images/TDP/Covers/Prologue.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        }
      ]
    }
  ]
})
