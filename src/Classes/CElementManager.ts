export default class CWindowManager {
  #windows: HTMLDivElement[] = []
  constructor (...windows: HTMLDivElement[]) {
    windows.forEach(window => {
      this.#windows.push(window)
    })
  }

  open (tab: HTMLDivElement): void {
    this.#windows.forEach(window => {
      tab.isEqualNode(window) ? window.style.display = 'flex' : window.style.display = 'none'
    })
  }

  closeAll (): void {
    this.#windows.forEach(window => {
      window.style.display = 'none'
    })
  }
}
