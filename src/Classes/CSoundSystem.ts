import { loadData, saveData } from '../Functions/localStorageManager'

export default class CSoundSystem {
  private ambient
  private music
  private simple
  private menu
  private inMenu: boolean = true

  /**
   *
   * @param silenceSound Путь до файла с тишиной
   * @param notificationSound Путь до файла со звуком уведомления
   * @param menuSound Путь до файла с музыкой меню
   */
  constructor (silenceSound: string, private readonly notificationSound: string, menuSound: string) {
    this.ambient = new Audio(silenceSound)
    this.music = new Audio(silenceSound)
    this.simple = new Audio(notificationSound)
    this.menu = new Audio(menuSound)
    this.menu.loop = true
    this.#initPageVisibility()
  }

  play (type: 'ambient' | 'music' | 'simple' | 'menu', path?: string): void {
    if (type === 'simple') {
      this[type] = new Audio(this.notificationSound)
      this[type].play()
      this.setVolume(loadData(['Settings_Sound'])!)
    } else {
      const x = setInterval(() => {
        if (this[type].volume > 0.1) this[type].volume -= 0.1
      }, 100)

      setTimeout(() => {
        clearInterval(x)
      }, 800)

      setTimeout(() => {
        this[type].pause()
        if (type !== 'menu') {
          type === 'music' && saveData(['LastSave_SoundInfo'], [path!])
          this.inMenu = false
          this[type] = new Audio(path)
          this[type].currentTime = 0
          this[type].loop = true
          this.menu.pause()
          this[type].play()
        } else {
          this.inMenu = true
          this[type].play()
          this.music.pause()
          this.simple.pause()
          this.ambient.pause()
        }
        this.setVolume(loadData(['Settings_Sound'])!)
      }, 900)
    }
  }

  setVolume (value: string): void {
    if (value === 'false') {
      this.ambient.volume = 0
      this.music.volume = 0
      this.simple.volume = 0
      this.menu.volume = 0
    } else {
      this.ambient.volume = 0.8
      this.music.volume = 0.8
      this.simple.volume = 0.8
      this.menu.volume = 0.8
    }
  }

  stop (type: string): void {
    this[type].currentTime = 0
    this[type].pause()
  }

  pauseAll (): void {
    this.ambient.pause()
    this.music.pause()
    this.simple.pause()
    this.menu.pause()
  }

  resumeAll (): void {
    if (this.inMenu) {
      this.menu.play()
    } else {
      this.ambient.play()
      this.music.play()
    }
  }

  #initPageVisibility (): void {
    let alreadyTurnedOff = false

    const handleVisibilityChange = (): void => {
      if (!alreadyTurnedOff) {
        this.pauseAll(); alreadyTurnedOff = true
      } else {
        this.resumeAll(); alreadyTurnedOff = false
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange, false)
  }
}
