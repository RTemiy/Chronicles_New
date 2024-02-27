import { scenarioManager, storiesManager } from '../../index';

storiesManager.add({
  name: 'AEP',
  video: require('../../Images/AEP/Covers/Story_Cover.mp4'),
  description:
    'Всего нужен миг, чтобы спокойная жизнь превратилась в хаос. Главная героиня попадает в водоворот интриг, страсти и криминала в самом сердце Италии. Опасность и предательства поджидают на каждом углу. Игра началась!',
  genre: 'Повседневность, Эротика',
  mature: true,
  chapters: [
    {
      name: 'Глава 1',
      image: require('../../Images/AEP/Backgrounds/University.jpg'),
      parts: [
        {
          name: 'Пролог',
          code: '0',
          image: require('../../Images/AEP/Backgrounds/Col.jpg'),
          loadingImage: require('../../Images/AEP/Covers/Prologue.png'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          }
        },
        {
          name: 'Скоро',
          code: '0',
          image: require('../../Images/UI/background.png'),
          loadingImage: require('../../Images/AEP/Covers/Prologue.png'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          }
        }
      ]
    }
  ]
})
