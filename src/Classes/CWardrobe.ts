import { loadData, saveData } from '../Functions/localStorageManager'
import type IWardrobe from '../Types/IWardrobe'
import type CContainer from './CContainer'
import { wardrobe } from '../index'
import { animateBackForth } from '../Functions/animateBackForth'

export default class CWardrobe {
  private persons: Record<string, IWardrobe[]> = {}
  private currentIndex = 0
  private currentStoryInfo = ''
  private currentClothes: IWardrobe[] = []
  private currentPerson = ''

  constructor (private readonly Wardrobe: CContainer) {
    this.addListeners()
  }

  addPerson (personId: string, clothesInfo: IWardrobe[]): void {
    this.persons[personId] = clothesInfo
  }

  getCurrentClothesImage (storyName: string, personId: string): string {
    return this.persons[personId][loadData([storyName, personId, 'Clothes'])!].image
  }

  getAllClothes (personId: string): IWardrobe[] {
    return this.persons[personId]
  }

  saveCurrentClothes (storyName: string, personId: string, clothesCode: number): void {
    saveData([storyName, personId, 'Clothes'], [clothesCode])
  }

  showNewWardrobe (storyInfo: string, personId: string): void {
    this.currentIndex = parseInt(loadData([storyInfo, personId, 'Clothes'])!)
    isNaN(this.currentIndex) && (this.currentIndex = 0)
    this.currentStoryInfo = storyInfo
    this.currentPerson = personId
    this.currentClothes = wardrobe.getAllClothes(this.currentPerson)
    this.Wardrobe.image.src = this.currentClothes[this.currentIndex].image
    this.Wardrobe.title.innerHTML = this.currentClothes[this.currentIndex].title
    this.Wardrobe.description.innerHTML = this.currentClothes[this.currentIndex].description
    this.Wardrobe.self.style.display = 'grid'
  }

  turnTo (number: number): void {
    this.currentIndex += number
    this.currentIndex < 0 && (this.currentIndex = this.currentClothes.length - 1)
    this.currentIndex > this.currentClothes.length - 1 && (this.currentIndex = 0)
    animateBackForth(this.Wardrobe.image, 'wardrobe__element_hide', 500)
    animateBackForth(this.Wardrobe.title, 'wardrobe__element_hide', 500)
    animateBackForth(this.Wardrobe.description, 'wardrobe__element_hide', 500)
    setTimeout(() => {
      this.Wardrobe.image.src = this.currentClothes[this.currentIndex].image
      this.Wardrobe.title.innerHTML = this.currentClothes[this.currentIndex].title
      this.Wardrobe.description.innerHTML = this.currentClothes[this.currentIndex].description
    }, 500)
  }

  chooseClothes (): void {
    this.Wardrobe.self.style.display = 'none'
    this.saveCurrentClothes(this.currentStoryInfo, this.currentPerson, this.currentIndex)
  }

  addListeners (): void {
    this.Wardrobe.buttonLeft.addEventListener('click', () => {
      this.turnTo(-1)
    })

    this.Wardrobe.buttonRight.addEventListener('click', () => {
      this.turnTo(1)
    })

    this.Wardrobe.buttonConfirm.addEventListener('click', () => {
      this.chooseClothes()
    })
  }
}
