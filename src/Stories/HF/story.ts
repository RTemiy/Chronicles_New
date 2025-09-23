import { scenarioManager, statsManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'HF',
  image: require('../../Images/HF/Covers/Story_Cover.jpg'),
  video: require('../../Images/Immortals/Covers/Story_Cover.mp4'),
  title: require('../../Images/HF/Covers/Title.png'),
  description:
    'Страны запада и востока объединяются в борьбе за создание оружия нового поколения. Солдат спец-отряда "Гамлет" отправляется на военную базу противника, чтобы раздобыть любую информацию, которая сможет предотвратить катастрофу мирового масштаба.',
  genre: 'Боевик, Триллер',
  mature: true,
  status: 'Спешл',
  chapters: [
    {
      name: 'Глава 1',
      image: require('../../Images/HF/Backgrounds/Slide_Earth.jpg'),
      parts: [
        {
          name: 'Инструктаж',
          code: '0',
          image: require('../../Images/HF/Backgrounds/Slide_Jungle.jpg'),
          loadingImage: require('../../Images/HF/Covers/Prologue.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          }
        },
        {
          name: 'Высадка',
          code: '0',
          image: require('../../Images/Immortals/Backgrounds/Lection_Hall.jpg'),
          loadingImage: require('../../Images/Immortals/Covers/Part01.png'),
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
