import type IScene from '../Types/IScene'
import type { IButton, ICondition } from '../Types/IScene'
import { type EStoriesEn } from '../Utils/EStoriesNames'
import type CStatsManager from './CStatsManager'
import type CSoundSystem from './CSoundSystem'
import type CSlide from './CSlide'
import type IStat from '../Types/IStat'
import type CAchievementsManager from './CAchievementsManager'
import { loadData, saveData } from '../Functions/localStorageManager'
import { type TIMage } from '../Types/TImage'
import type CWardrobe from './CWardrobe'
import { getChoice } from '../Functions/5Choices'
import { setCurrentSlideId } from '../Components/Slide/Slide'
import { showStatAlert } from '../Components/SlideStatAlert/SlideStatAlert'
import { type CSmartphone } from './CSmartphone'

export default class CScenarioManager {
  #currentScenarioName: string = ''
  #scenarios: Record<string, IScene[]> = {}
  readonly #statsManager: CStatsManager
  readonly #soundManager: CSoundSystem
  readonly #achievementManager: CAchievementsManager

  constructor (
    statsManager: CStatsManager,
    soundManager: CSoundSystem,
    achievementManager: CAchievementsManager,
    private readonly slide: CSlide,
    private readonly wardrobe: CWardrobe,
    private readonly smartphone: CSmartphone
  ) {
    this.#statsManager = statsManager
    this.#soundManager = soundManager
    this.#achievementManager = achievementManager
  }

  addScenario (
    scenarioInfo: { storyName: EStoriesEn, chapterName: string, partName: string, code: string },
    scenario: IScene[]): void {
    scenario.forEach(scene => {
      const buttons = scene.buttons
      const defaultButtons: IButton[] | undefined = []
      buttons.forEach(button => defaultButtons.push(Object.assign({}, button)))
      scene.buttonsDefault = defaultButtons
      Object.freeze(scene.buttonsDefault)
    })
    this.#scenarios[scenarioInfo.storyName + '_' + scenarioInfo.chapterName + '_' + scenarioInfo.partName + '_' + scenarioInfo.code] = []
    scenario.forEach(scene => {
      this.#scenarios[scenarioInfo.storyName + '_' + scenarioInfo.chapterName + '_' + scenarioInfo.partName + '_' + scenarioInfo.code][scene.id] = scene
    })
  }

  #getSceneByIndex (sceneIndex: number): IScene {
    return this.#scenarios[this.#currentScenarioName][sceneIndex]
  }

  setCurrentScenarioName (storyName: string, chapterName: string, partName: string, code: string, beginFromStart?: boolean): void {
    this.#currentScenarioName = storyName + '_' + chapterName + '_' + partName + '_' + code
    if (beginFromStart) {
      this.beginScene(0)
    }
  }

  getCurrentStory (): string {
    return this.#currentScenarioName
  }

  getCurrentStoryName (): string {
    return this.#currentScenarioName.split('_')[0]
  }

  beginScene (sceneIndex: number, func?: () => void): void {
    this.#doLastSave(sceneIndex)
    setCurrentSlideId(sceneIndex)
    const scene = this.#getSceneByIndex(sceneIndex)
    if (!this.#doCondition(scene.condition)) {
      this.#doBeforeBegin(scene.beforeBegin)
      this.#changeImages(scene.imageBack, scene.imageLeft, scene.imageMiddle, scene.imageRight, scene.imageFront, scene.imageBorder)
      this.#doParallax(scene.parallax)
      this.slide.changeText(scene.text)
      this.#setButtons(scene.buttons)
      this.slide.changeSpeaker(scene.speaker)
      this.#doGhostSilhouette(scene.ghostSilhouette)
      this.#doDarkSilhouette(scene.darkSilhouette)
      this.#doSounds({ music: scene.music, ambient: scene.ambient, simple: scene.simple })
      scene.wardrobe !== undefined && this.wardrobe.showNewWardrobe(scene.wardrobe.story, scene.wardrobe.personId, () => { this.beginScene(scene.wardrobe!.goTo) })
      scene.smartphone !== undefined && this.smartphone.showNewChat(scene.smartphone.chatId, () => { this.beginScene(scene.smartphone!.goTo) })
      scene.message !== undefined && this.slide.message(scene.message)
      scene.stats !== undefined && this.#doStats(scene.stats)
      scene.cutScene !== undefined && this.#doCutScene(scene.cutScene)
      scene.achievement !== undefined && this.#doAchievement(scene.achievement)
      this.#doAfterAll(scene.afterAll)
      func?.()
    }
    sceneIndex === 0 && setTimeout(() => { this.#doLastSave(sceneIndex) }, 100)
  }

  #doBeforeBegin (beforeBegin: (() => void) | undefined): void {
    beforeBegin?.()
  }

  #doAfterAll (afterAll: (() => void) | undefined): void {
    afterAll?.()
  }

  #doCondition (condition: ICondition[] | undefined): boolean {
    let res = false
    if (condition !== undefined) {
      condition.forEach(condition => {
        (setTimeout(() => {
          if (!res && condition.condition()) {
            this.beginScene(condition.goTo)
            res = true
          }
        }, 0))
      })
      return res
    } else {
      return false
    }
  }

  #doDarkSilhouette (status: boolean | undefined): void {
    if (status === true) {
      this.slide.changeDarkSilhouette(true)
    } else {
      this.slide.changeDarkSilhouette(false)
    }
  }

  #doGhostSilhouette (status: boolean | undefined): void {
    if (status === true) {
      this.slide.changeGhostSilhouette(true)
    } else {
      this.slide.changeGhostSilhouette(false)
    }
  }

  #doParallax (side: string | undefined): void {
    this.slide.parallax(side)
  }

  #doStats (stats: IStat[]): void {
    stats.forEach((stat) => {
      stat.story = this.getCurrentStoryName()
      if (stat.category === 'Person' || stat.category === 'Item' || stat.category === 'Effect') {
        if (stat.silent === false || stat.silent === undefined) {
          if (stat.value === 0 && this.#statsManager.getShow(stat) === 0) {
            this.slide.alertInventory()
            showStatAlert(this.#statsManager.getImage(stat)!, `${this.#statsManager.getName(stat)!}`, stat.value!)
          } else if (stat.value !== 0 && this.#statsManager.getShow(stat) !== undefined) {
            this.slide.alertInventory()
            showStatAlert(this.#statsManager.getImage(stat)!, `${this.#statsManager.getName(stat)!}`, stat.value!)
          }
        }
      }
      this.#statsManager.change(stat)
    })
  }

  #setButtons (buttons: IButton[]): void {
    const newButtons: IButton[] = []
    buttons.forEach(el => {
      newButtons.push({
        text: el.text,
        func: () => {
          el.func?.()
          el.goTo !== undefined && this.beginScene(el.goTo)
        },
        isActive: el.isActive,
        goTo: el.goTo,
        gift: el.gift
      })
    })
    this.slide.setButtonValues(newButtons)
  }

  #doAchievement (achievement: { story: EStoriesEn, name: string }): void {
    this.slide.showAchievement(this.#achievementManager.unlock(achievement.story, achievement.name))
  }

  #changeImages (backImage?: TIMage, leftImage?: string, middleImage?: string, rightImage?: string, frontImage?: TIMage, borderImage?: string): void {
    let front: any
    let back: any
    if (frontImage !== undefined && typeof frontImage === 'function') {
      front = frontImage()
    } else if (frontImage !== undefined) {
      front = frontImage
    }
    if (backImage !== undefined && typeof backImage === 'function') {
      back = backImage()
    } else if (backImage !== undefined) {
      back = backImage
    }
    this.slide.changeImage(back, leftImage, middleImage, rightImage, front, borderImage)
  }

  #doSounds (sounds: { music: string | undefined, ambient: string | undefined, simple: string | undefined }): void {
    sounds.music !== undefined && this.#soundManager.play('music', sounds.music)
    sounds.ambient !== undefined && this.#soundManager.play('ambient', sounds.ambient)
    sounds.simple !== undefined && this.#soundManager.play('simple', sounds.simple)
  }

  #doCutScene (cutSceneInfo: { video: string, goTo: number }): void {
    this.slide.showCutScene({ video: cutSceneInfo.video, goTo: () => { this.beginScene(cutSceneInfo.goTo) } })
  }

  changeSceneProp (index: number, propName: string, value: any): void {
    const scene = this.#getSceneByIndex(index)
    scene[propName] = value
  }

  #getSceneButtonStatus (sceneIndex: number, buttonIndex: number): boolean {
    const scene = this.#getSceneByIndex(sceneIndex)
    if (scene.buttons[buttonIndex].isActive === undefined || scene.buttons[buttonIndex].isActive) {
      return true
    } else {
      return false
    }
  }

  changeSceneButtonStatus (sceneIndex: number, buttonIndex: number, value: boolean): void {
    const scene = this.#getSceneByIndex(sceneIndex)
    scene.buttons[buttonIndex].isActive = value
  }

  manageDialog (sceneIndex: number, buttonIndexesToBeFalse: number[], buttonIndexesToMakeTrue: number[]): void {
    let counter = 0
    buttonIndexesToBeFalse.forEach(el => {
      !this.#getSceneButtonStatus(sceneIndex, el) && counter++
    })
    if (counter === buttonIndexesToBeFalse.length) {
      buttonIndexesToMakeTrue.forEach(el => {
        this.changeSceneButtonStatus(sceneIndex, el, true)
      })
    }
  }

  copySceneButtons (sceneIndex: number, targetSceneIndex: number): void {
    const toCopyButtons = this.#getSceneByIndex(sceneIndex).buttons
    const newButtons: IButton[] | undefined = []
    toCopyButtons.forEach(button => newButtons.push(Object.assign({}, button)))
    this.#getSceneByIndex(targetSceneIndex).buttons = newButtons
  }

  loadChoices (sceneIndex: number): void {
    this.#getSceneByIndex(sceneIndex).buttons.forEach((button, index, array) => {
      if (index !== array.length - 1) {
        button.isActive = getChoice(index)
      }
    })
  }

  resetSceneButtons (sceneIndex: number): void {
    const scene = this.#getSceneByIndex(sceneIndex)
    const newButtons: IButton[] | undefined = []
    scene.buttonsDefault!.forEach(button => newButtons.push(Object.assign({}, button)))
    scene.buttons = newButtons
  }

  #doLastSave (sceneIndex: number): void {
    const nameArray = this.#currentScenarioName.split('_')
    this.#statsManager.saveStats(true, nameArray[0], nameArray[1], nameArray[2])
    saveData(['LastSave_ScenarioInfo'], [nameArray[0], nameArray[1], nameArray[2], nameArray[3], sceneIndex])
  }

  getAllScenarioSlides (): IScene[] {
    return this.#scenarios[this.#currentScenarioName]
  }

  loadLastSave (): void {
    this.#statsManager.loadStats(true)
    const lastSaveInfoArray = loadData(['LastSave_ScenarioInfo'])!.split('_')
    this.setCurrentScenarioName(lastSaveInfoArray[0], lastSaveInfoArray[1], lastSaveInfoArray[2], lastSaveInfoArray[3])
    this.beginScene(parseInt(lastSaveInfoArray[4]))
  }
}
