import type IStat from '../Types/IStat'

export default class CStatsManager {
  #stats: Record<string, IStat> = {}

  add (stat: IStat): void {
    stat.value = 0
    stat.show = 0
    this.#stats[stat.story + '_' + stat.category + '_' + stat.id] = stat
  }

  #forEach (func: (stat: IStat) => void): void {
    for (const stat in this.#stats) {
      func(this.#stats[stat])
    }
  }

  change (statInfo: IStat): void {
    const stat = this.#stats[statInfo.story + '_' + statInfo.category + '_' + statInfo.id]
    stat.value! += statInfo.value!
    if (statInfo.silent === null || statInfo.silent === false || stat.category === 'Person' || stat.category === 'Item') {
      stat.show = 1
    }
  }

  saveStats (isLastSave: boolean, storyName: string, chapterName: string, partName: string, code?: string): void {
    this.#forEach((stat: IStat) => {
      if (stat.story === storyName) {
        if (isLastSave && code === undefined) {
          localStorage.setItem('LastSave' + '_' + stat.category + '_' + stat.id, String(stat.value) + '_' + String(stat.show))
        } else if (code !== undefined) {
          localStorage.setItem(storyName + '_' + chapterName + '_' + partName + '_' + code + '_Unlocked', '1')
          localStorage.setItem(storyName + '_' + chapterName + '_' + partName + '_' + code + '_' + stat.category + '_' + stat.id, String(stat.value) + '_' + String(stat.show))
        }
      }
    })
  }

  #statParser (statValue: string): { value: number, show: number } {
    const array = statValue.split('_')
    return {
      value: parseInt(array[0]),
      show: parseInt(array[1])
    }
  }

  #resetStats (): void {
    this.#forEach((stat: IStat) => {
      stat.value = 0
      stat.show = 0
    })
  }

  loadStats (isLastSave: boolean, storyName?: string, chapterName?: string, partName?: string, code?: string): void {
    this.#resetStats()
    if (isLastSave) {
      const scenarioName = localStorage.getItem('LastSave_ScenarioInfo')!
      const story = scenarioName.split('_')[0]
      this.#forEach((stat: IStat) => {
        if (stat.story === story) {
          const valuesObject = this.#statParser(localStorage.getItem('LastSave_' + stat.category + '_' + stat.id)!)
          stat.value = valuesObject.value
          stat.show = valuesObject.show
        }
      })
    } else if (storyName !== undefined && chapterName !== undefined && partName !== undefined && code !== undefined) {
      this.#forEach((stat: IStat) => {
        if (stat.story === storyName) {
          const valuesObject = this.#statParser(localStorage.getItem(storyName + '_' + chapterName + '_' + partName + '_' + code + '_' + stat.category + '_' + stat.id)!)
          stat.value = valuesObject.value
          stat.show = valuesObject.show
        }
      })
    }
  }
}
