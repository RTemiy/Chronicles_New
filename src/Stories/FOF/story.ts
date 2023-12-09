import { scenarioManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'FOF',
  image: require('../../Images/FOF/Covers/Story_Cover.png'),
  description: 'Кассандра наслаждается находиться в центре внимания и готовится стать королевой бала. Но несчастный случай заставит девушку согласиться на сделку, которая изменит ее судьбу. Сможет ли она прожить чужую жизнь, отличить настоящее от воспоминаний, и раскрыть потенциал, который заложен в новом для нее теле?',
  genre: 'Фэнтези, Драма',
  mature: true,
  status: 'Новая история',
  chapters: [{
    name: 'Глава 1',
    image: require('../../Images/FOF/Persons/Cassandra.jpg'),
    parts: [{
      name: 'Пролог',
      code: '0',
      image: require('../../Images/FOF/Backgrounds/Football_Field.jpg'),
      loadingImage: require('../../Images/FOF/Covers/Prologue.jpg'),
      event: (storyName: string, chapterName: string, partName: string, code: string) => {
        scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
      }
    }]
  }]
})
