import { loadData, saveData } from '../Functions/localStorageManager'
import type IWardrobe from '../Types/IWardrobe'
import type CContainer from './CContainer'
import { wardrobe } from '../index'
import { animateBackForth } from '../Functions/animateBackForth'
import { showAd } from '../Functions/advertisement'

export default class CWardrobe {
  private persons: Record<string, IWardrobe[]> = {}
  private currentIndex = 0
  private currentStoryInfo = ''
  private currentClothes: IWardrobe[] = []
  private currentPerson = ''

  constructor (private readonly Wardrobe: CContainer) {
  }

  addEntity (personId: string, clothesInfo: IWardrobe[]): void {
    this.persons[personId] = clothesInfo
  }

  addVariation (personId: string, clothesInfo: IWardrobe[]): void {
    this.persons[personId + '_Variation'] = clothesInfo
  }

  getCurrentEntityImage (storyName: string, personId: string): string {
    return this.persons[personId][loadData([storyName, personId, 'Clothes'])!].image
  }

  getCurrentEntityVariationImage (storyName: string, personId: string, variation: string): string {
    return this.persons[personId + '_Variation'].find(item =>
      item.originalId === parseInt(loadData([storyName, personId, 'Clothes'])!) + 1 && item.variation === variation)!.image
  }

  getCurrentEntityImageTitle (storyName: string, personId: string): string {
    return this.persons[personId][loadData([storyName, personId, 'Clothes'])!].title
  }

  private getAllEntities (personId: string): IWardrobe[] {
    return this.persons[personId]
  }

  private saveCurrentEntities (storyName: string, personId: string, clothesCode: number): void {
    saveData([storyName, personId, 'Clothes'], [clothesCode])
  }

  showNewWardrobe (storyInfo: string, personId: string, callback: () => void): void {
    this.currentIndex = parseInt(loadData([storyInfo, personId, 'Clothes'])!)
    isNaN(this.currentIndex) && (this.currentIndex = 0)
    this.currentStoryInfo = storyInfo
    this.currentPerson = personId
    this.currentClothes = wardrobe.getAllEntities(this.currentPerson)
    this.Wardrobe.image.src = this.currentClothes[this.currentIndex].image
    this.Wardrobe.title.innerHTML = this.currentClothes[this.currentIndex].title
    this.Wardrobe.description.innerHTML = this.currentClothes[this.currentIndex].description
    this.Wardrobe.self.style.display = 'flex'
    this.addListeners(callback)
  }

  private turnTo (number: number): void {
    this.currentIndex += number
    this.currentIndex < 0 && (this.currentIndex = this.currentClothes.length - 1)
    this.currentIndex > this.currentClothes.length - 1 && (this.currentIndex = 0)
    animateBackForth(this.Wardrobe.image, 'wardrobe__element_hide', 500)
    animateBackForth(this.Wardrobe.title, 'wardrobe__element_hide', 500)
    animateBackForth(this.Wardrobe.description, 'wardrobe__element_hide', 500)
    animateBackForth(this.Wardrobe.buttonConfirm, 'wardrobe__element_hide', 500)
    setTimeout(() => {
      if (!this.currentClothes[this.currentIndex].unlocked()) {
        this.Wardrobe.buttonConfirm.innerHTML = 'Недоступно'
        this.Wardrobe.buttonConfirm.disabled = true
        this.Wardrobe.image.classList.add('wardrobe__imageLocked')
      } else {
        this.Wardrobe.image.classList.remove('wardrobe__imageLocked')
        this.Wardrobe.buttonConfirm.disabled = false
        this.Wardrobe.buttonConfirm.innerHTML = 'Выбрать'
      }
      this.Wardrobe.image.src = this.currentClothes[this.currentIndex].image
      this.Wardrobe.title.innerHTML = this.currentClothes[this.currentIndex].title
      this.Wardrobe.description.innerHTML = this.currentClothes[this.currentIndex].description
    }, 500)
  }

  private chooseEntity (): void {
    this.saveCurrentEntities(this.currentStoryInfo, this.currentPerson, this.currentIndex)
    // @ts-expect-error
    showAd(this.currentClothes[this.currentIndex].cost, () => {
      this.Wardrobe.self.style.display = 'none'
    })
  }

  private addListeners (callback: () => void): void {
    this.Wardrobe.buttonLeft.onclick = () => {
      this.turnTo(-1)
    }

    this.Wardrobe.buttonRight.onclick = () => {
      this.turnTo(1)
    }

    this.Wardrobe.buttonConfirm.onclick = () => {
      this.chooseEntity()
      callback()
    }
  }
}
