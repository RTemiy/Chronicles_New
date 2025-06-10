import { achievementsManager, scenarioManager, statsManager } from '../index';
import { EStoriesEn } from '../Utils/EStoriesNames'
import showDebugger from '../Components/Debugger/Debugger'
import { beginMiniGameMemory } from '../Components/MiniGameMemory/MiniGameMemory'
import { showCaseSimulator } from '../Components/CaseSimulator/CaseSimulator';
import { tsv2array } from './tsv2array'
import { Slide } from '../Components/Slide/Slide';

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
        beginMiniGameMemory({ roundsInARowToWin: 3, beginningPathAmount: 3, lives: 3 })
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
      case 'skip':
        // eslint-disable-next-line no-case-declarations
        const skipInterval = setInterval(() => { Slide.backgroundImage.click() }, 1)
        setTimeout(() => { clearInterval(skipInterval) }, 500)
        break
    }
  })
}
