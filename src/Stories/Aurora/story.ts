import { scenarioManager, statsManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'Aurora',
  video: require('../../Images/Aurora/Covers/Story_Cover.mp4'),
  description:
    'Когда-то вампиры считались мифом, однако нашей героине во время поисков своего брата, пришлось столкнуться с монстрами лицом к лицу. Теперь она невольно втянута в противостояние вампиров и людей, где ей предстоит распутать не один клубок тайн.',
  genre: 'Драма, Вампиры',
  chapters: [
    {
      name: 'Глава 1',
      image: require('../../Images/Aurora/Covers/Aurora_Lighthouse.png'),
      parts: [
        {
          name: 'Пролог',
          code: '0',
          image: require('../../Images/Aurora/Covers/Aurora_Writing.png'),
          loadingImage: require('../../Images/Aurora/Covers/Prologue.png'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          }
        },
        {
          name: 'Часть 1',
          code: '0',
          image: require('../../Images/Aurora/Covers/House_Inside.png'),
          loadingImage: require('../../Images/Aurora/Covers/Part01.png'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        },
        {
          name: 'Скоро',
          code: '0',
          image: require('../../Images/Aurora/Covers/House_Inside.png'),
          loadingImage: require('../../Images/Aurora/Covers/Part01.png'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        }
      ]
    }
  ]
})
