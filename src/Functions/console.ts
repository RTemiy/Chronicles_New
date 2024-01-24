import { scenarioManager, statsManager } from '../index'
import { EStoriesEn } from '../Utils/EStoriesNames'

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
    }
  })
}
