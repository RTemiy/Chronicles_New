export default class CElementManager {
  #elements: Array<{ mainElement: HTMLElement, additionalElements: HTMLElement[] }> = []
  #customClass: string = ''
  constructor (...elements: HTMLDivElement[]) {
    elements.forEach(window => {
      this.#elements.push({ mainElement: window, additionalElements: [] })
    })
  }

  open (targetElement: HTMLElement): void {
    let targetAdditionalElements: HTMLElement[] = []
    this.#elements.forEach(elementsContainer => {
      if (targetElement.isEqualNode(elementsContainer.mainElement)) {
        elementsContainer.mainElement.style.display = 'flex'
        targetAdditionalElements = elementsContainer.additionalElements
      } else {
        elementsContainer.mainElement.style.display = 'none'
        elementsContainer.additionalElements.forEach(el => {
          el.style.display = 'none'
        })
      }
    })
    targetAdditionalElements.forEach(el => {
      el.style.display = 'flex'
    })
  }

  closeAll (): void {
    this.#elements.forEach(elementsContainer => {
      elementsContainer.mainElement.style.display = 'none'
      elementsContainer.additionalElements.forEach(el => {
        el.style.display = 'none'
      })
    })
  }

  addElementTo (targetElement: HTMLElement, newElement: HTMLElement): void {
    this.#elements.forEach(elementsContainer => {
      if (targetElement.isEqualNode(elementsContainer.mainElement)) {
        elementsContainer.additionalElements.push(newElement)
      }
    })
  }

  setCustomClassToChange (className: string): void {
    this.#customClass = className
  }

  setCustomClassOnlyTo (targetElement: HTMLElement): void {
    this.#elements.forEach(elementsContainer => {
      if (targetElement.isEqualNode(elementsContainer.mainElement)) {
        elementsContainer.mainElement.classList.add(this.#customClass)
      } else {
        elementsContainer.mainElement.classList.remove(this.#customClass)
      }
    })
  }
}
