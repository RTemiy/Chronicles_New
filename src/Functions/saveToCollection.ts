import { loadData, saveData } from './localStorageManager'
import { type EStoriesEn } from '../Utils/EStoriesNames'

export function saveToCollection (storyName: EStoriesEn, id: string, value?: number): void {
  saveData(['Collection', storyName, 'Custom', id], [value ?? 1])
}

export function getCollectionItemValue (storyName: EStoriesEn, id: string, category?: string): number {
  return parseInt(loadData(['Collection', storyName, category ?? 'Custom', id])!)
}
