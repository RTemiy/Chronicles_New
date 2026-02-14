import { scenarioManager, statsManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'PFT',
  image: require('../../Media/Images/PFT/Covers/Story_Cover.jpg'),
  video: require('../../Media/Images/PFT/Covers/Story_Cover.mp4'),
  title: require('../../Media/Images/PFT/Covers/Title.png'),
  description:
    'Венди собирается уйти от мужа и покончить с ролью жертвы. Но от тирана так легко не сбежать. Как доказать окружающим, что тебе не место в психиатрической лечебнице, куда запрятал некогда близкий человек, если наяву затягивает пугающая сказка?',
  genre: 'Мистика, Триллер, Ужасы',
  mature: true,
  status: 'Новая история',
  chapters: [
    {
      name: 'Глава 1',
      image: require('../../Media/Images/PFT/Backgrounds/Sky_Clouds.jpg'),
      parts: [
        {
          name: 'Пролог',
          code: '0',
          image: require('../../Media/Images/PFT/Backgrounds/Picture_Room.jpg'),
          loadingImage: require('../../Media/Images/PFT/Covers/Prologue.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          }
        },
        /*        {
          name: 'Часть 1',
          code: '0',
          image: require('../../Images/Immortals/Backgrounds/Lection_Hall.jpg'),
          loadingImage: require('../../Images/Immortals/Covers/Part01.png'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        }, */
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
