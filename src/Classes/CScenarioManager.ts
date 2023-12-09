import type IScene from '../Types/IScene'
import type { IButton, ICondition } from '../Types/IScene'
import { type EStoriesEn } from '../Utils/EStoriesNames'
import type CStatsManager from './CStatsManager'
import type CSoundSystem from './CSoundSystem'
import type CSlide from './CSlide'
import type IStat from '../Types/IStat'
import type CAchievementsManager from './CAchievementsManager'

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
    private readonly slide: CSlide
  ) {
    this.#statsManager = statsManager
    this.#soundManager = soundManager
    this.#achievementManager = achievementManager
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

  setCurrentScenarioName (storyName: string, chapterName: string, partName: string, code: string, beginFromStart?: boolean): void {
    this.#currentScenarioName = storyName + '_' + chapterName + '_' + partName + '_' + code
    beginFromStart && this.beginScene(0)
  }

  getCurrentStory (): string {
    return this.#currentScenarioName.split('_')[0]
  }

  beginScene (sceneIndex: number, func?: () => void): void {
    this.#doLastSave(sceneIndex)
    const scene = this.#getScenarioSceneByIndex(sceneIndex)
    this.#doBeforeBegin(scene.beforeBegin)
    this.#doCondition(scene.condition)
    this.slide.changeImage(scene.imageBack, scene.imageLeft, scene.imageMiddle, scene.imageRight, scene.imageFront, scene.imageBorder)
    this.slide.changeText(scene.text)
    this.slide.setButtonValues(scene.buttons)
    scene.message !== undefined && this.slide.message(scene.message)
    scene.stats !== undefined && this.#doStats(scene.stats)
    scene.achievement !== undefined && this.#doAchievement(scene.achievement)
    this.#doSounds({ music: scene.music, ambient: scene.ambient, simple: scene.simple })
    func?.()
  }

  #doBeforeBegin (beforeBegin: (() => void) | undefined): void {
    beforeBegin?.()
  }

  #doCondition (condition: ICondition[] | undefined): void {
    if (condition !== undefined) condition.forEach(condition => { condition.condition() && condition.func() })
  }

  #doStats (stats: IStat[]): void {
    stats.forEach(stat => {
      this.#statsManager.change(stat)
      if (stat.category === 'Person' || stat.category === 'Item' || stat.category === 'Effect') {
        if (stat.silent === false || stat.silent === undefined) {
          this.slide.alertInventory()
        }
      }
    })
  }

  #doAchievement (achievement: { story: EStoriesEn, name: string }): void {
    this.#achievementManager.unlock(achievement.story, achievement.name)
  }

  #doSounds (sounds: { music: string | undefined, ambient: string | undefined, simple: string | undefined }): void {
    sounds.music !== undefined && this.#soundManager.play('music', sounds.music)
    sounds.ambient !== undefined && this.#soundManager.play('ambient', sounds.ambient)
    sounds.simple !== undefined && this.#soundManager.play('simple', sounds.simple)
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
    this.#statsManager.loadStats(true)
    const lastSaveInfoArray = localStorage.getItem('LastSave_ScenarioInfo')!.split('_')
    this.setCurrentScenarioName(lastSaveInfoArray[0], lastSaveInfoArray[1], lastSaveInfoArray[2], lastSaveInfoArray[3])
    this.beginScene(parseInt(lastSaveInfoArray[4]))
  }

  resetSceneButtons (sceneIndex: number): void {
    const scene = this.#getScenarioSceneByIndex(sceneIndex)
    scene.buttons = scene.buttonsDefault!
  }
}
