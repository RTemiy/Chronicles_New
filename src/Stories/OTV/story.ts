import { scenarioManager, statsManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'OTV',
  image: require('../../Media/Images/OTV/Covers/Story_Cover.jpg'),
  video: require('../../Media/Images/OTV/Covers/Story_Cover.mp4'),
  title: require('../../Media/Images/OTV/Covers/Title.png'),
  description:
    'В вечер Хэллоуина Ники решает идти на концерт, не подозревая, к чему это приведет. Столкнувшись с парнем, она проследила за ним, став свидетелем неприятного разговора, но уходить было поздно. В тот вечер девушка обрела новую жизнь, а вместе с ней и вопросы, на которые предстоит искать ответы в Академии.',
  genre: 'Фэнтези, Приключение, Драма',
  mature: true,
  chapters: [
    {
      name: 'Глава 1',
      image: require('../../Media/Images/OTV/Backgrounds/Concert.jpg'),
      parts: [
        {
          name: 'Пролог',
          code: '0',
          image: require('../../Media/Images/OTV/Backgrounds/Concert.jpg'),
          loadingImage: require('../../Media/Images/OTV/Covers/Prologue.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          }
        },
        {
          name: 'Часть 1',
          code: '0',
          image: require('../../Media/Images/OTV/Backgrounds/Livingroom_Evening.jpg'),
          loadingImage: require('../../Media/Images/OTV/Covers/Part01.jpg'),
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
