import { loadData, saveData } from '../Functions/localStorageManager'

export default class CWardrobe {
  constructor (private readonly images: string[]) {}

  getCurrentClothes (storyInfo: string): string {
    return this.images[loadData([storyInfo, 'Clothes'])!]
  }

  saveCurrentClothes (storyInfo: string, clothesCode: number): void {
    saveData([storyInfo, 'Clothes'], [clothesCode])
  }
}
