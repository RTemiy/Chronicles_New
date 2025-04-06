import { scenarioManager, statsManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'UA',
  image: require('../../Images/UA/Covers/Story_Cover.jpg'),
  title: require('../../Images/UA/Covers/Title.png'),
  description:
    'Солдат-13, с детства обучаемая служить и исполнять приказы, попадает во внешний мир за стенами лаборатории. В место, не подчиняющееся заученным постулатам и законам. И теперь ей предстоит ответить на вопрос: как выжить в городе неона и прогресса, если единственный ее навык — убивать?',
  genre: 'Киберпанк, Драма',
  mature: true,
  chapters: [
    {
      name: 'Глава 1',
      image: require('../../Images/UA/Backgrounds/Soldier_Room.jpg'),
      parts: [
        {
          name: 'Пролог',
          code: '0',
          image: require('../../Images/UA/Backgrounds/Nova_Beginning.jpg'),
          loadingImage: require('../../Images/UA/Covers/Prologue_LS.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          }
        },
        {
          name: 'Часть 1',
          code: '0',
          image: require('../../Images/UA/Backgrounds/Nova_Street.jpg'),
          loadingImage: require('../../Images/UA/Covers/Part01_LS.jpg'),
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
