import { scenarioManager, statsManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'F',
  image: require('../../Images/F/Covers/Story_Cover.jpg'),
  video: require('../../Images/F/Covers/Story_Cover.mp4'),
  title: require('../../Images/F/Covers/Title.png'),
  description:
    'Увязнув в повседневной рутине, Константин потерял ощущение радости. Находка таинственной музыкальной шкатулки переворачивает всё с ног на голову. Герою предстоит решить: вернуть прежнюю жизнь или начать новую? Понять, что счастье — выбор каждого, а не судьба.',
  genre: 'Драма',
  mature: false,
  status: 'Спешл',
  chapters: [
    {
      name: 'Счастье?',
      image: require('../../Images/UI/background.png'),
      parts: [
        {
          name: 'Повседневность',
          code: '0',
          image: require('../../Images/UI/background.png'),
          loadingImage: require('../../Images/Immortals/Covers/Part01.png'),
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
