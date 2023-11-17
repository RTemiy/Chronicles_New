import type IScene from '../Types/IScene'
import type { IButton, ICondition } from '../Types/IScene'
import { changeSlideImage, changeSlideText, setButtonValues, slideMessage } from '../Components/Slide/Slide'
import { soundManager, statsManager } from '../index'
import { type EStoriesEn } from '../Utils/EStoriesNames'
import type CStatsManager from './CStatsManager'

export default class CScenarioManager {
  #currentScenarioName: string = ''
  #scenarios: Record<string, IScene[]> = {}
  readonly #statsManager: CStatsManager

  constructor (statsManager: CStatsManager) {
    this.#statsManager = statsManager
  }

  addScenario (storyName: EStoriesEn, chapterName: string, partName: string, code: string, scenario: IScene[]): void {
    scenario.forEach(scene => {
      const buttons = scene.buttons
      const defaultButtons: IButton[] | undefined = []
      buttons.forEach(button => defaultButtons.push(Object.assign({}, button)))
      scene.buttonsDefault = defaultButtons
    })
    this.#scenarios[storyName + '_' + chapterName + '_' + partName + '_' + code] = scenario
  }

  #getScenarioSceneByIndex (sceneIndex: number): IScene {
    return this.#scenarios[this.#currentScenarioName][sceneIndex]
  }

  setCurrentScenarioName (storyName: string, chapterName: string, partName: string, code: string): void {
    this.#currentScenarioName = storyName + '_' + chapterName + '_' + partName + '_' + code
    this.beginScene(0)
  }

  beginScene (sceneIndex: number): void {
    const scene = this.#getScenarioSceneByIndex(sceneIndex)
    this.#doBeforeBegin(scene.beforeBegin)
    this.#doCondition(scene.condition)
    changeSlideImage(scene.imageBack, scene.imageLeft, scene.imageMiddle, scene.imageRight, scene.imageFront)
    changeSlideText(scene.text)
    setButtonValues(scene.buttons)
    scene.message !== undefined && slideMessage(scene.message)
    this.#doSounds({ music: scene.music, ambient: scene.ambient, simple: scene.simple })
    this.#doLastSave(sceneIndex)
  }

  #doBeforeBegin (beforeBegin: (() => void) | undefined): void {
    beforeBegin?.()
  }

  #doCondition (condition: ICondition[] | undefined): void {
    if (condition !== undefined) condition.forEach(condition => { condition.condition() && condition.func() })
  }

  #doSounds (sounds: { music: string | undefined, ambient: string | undefined, simple: string | undefined }): void {
    sounds.music !== undefined && soundManager.play('music', sounds.music)
    sounds.ambient !== undefined && soundManager.play('ambient', sounds.ambient)
    sounds.simple !== undefined && soundManager.play('simple', sounds.simple)
  }

  changeSceneProp (index: number, propName: string, value: any): void {
    const scene = this.#getScenarioSceneByIndex(index)
    scene[propName] = value
  }

  changeSceneButtonStatus (sceneIndex: number, buttonIndex: number, value: boolean): void {
    const scene = this.#getScenarioSceneByIndex(sceneIndex)
    scene.buttons[buttonIndex].isActive = value
  }

  copySceneButtons (sceneIndex: number, targetSceneIndex: number): void {
    this.#getScenarioSceneByIndex(sceneIndex).buttons = this.#getScenarioSceneByIndex(targetSceneIndex).buttons
  }

  #doLastSave (sceneIndex: number): void {
    const nameArray = this.#currentScenarioName.split('_')
    this.#statsManager.saveStats(true, nameArray[0], nameArray[1], nameArray[2])
    localStorage.setItem('LastSave_ScenarioInfo', nameArray[0] + '_' + nameArray[1] + '_' + nameArray[2] + '_' + nameArray[3] + '_' + String(sceneIndex))
  }

  loadLastSave (): void {
    statsManager.loadStats(true)
    const lastSaveInfoArray = localStorage.getItem('LastSave_ScenarioInfo')!.split('_')
    this.setCurrentScenarioName(lastSaveInfoArray[0], lastSaveInfoArray[1], lastSaveInfoArray[2], lastSaveInfoArray[3])
    this.beginScene(parseInt(lastSaveInfoArray[4]))
  }

  resetSceneButtons (sceneIndex: number): void {
    const scene = this.#getScenarioSceneByIndex(sceneIndex)
    scene.buttons = scene.buttonsDefault!
  }
}
