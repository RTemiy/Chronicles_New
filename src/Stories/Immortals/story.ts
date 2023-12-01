import {scenarioManager, statsManager, storiesManager} from '../../index'

storiesManager.add({
  name: 'Immortals',
  image: require('../../Images/Immortals/Covers/Story_Cover.png'),
  description: 'Волею судьбы студентка была втянута в распри богов и бессмертных. Вам предстоит распутать множество тайн, встречаться с реальными историческими личностями, менять ход истории и понять: так ли прекрасна вечная жизнь?',
  genre: 'Романтика, Фантастика',
  mature: true,
  status: 'Новая часть',
  chapters: [{
    name: 'Глава 1',
    image: require('../../Images/Immortals/Persons/Stranger.png'),
    parts: [{
      name: 'Пролог',
      code: '0',
      image: require('../../Images/Immortals/Backgrounds/Abstraction_Hero.png'),
      loadingImage: require('../../Images/Immortals/Covers/Prologue.png'),
      event: (storyName: string, chapterName: string, partName: string, code: string) => {
        scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code)
      }
    },
    {
      name: 'Часть 1',
      code: '0',
      image: require('../../Images/Immortals/Backgrounds/Lection.png'),
      loadingImage: require('../../Images/Immortals/Covers/Part01.png'),
      event: (storyName: string, chapterName: string, partName: string, code: string) => {
        scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code)
        statsManager.loadStats(false, storyName, chapterName, partName, code)
      }
    },
    {
      name: 'Часть 2',
      code: '0',
      image: require('../../Images/Immortals/Backgrounds/NY.png'),
      loadingImage: require('../../Images/Immortals/Covers/Part02.png'),
      event: () => {}
    },
    {
      name: 'Часть 3',
      code: '0',
      image: require('../../Images/Immortals/Backgrounds/Pompeii.png'),
      loadingImage: require('../../Images/Immortals/Covers/Part03.png'),
      event: () => {}
    },
    {
      name: 'Часть 4',
      code: '0',
      image: require('../../Images/Immortals/Backgrounds/Ball.png'),
      loadingImage: require('../../Images/Immortals/Covers/Part04.png'),
      event: () => {}
    },
    {
      name: 'Часть 5',
      code: '0',
      image: require('../../Images/Immortals/Backgrounds/Lake.png'),
      loadingImage: require('../../Images/Immortals/Covers/Part05.png'),
      event: () => {}
    },
    {
      name: 'Часть 6',
      code: '0',
      image: require('../../Images/Immortals/Backgrounds/Camp_Morning.png'),
      loadingImage: require('../../Images/Immortals/Covers/Part06.png'),
      event: () => {}
    }]
  }]
})

require('./scenarios/Prologue')
