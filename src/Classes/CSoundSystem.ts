export default class CSoundSystem {
  #ambient
  #music
  #simple
  readonly #notificationSound

  /**
   *
   * @param silenceSound Путь до файла с тишиной
   * @param notificationSound Путь до файла со звуком уведомления
   */
  constructor (silenceSound: string, notificationSound: string) {
    this.#ambient = new Audio(silenceSound)
    this.#music = new Audio(silenceSound)
    this.#simple = new Audio(silenceSound)
    this.#notificationSound = notificationSound
    this.#initPageVisibility()
  }

  play (type: 'ambient' | 'music' | 'simple', name: string): void {
    if (parseInt(localStorage.getItem('Settings_Volume')!) !== 0) {
      const x = setInterval(() => {
        this['#' + type].volume -= 0.1
      }, 100)

      setTimeout(() => {
        clearInterval(x)
      }, 700)

      setTimeout(() => {
        this['#' + type].pause()
        this['#' + type] = new Audio('sounds/' + name + '.mp3')
        this['#' + type].currentTime = 0
        type === 'simple'
          ? this['#' + type].loop = false
          : this['#' + type].loop = true
        this['#' + type].volume = parseInt(localStorage.getItem('Settings_Volume')!)
        this['#' + type].play()
      }, 800)
    }

    setTimeout(() => {
      this['#' + type].pause()
      this['#' + type] = new Audio('sounds/' + name + '.mp3')
    }, 800)
  }

  stop (type: string): void {
    this['#' + type].currentTime = 0
    this['#' + type].pause()
    this['#' + type] = new Audio(this.#notificationSound)
  }

  pauseAll (): void {
    this.#ambient.pause()
    this.#music.pause()
    this.#simple.pause()
  }

  resumeAll (): void {
    this.#ambient.pause()
    this.#music.play()
    this.#simple.play()
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
