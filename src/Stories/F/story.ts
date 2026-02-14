import { scenarioManager, statsManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'F',
  image: require('../../Media/Images/F/Covers/Story_Cover.jpg'),
  video: require('../../Media/Images/F/Covers/Story_Cover.mp4'),
  title: require('../../Media/Images/F/Covers/Title.svg'),
  description:
    'Увязнув в повседневной рутине, Константин потерял ощущение радости. Находка таинственной музыкальной шкатулки переворачивает всё с ног на голову. Герою предстоит решить: вернуть прежнюю жизнь или начать новую? Понять, что счастье — выбор каждого, а не судьба.',
  genre: 'Драма',
  mature: false,
  status: 'Спешл',
  chapters: [
    {
      name: 'Спешл',
      image: require('../../Media/Images/F/Covers/Part01Cover.jpg'),
      parts: [
        {
          name: 'Часть 1',
          code: '0',
          image: require('../../Media/Images/F/Backgrounds/Inside_Tent.jpg'),
          loadingImage: require('../../Media/Images/F/Covers/Part01.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
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
