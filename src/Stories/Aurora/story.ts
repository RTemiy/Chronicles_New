import { scenarioManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'Aurora',
  image: require('../../Images/Aurora/Covers/Story_Cover.png'),
  description:
    'Когда-то вампиры считались мифом, однако нашей героине во время поисков своего брата, пришлось столкнуться с монстрами лицом к лицу. Теперь она невольно втянута в противостояние вампиров и людей, где ей предстоит распутать не один клубок тайн.',
  genre: 'Драма, Вампиры',
  chapters: [
    {
      name: 'Глава 1',
      image: require('../../Images/Aurora/Backgrounds/Lighthouse.png'),
      parts: [
        {
          name: 'Пролог',
          code: '0',
          image: require('../../Images/Aurora/Backgrounds/Writing.png'),
          loadingImage: require('../../Images/Aurora/Covers/Prologue.png'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          }
        },
        {
          name: 'Часть 1',
          code: '0',
          image: require('../../Images/Aurora/Backgrounds/House_Inside.png'),
          loadingImage: require('../../Images/Aurora/Covers/Part01.png'),
          event: () => {}
        },
        {
          name: 'Часть 2',
          code: '0',
          image: require('../../Images/Aurora/Backgrounds/Univer.png'),
          loadingImage: require('../../Images/Aurora/Covers/Part02.png'),
          event: () => {}
        },
        {
          name: 'Часть 3',
          code: '0',
          image: require('../../Images/Aurora/Backgrounds/SW_Streets.png'),
          loadingImage: require('../../Images/Aurora/Covers/Part03.png'),
          event: () => {}
        },
        {
          name: 'Часть 4',
          code: '0',
          image: require('../../Images/Aurora/Backgrounds/Bakery.png'),
          loadingImage: require('../../Images/Aurora/Covers/Part04.png'),
          event: () => {}
        }
      ]
    }
  ]
})
