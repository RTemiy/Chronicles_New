import type IStat from '../Types/IStat'
import { type EStoriesEn } from '../Utils/EStoriesNames'
import { loadData, saveData } from '../Functions/localStorageManager'
import { sendActivity } from '../Functions/GSAPI'

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
    if (stat.category === 'Person' || stat.category === 'Item' || stat.category === 'Effect') {
      if (statInfo.silent !== true) {
        stat.show = 1
      }
    }
    sendActivity(`Выбирает ${stat.story} ${stat.id} ${stat.value}`)
  }

  get (statInfo: IStat): number {
    const stat = this.#stats[statInfo.story + '_' + statInfo.category + '_' + statInfo.id]
    return stat.value!
  }

  getAllStoryStats (storyName: string): IStat[] {
    const allStoryStats = []
    for (const stat in this.#stats) {
      this.#stats[stat].story === storyName && allStoryStats.push(this.#stats[stat])
    }
    return allStoryStats
  }

  saveStats (isLastSave: boolean, storyName: string, chapterName: string, partName: string, code?: string): void {
    this.#forEach((stat: IStat) => {
      if (stat.story === storyName) {
        if (isLastSave && code === undefined) {
          saveData(['LastSave', stat.category, stat.id], [stat.value, stat.show])
        } else if (code !== undefined) {
          saveData([storyName, chapterName, partName, code, 'Unlocked'], [1])
          saveData([storyName, chapterName, partName, code, stat.category, stat.id], [stat.value, stat.show])
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

  resetStats (): void {
    this.#forEach((stat: IStat) => {
      stat.value = 0
      stat.show = 0
    })
  }

  loadStats (isLastSave: boolean, storyName?: string, chapterName?: string, partName?: string, code?: string): void {
    this.resetStats()
    if (isLastSave) {
      const scenarioName = loadData(['LastSave', 'ScenarioInfo'])!
      const story = scenarioName.split('_')[0]
      this.#forEach((stat: IStat) => {
        if (stat.story === story) {
          const loadedValue = loadData(['LastSave', stat.category, stat.id])
          if (loadedValue !== null) {
            const valuesObject = this.#statParser(loadedValue)
            stat.value = valuesObject.value
            stat.show = valuesObject.show
          } else {
            stat.value = 0
            stat.show = 0
          }
        }
      })
    } else if (storyName !== undefined && chapterName !== undefined && partName !== undefined && code !== undefined) {
      this.#forEach((stat: IStat) => {
        if (stat.story === storyName) {
          const loadedValue = loadData([storyName, chapterName, partName, code, stat.category, stat.id])
          if (loadedValue !== null) {
            const valuesObject = this.#statParser(loadedValue)
            stat.value = valuesObject.value
            stat.show = valuesObject.show
          } else {
            stat.value = 0
            stat.show = 0
          }
        }
      })
    }
  }

  getStatsHTML (story: EStoriesEn): { persons: string, items: string, effects: string } {
    let persons = ''
    let items = ''
    let effects = ''
    this.#forEach(stat => {
      if (stat.story === story) {
        if (stat.category === 'Person') {
          persons += `
                     <div class="inventory__person-cell ${stat.show === 1 ? '' : 'inventory__disabled'}" data-image="${stat.image}" data-title="${stat.title}" data-description="${stat.description}">
                     <img class="inventory__person-image" src="${stat.image}">
                     <p class="inventory__person-value">${stat.showValue === false ? '' : stat.value}</p>
                     <p class="inventory__person-name">${stat.name}</p>
                     </div>
                     `
        } if (stat.category === 'Item') {
          items += `
                     <div class="inventory__item-cell ${stat.show === 1 && stat.value! > 0 ? '' : 'inventory__disabled'}" data-image="${stat.image}" data-title="${stat.title}" data-description="${stat.description}">
                     <img class="inventory__item-image" src="${stat.image}">
                     <p class="inventory__item-value">${stat.value! > 1 ? stat.value : ''}</p>
                     <p class="inventory__item-name">${stat.name}</p>
                     </div>
                     `
        }
        if (stat.category === 'Effect') {
          effects += `
                     <div class="inventory__effect-cell ${stat.show === 1 ? '' : 'inventory__disabled'}" data-image="${stat.image}" data-title="${stat.title}" data-description="${stat.description}">
                     <img class="inventory__effect-image" src="${stat.image}">
                     <p class="inventory__effect-value">${stat.showValue === false ? '' : stat.value}</p>
                     <p class="inventory__effect-name">${stat.name}</p>
                     </div>
                     `
        }
      }
    })
    return { persons, items, effects }
  }

  getImage (statInfo: IStat): string {
    const stat = this.#stats[statInfo.story + '_' + statInfo.category + '_' + statInfo.id]
    return stat.image!
  }

  getName (statInfo: IStat): string {
    const stat = this.#stats[statInfo.story + '_' + statInfo.category + '_' + statInfo.id]
    return stat.name!
  }

  getShow (statInfo: IStat): number | undefined {
    const stat = this.#stats[statInfo.story + '_' + statInfo.category + '_' + statInfo.id]
    return stat.show
  }
}
