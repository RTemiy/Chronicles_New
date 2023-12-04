import type IStat from '../Types/IStat'
import { EStoriesEn } from '../Utils/EStoriesNames'

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

  get (statInfo: IStat): number {
    const stat = this.#stats[statInfo.story + '_' + statInfo.category + '_' + statInfo.id]
    return stat.value!
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

  resetStats (): void {
    this.#forEach((stat: IStat) => {
      stat.value = 0
      stat.show = 0
    })
  }

  loadStats (isLastSave: boolean, storyName?: string, chapterName?: string, partName?: string, code?: string): void {
    this.resetStats()
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

  getStatsHTML (story: EStoriesEn): { persons: string, items: string } {
    let persons = ''
    let items = ''
    this.#forEach(stat => {
      if (stat.story === story) {
        if (stat.category === 'Person') {
          persons += `
                     <div class="inventory__person-cell ${stat.show === 1 ? '' : 'inventory__disabled'}" data-image="${stat.image}" data-title="${stat.title}" data-description="${stat.description}">
                     <img class="inventory__person-image" src="${stat.image}">
                     <p class="inventory__person-value">${stat.value}</p>
                     <p class="inventory__person-name">${stat.name}</p>
                     </div>
                     `
        } if (stat.category === 'Item') {
          items += `
                     <div class="inventory__item-cell ${stat.show === 1 ? '' : 'inventory__disabled'}">
                     <img class="inventory__item-image" src="${stat.image}">
                     <p class="inventory__item-value">${stat.value}</p>
                     <p class="inventory__item-name">${stat.name}</p>
                     </div>
                     `
        }
      }
    })
    return { persons, items }
  }
}
