import type CSoundSystem from './CSoundSystem'

export default class CTimer {
  private timeout: ReturnType<typeof setTimeout> = setTimeout(() => '', 0)
  private interval: ReturnType<typeof setTimeout> = setInterval(() => '', 0)
  constructor (
    private readonly soundManager: CSoundSystem,
    private readonly timerElement: HTMLElement,
    private readonly timerNumberElement: HTMLElement
  ) {}

  set (time: number, failFunc: () => void): void {
    let leftTime = time
    this.soundManager.play('ambient', require('../Sounds/Common/Timer.mp3'))
    this.timerElement.setAttribute(
      'style',
      `display: flex; --duration: ${time}s`
    )
    this.timerNumberElement.innerText = String(time)
    this.timeout = setTimeout(() => {
      this.soundManager.stop('ambient')
      this.timerElement.style.display = 'none'
      clearInterval(this.interval)
      failFunc()
    }, time * 1000)
    this.interval = setInterval(() => {
      leftTime -= 1
      leftTime <= 3
        ? (this.timerNumberElement.style.color = 'red')
        : (this.timerNumberElement.style.color = 'black')
      this.timerNumberElement.innerText = String(leftTime)
    }, 1000)
  }

  stop (): void {
    clearTimeout(this.timeout)
    clearInterval(this.interval)
    this.soundManager.stop('ambient')
    this.timerElement.style.display = 'none'
  }
}
