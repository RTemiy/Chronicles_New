import { scenarioManager, statsManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'ITLH',
  image: require('../../Media/Images/ITLH/Covers/Story_Cover.jpg'),
  video: require('../../Media/Images/ITLH/Covers/Story_Cover.mp4'),
  title: require('../../Media/Images/ITLH/Covers/Title.png'),
  description:
    'Волею судьбы студентка была втянута в распри богов и бессмертных. Вам предстоит распутать множество тайн, встречаться с реальными историческими личностями, менять ход истории и понять: так ли прекрасна вечная жизнь?',
  genre: 'Романтика, Фантастика',
  mature: true,
  status: 'Обновление истории',
  chapters: [
    {
      name: 'Глава 1',
      image: require('../../Media/Images/ITLH/Covers/Chapter01.jpg'),
      parts: [
        {
          name: 'Пролог',
          code: '0',
          image: require('../../Media/Images/ITLH/Backgrounds/Guides_World.jpg'),
          loadingImage: require('../../Media/Images/ITLH/Covers/Prologue.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          }
        },
        {
          name: 'Часть 1',
          code: '0',
          image: require('../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg'),
          loadingImage: require('../../Media/Images/ITLH/Covers/Chapter01Part01.jpg'),
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
