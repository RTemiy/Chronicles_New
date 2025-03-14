export default class CSlider {
  #containerElement
  #containerElements: any[]
  #helperContainer
  #touchStart: number = 0
  #touchEnd: number = 0
  #helperElements: HTMLElement[] = []
  #helperPos = 0
  readonly #elementClassName: string
  readonly #helperClassName: string
  constructor (containerElement: HTMLElement, helperContainer: HTMLElement, elementClassName: string, helperClassName: string, private readonly videoSelector: string) {
    this.#containerElement = containerElement
    this.#helperContainer = helperContainer
    this.#elementClassName = elementClassName
    this.#helperClassName = helperClassName
    this.#containerElements = this.#getContainerChildren(containerElement)
    this.#generateSwiperHelper()
    this.#addEventListeners()
    this.#render()
    this.#changeActiveHelper(0)
  }

  #generateSwiperHelper (): void {
    for (let x = 0; x < this.#containerElements.length; x++) {
      const newElement = document.createElement('div')
      newElement.classList.add(this.#helperClassName)
      newElement.addEventListener('click', () => {
        this.#returnOriginalPosition()
        this.#goToPosition(x)
        this.#render()
      })
      this.#helperContainer.appendChild(newElement)
      this.#helperElements.push(newElement)
    }
  }

  #changeActiveHelper (number: number): void {
    this.#helperPos += number
    this.#validateHelperPos()
    this.#helperElements.forEach((el) => {
      el.classList.remove(this.#helperClassName + '_active')
    })
    this.#helperElements[this.#helperPos].classList.add(
      this.#helperClassName + '_active'
    )
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
      // const video = child.querySelector('.' + this.videoSelector)!
      // video.pause()
      child.setAttribute('style', `z-index: ${-index};`)
      index === 0 && child.setAttribute('style', ' z-index: 1;')
      // index === 0 && video.play()
      index === 1 && child.setAttribute('style', 'transform: translateX(8%); z-index: 0;')
      index === this.#containerElements.length - 1 &&
        child.setAttribute('style', 'transform: translateX(-8%); z-index: 0;')
      child.classList.add(this.#elementClassName + '_disabled')
      index === 0 &&
        child.classList.remove(this.#elementClassName + '_disabled')
    })
  }

  #addEventListeners (): void {
    this.#containerElement.addEventListener('touchstart', (evt) => {
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

    this.#containerElement.addEventListener('touchend', (evt) => {
      this.#touchEnd = evt.changedTouches[0].clientX
      this.#checkDelta()
    })

    /*
    this.#containerElement.addEventListener('dragstart', (evt) => {
      this.#touchStart = evt.clientX
    })

    this.#containerElement.addEventListener('dragend', (evt) => {
      this.#touchEnd = evt.clientX
      this.#checkDelta()
    })
    */
  }

  #checkDelta (): void {
    const delta = this.#touchStart - this.#touchEnd
    if (delta > 20) {
      this.#swipeLeft()
      this.#render()
    } else if (delta < -20) {
      this.#swipeRight()
      this.#render()
    }
  }

  #getContainerChildren (containerElement: HTMLElement): HTMLElement[] {
    const array = []
    for (const child of containerElement.children as HTMLCollectionOf<HTMLElement>) {
      array.push(child)
    }
    return array
  }

  #returnOriginalPosition (): void {
    while (this.#helperPos !== 0) {
      this.#swipeLeft()
    }
  }

  #goToPosition (index: number): void {
    while (this.#helperPos !== index) {
      this.#swipeRight()
    }
  }
}
