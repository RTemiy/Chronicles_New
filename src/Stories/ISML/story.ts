import { scenarioManager, statsManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'ISML',
  video: require('../../Images/ISML/Covers/Story_Cover.mp4'),
  title: require('../../Images/ISML/Covers/Title.png'),
  description: 'Окунувшись в закипающий мир молодости и достижений, Нина вдруг ощущает, как тени апатии и беспомощности медленно подкрадываются к ней. Тени начинают крушить ее жизнь, вынуждая бороться со своими внутренними демонами.',
  genre: 'Драма, Психология',
  mature: true,
  status: 'Новая история',
  chapters: [
    {
      name: 'Глава 1',
      image: require('../../Images/ISML/Covers/Chapter01.jpg'),
      parts: [
        {
          name: 'Пролог',
          code: '0',
          image: require('../../Images/ISML/Backgrounds/Hero_Room.jpg'),
          loadingImage: require('../../Images/ISML/Covers/Prologue.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          }
        },
        {
          name: 'Часть 1',
          code: '0',
          image: require('../../Images/ISML/Backgrounds/Metro.jpg'),
          loadingImage: require('../../Images/ISML/Covers/Part01.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        },
        {
          name: 'Скоро',
          code: '0',
          image: require('../../Images/UI/background.png'),
          loadingImage: require('../../Images/ISML/Covers/Prologue.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        }
      ]
    }
  ]
})
