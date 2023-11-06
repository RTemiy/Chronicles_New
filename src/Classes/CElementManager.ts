export default class CElementManager {
  #elements: HTMLElement[] = []
  #customClass: string = ''
  constructor (...elements: HTMLDivElement[]) {
    elements.forEach(window => {
      this.#elements.push(window)
    })
  }

  open (targetElement: HTMLElement): void {
    this.#elements.forEach(element => {
      targetElement.isEqualNode(element) ? element.style.display = 'flex' : element.style.display = 'none'
    })
  }

  closeAll (): void {
    this.#elements.forEach(window => {
      window.style.display = 'none'
    })
  }

  setCustomClassToChange (className: string): void {
    this.#customClass = className
  }

  setCustomClassOnlyTo (targetElement: HTMLElement): void {
    this.#elements.forEach(element => {
      if (targetElement.isEqualNode(element)) {
        element.classList.add(this.#customClass)
      } else {
        element.classList.remove(this.#customClass)
      }
    })
  }
}
