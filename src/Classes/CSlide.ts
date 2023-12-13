import type CSoundSystem from './CSoundSystem'
import type CElementManager from './CElementManager'
import { EStoriesEn } from '../Utils/EStoriesNames'
import type CContainer from './CContainer'
import { type IButton } from '../Types/IScene'
import { loadData } from '../Functions/localStorageManager'

export default class CSlide {
  private previousSlideText = ''

  constructor (
    private readonly slide: CContainer,
    private readonly soundManager: CSoundSystem,
    private readonly tabManagerMenu: CElementManager,
    private readonly storiesElement: HTMLElement,
    private readonly menuToolbarElement: HTMLElement,
    private readonly inventoryElement: HTMLElement,
    private readonly animateFunc: (element: HTMLElement, className: string, duration: number) => void,
    private readonly renderInventory: (story: EStoriesEn) => void
  ) { this.addClicks() }

  changeImage (
    backImage?: string,
    leftImage?: string,
    middleImage?: string,
    rightImage?: string,
    frontImage?: string,
    borderImage?: string
  ): void {
    if (backImage !== undefined && backImage !== '') {
      this.slide.backgroundImage.src = backImage
    } else if (backImage === undefined) {
      this.slide.backgroundImage.display = 'none'
      this.slide.backgroundImage.setAttribute('src', '')
    }
    if (leftImage !== undefined && leftImage !== '') {
      if (!this.slide.imageLeft.src.includes(leftImage)) {
        this.animateFunc(this.slide.imageLeft, 'fade-in-left-left', 550)
      }
      this.slide.imageLeft.src = leftImage
      this.slide.imageLeft.style.display = 'block'
    } else if (leftImage === undefined) {
      this.slide.imageLeft.display = 'none'
      this.slide.imageLeft.setAttribute('src', '')
    }
    if (middleImage !== undefined && middleImage !== '') {
      if (!this.slide.imageMiddle.src.includes(middleImage)) {
        this.animateFunc(this.slide.imageMiddle, 'fade-in-left', 550)
      }
      this.slide.imageMiddle.src = middleImage
      this.slide.imageMiddle.style.display = 'block'
    } else if (middleImage === undefined) {
      this.slide.imageMiddle.display = 'none'
      this.slide.imageMiddle.setAttribute('src', '')
    }
    if (rightImage !== undefined && rightImage !== '') {
      if (!this.slide.imageRight.src.includes(rightImage)) {
        this.animateFunc(this.slide.imageRight, 'fade-in-left-right', 550)
      }
      this.slide.imageRight.src = rightImage
      this.slide.imageRight.style.display = 'block'
    } else if (rightImage === undefined) {
      this.slide.imageRight.display = 'none'
      this.slide.imageRight.setAttribute('src', '')
    }
    if (frontImage !== undefined && frontImage !== '') {
      if (!this.slide.imageFront.src.includes(frontImage)) {
        this.animateFunc(this.slide.imageFront, 'fade-in-left', 550)
      }
      this.slide.imageFront.src = frontImage
      this.slide.imageFront.style.display = 'block'
    } else if (frontImage === undefined) {
      this.slide.imageFront.display = 'none'
      this.slide.imageFront.setAttribute('src', '')
    }
    if (borderImage !== undefined && borderImage !== '') {
      this.slide.border.src = borderImage
      this.slide.border.style.display = 'block'
    } else if (borderImage === undefined) {
      this.slide.border.src = require('../Images/UI/border_invisible.png')
    }
  }

  private getButtonsArray (): HTMLElement[] {
    return Array.from(this.slide.buttons.children)
  }

  private forEachButton (func: (button: HTMLElement) => void): void {
    this.getButtonsArray().forEach((button) => {
      func(button)
    })
  }

  private resetButtonValues (): void {
    this.slide.text.onclick = () => {}
    this.forEachButton((button: HTMLElement) => {
      button.onclick = () => {}
      button.style.display = 'none'
      button.innerText = ''
    })
  }

  message (text: string, noSound?: boolean): void {
    if (noSound === false || noSound === undefined) {
      this.soundManager.play(
        'simple',
        require('../Sounds/Common/Notification.mp3')
      )
    }
    this.slide.messageText.innerHTML = text
    this.slide.message.classList.add('slide__message_show')
  }

  changeText (text: string): void {
    this.previousSlideText = this.slide.text.innerHTML
    this.slide.text.style.display = 'none'
    this.slide.text.innerHTML = '<p>' + text
    const storyName = EStoriesEn[loadData(['LastSave_ScenarioInfo'])!.split('_')[0]]
    text.length >= 5 && setTimeout(() => {
      this.slide.text.style.display = 'block'
      this.slide.text.innerHTML = this.slide.text.innerHTML.replace('$Имя Игрока$', loadData([`${storyName}_Name`]))
    }, 10)
  }

  setButtonValues (buttons: IButton[]): void {
    this.resetButtonValues()
    if (buttons.length <= 1) {
      this.slide.text.onclick = () => {
        buttons[0].func!()
      }
      this.slide.backgroundImage.onclick = () => {
        buttons[0].func!()
      }
      this.forEachButton((button: HTMLElement) => {
        button.style.display = 'none'
      })
    } else {
      this.slide.backgroundImage.onclick = () => {}
      const buttonsArray = this.getButtonsArray()
      buttons.forEach((button, index) => {
        buttonsArray[index].onclick = () => {
          buttons[index].func!()
        }
        if (buttons[index].isActive === undefined || buttons[index].isActive!) {
          buttonsArray[index].style.display = 'block'
        } else buttonsArray[index].style.display = 'none'
        buttonsArray[index].innerText = buttons[index].text
      })
    }
  }

  showAchievement (achievementInfo: { title: string, text: string, image: string }): void {
    this.slide.achievement.style.display = 'flex'
    this.slide.achievementTitle.innerText = achievementInfo.title
    this.slide.achievementText.innerText = achievementInfo.text
    this.slide.achievementImage.src = achievementInfo.image
    this.slide.achievement.classList.remove('slide__achievement_hide')
    setTimeout(() => {
      this.slide.achievement.classList.add('slide__achievement_hide')
    }, 4000)
    setTimeout(() => {
      this.slide.achievement.style.display = 'none'
      this.slide.achievement.classList.remove('slide__achievement_hide')
    }, 4500)
  }

  showCutScene (image: string): void {
    this.slide.cutScene.style.display = 'flex'
    setTimeout(() => {
      this.slide.cutScene.classList.add('cut-scene_show')
      this.slide.cutSceneImage.src = image
    }, 100)
    setTimeout(() => {
      this.slide.cutSceneContainer.style.display = 'flex'
      setTimeout(() => {
        this.slide.cutSceneContainer.classList.add('cut-scene__container_show')
      }, 100)
    }, 2000)
  }

  addClicks (): void {
    this.slide.message.onclick = () => {
      this.slide.message.classList.remove('slide__message_show')
    }

    this.slide.previousSlideButton.onclick = () => {
      if (this.previousSlideText.length >= 1) {
        this.message(this.previousSlideText, true)
      }
    }

    this.slide.exitSlideButton.onclick = () => {
      this.tabManagerMenu.open(this.storiesElement)
      this.slide.self.style.display = 'none'
      this.menuToolbarElement.style.display = 'flex'
      this.soundManager.play('menu')
    }

    this.slide.inventoryButton.onclick = () => {
      this.renderInventory(EStoriesEn[loadData(['LastSave_ScenarioInfo'])!.split('_')[0]])
      this.inventoryElement.style.display = 'flex'
      this.slide.inventoryButton.classList.remove('pulsating-white')
    }

    this.slide.cutSceneButton.onclick = () => {
      this.slide.cutSceneContainer.classList.remove('cut-scene__container_show')
      setTimeout(() => {
        this.slide.cutSceneContainer.style.display = 'none'
        this.slide.cutScene.classList.remove('cut-scene_show')
      }, 1000)
      setTimeout(() => {
        this.slide.cutScene.style.display = 'none'
      }, 3000)
    }
  }

  alertInventory (): void {
    this.slide.inventoryButton.classList.add('pulsating-white')
  }
}
