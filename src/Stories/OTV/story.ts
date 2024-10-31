import { scenarioManager, statsManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'OTV',
  video: require('../../Images/OTV/Covers/StoryCover.mp4'),
  title: require('../../Images/OTV/Covers/Title.png'),
  description:
    'В вечер Хэллоуина Ники решает идти на концерт, не подозревая, к чему это приведет. Столкнувшись с парнем, она проследила за ним, став свидетелем неприятного разговора, но уходить было поздно. В тот вечер девушка обрела новую жизнь, а вместе с ней и вопросы, на которые предстоит искать ответы в Академии.',
  genre: 'Фэнтези, Приключение, Драма',
  mature: true,
  status: 'Новая часть',
  chapters: [
    {
      name: 'Глава 1',
      image: require('../../Images/OTV/Backgrounds/Concert.jpg'),
      parts: [
        {
          name: 'Пролог',
          code: '0',
          image: require('../../Images/OTV/Backgrounds/Concert.jpg'),
          loadingImage: require('../../Images/OTV/Covers/Prologue.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          }
        },
        {
          name: 'Часть 1',
          code: '0',
          image: require('../../Images/OTV/Backgrounds/Livingroom_Evening.jpg'),
          loadingImage: require('../../Images/OTV/Covers/Part01.jpg'),
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
