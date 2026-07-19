import { scenarioManager, statsManager, storiesManager } from '../../index'

storiesManager.add({
  name: 'SFA',
  image: require('../../Media/Images/SFA/Covers/Story_Cover.jpg'),
  video: require('../../Media/Images/SFA/Covers/Story_Cover.mp4'),
  title: require('../../Media/Images/SFA/Covers/Title.png'),
  description:
    'Лишенная титула аристократка оказывается в эпицентре тайной войны ангелов и демонов. Одно ночное убийство втягивает ее в заговор и связывает судьбу с карателем в маске. Ей предстоит сделать выбор: смириться или сокрушить лживые дворы и вернуть свой кровавый венец.',
  genre: 'Романтика, Темное фэнтези, Драма',
  mature: true,
  status: 'Новая история',
  chapters: [
    {
      name: 'Глава 1',
      image: require('../../Media/Images/SFA/Covers/Chapter01.jpg'),
      parts: [
        {
          name: 'Пролог',
          code: '0',
          image: require('../../Media/Images/SFA/Covers/Prologue.jpg'),
          loadingImage: require('../../Media/Images/SFA/Covers/Prologue_LS.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
          }
        },
        /*{
          name: 'Часть 1',
          code: '0',
          image: require('../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg'),
          loadingImage: require('../../Media/Images/ITLH/Covers/Chapter01Part01.jpg'),
          event: (storyName: string, chapterName: string, partName: string, code: string) => {
            scenarioManager.setCurrentScenarioName(storyName, chapterName, partName, code, true)
            statsManager.loadStats(false, storyName, chapterName, partName, code)
          }
        },*/
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
