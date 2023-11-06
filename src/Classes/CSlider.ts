export default class CSlider {
  #containerElement
  #containerElements: any[]
  #helperContainer
  #touchStart: number = 0
  #touchEnd: number = 0
  #helperElements: HTMLElement[] = []
  #helperPos = 0
  constructor (containerElement: HTMLElement, helperContainer: HTMLElement) {
    this.#containerElement = containerElement
    this.#helperContainer = helperContainer
    this.#containerElements = this.#getContainerChildren(containerElement)
    this.#generateSwiperHelper()
    this.#addEventListeners()
    this.#render()
    this.#changeActiveHelper(0)
  }

  #generateSwiperHelper (): void {
    for (let x = 0; x < this.#containerElements.length; x++) {
      const newElement = document.createElement('div')
      newElement.classList.add('slider__check')
      this.#helperContainer.appendChild(newElement)
      this.#helperElements.push(newElement)
    }
  }

  #changeActiveHelper (number: number): void {
    this.#helperPos += number
    this.#validateHelperPos()
    this.#helperElements.forEach(el => { el.classList.remove('slider__check_active') })
    this.#helperElements[this.#helperPos].classList.add('slider__check_active')
  }

  #validateHelperPos (): void {
    if (this.#helperPos < 0) {
      this.#helperPos = this.#helperElements.length - 1
    } else if (this.#helperPos >= this.#helperElements.length) {
      this.#helperPos = 0
    }
  }

  #swipeLeft (): void {
    for (let x = 0; x < this.#containerElements.length - 1; x++) {
      this.#containerElements.unshift(this.#containerElements.pop())
    }
    this.#changeActiveHelper(+1)
  }

  #swipeRight (): void {
    for (let x = 0; x < this.#containerElements.length - 1; x++) {
      this.#containerElements.push(this.#containerElements.shift())
    }
    this.#changeActiveHelper(-1)
  }

  #render (): void {
    this.#containerElements.forEach((child, index) => {
      child.setAttribute('style', `transform: translateX(${index * 3}%) translateY(-${index}%); z-index: ${-index};`)
    })
  }

  #addEventListeners (): void {
    this.#containerElement.addEventListener('touchstart', evt => {
      this.#touchStart = evt.changedTouches[0].clientX
    })

    /* this.#containerElement.addEventListener('touchmove', evt => {
      const card = evt.target as HTMLElement
      const coordBox = card.getBoundingClientRect()
      const centerPointX = coordBox.x + coordBox.width / 2
      const centerPointY = coordBox.y + coordBox.height / 2

      const maxRotation = 30

      const rotationFactorY = maxRotation / (coordBox.width / 2)
      const yRotation = Math.ceil((evt.changedTouches[0].clientX - centerPointX) * rotationFactorY)

      const rotationFactorX = maxRotation / (coordBox.height / 2)
      const xRotation = -1 * Math.ceil((evt.changedTouches[0].clientY - centerPointY) * rotationFactorX)

      card.style.cssText = `transform: rotateY(${yRotation}deg) rotateX(${xRotation}deg);`
    }) */

    this.#containerElement.addEventListener('touchend', evt => {
      this.#touchEnd = evt.changedTouches[0].clientX
      if (this.#touchStart > this.#touchEnd + 30) {
        this.#swipeLeft()
        this.#render()
      } else if (this.#touchStart < this.#touchEnd + 30) {
        this.#swipeRight()
        this.#render()
      }
    })

    this.#containerElement.addEventListener('dragstart', evt => {
      this.#touchStart = evt.clientX
    })

    this.#containerElement.addEventListener('dragend', evt => {
      this.#touchEnd = evt.clientX
      if (this.#touchStart > this.#touchEnd + 30) {
        this.#swipeLeft()
        this.#render()
      } else if (this.#touchStart < this.#touchEnd + 30) {
        this.#swipeRight()
        this.#render()
      }
    })
  }

  #getContainerChildren (containerElement: HTMLElement): HTMLElement[] {
    const array = []
    for (const child of containerElement.children as HTMLCollectionOf<HTMLElement>) {
      array.push(child)
    }
    return array
  }
}
