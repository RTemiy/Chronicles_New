import { achievementsManager, miniGameMemory, scenarioManager, statsManager } from '../index'
import { EStoriesEn } from '../Utils/EStoriesNames'
import showDebugger from '../Components/Debugger/Debugger'
import { showCaseSimulator } from '../Components/CaseSimulator/CaseSimulator'
import { tsv2array } from './tsv2array'
import { Slide } from '../Components/Slide/Slide'
import { currentState } from './backEventActions'

export function doCommand (input: string): void {
  const commands = input.split(' ')
  commands.forEach(rawCommand => {
    const command = rawCommand.split('_')
    switch (command[0]) {
      case 'slide':
        scenarioManager.beginScene(parseInt(command[1]))
        break
      case 'stat':
        statsManager.change({
          story: EStoriesEn[scenarioManager.getCurrentStory().split('_')[0]],
          category: command[1],
          id: command[2],
          value: parseInt(command[3])
        })
        break
      case 'debugger':
        showDebugger()
        break
      case 'MiniGameMemory':
        miniGameMemory.startNew(
          3,
          3,
          () => {},
          () => {},
          () => {},
          [
            require('../Media/Images/TDP/UI/MiniGameMemory/Tile01.png'),
            require('../Media/Images/TDP/UI/MiniGameMemory/Tile02.png'),
            require('../Media/Images/TDP/UI/MiniGameMemory/Tile03.png'),
            require('../Media/Images/TDP/UI/MiniGameMemory/Tile04.png')
          ],
          require('../Media/Images/TDP/UI/MiniGameMemory/BG.jpg')
        )
        break
      case 'CaseSimulator':
        showCaseSimulator()
        break
      case 'AchievementsList':
        achievementsManager.downloadCSV()
        break
      case 't2a':
        commands.shift()
        console.log(tsv2array(commands.join('\n')))
        break
      case 'pixelate':
        document.body.style.setProperty('--pixelMode', 'true')
        break
      case 'skip':
        // eslint-disable-next-line no-case-declarations
        const skipInterval = setInterval(() => {
          if (currentState === 'menu') {
            clearInterval(skipInterval)
          } else {
            Slide.fullscreenObject.click()
          }
        }, 1)
        setTimeout(() => { clearInterval(skipInterval) }, 500)
        break
    }
  })
}
