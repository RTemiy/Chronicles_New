import type CSoundSystem from './CSoundSystem'
import type CElementManager from './CElementManager'
import { EStoriesEn } from '../Utils/EStoriesNames'
import type CContainer from './CContainer'
import { type IButton } from '../Types/IScene'
import { loadData } from '../Functions/localStorageManager'
import { showAd } from '../Functions/advertisement'
import { ANDROIDMODE, DESKTOPMODE } from '../Utils/technicalConsts';
import { hideLoadingScreen } from '../Components/LoadingScreen/LoadingScreen'

import { changeState } from '../Functions/backEventActions'
import { doVibrate } from '../Functions/doVibrate'
import typingText from '../Functions/typingText';

export default class CSlide {
  private previousSlideText = ''

  constructor (
    private readonly slide: CContainer,
    private readonly blurredBackgroundFunc: (backgroundImage: string) => void,
    private readonly soundManager: CSoundSystem,
    private readonly tabManagerMenu: CElementManager,
    private readonly storiesElement: HTMLElement,
    private readonly menuToolbarElement: HTMLElement,
    private readonly inventoryElement: HTMLElement,
    private readonly journalElement: HTMLElement,
    private readonly hideToolbar: () => void,
    private readonly animateFunc: (element: HTMLElement, className: string, duration: number) => void,
    private readonly renderInventory: (story: EStoriesEn) => void,
    private readonly renderJournal: () => void,
    readonly showCutScene: (cutSceneInfo: { video: string, goTo: () => void }) => void,
    readonly showOKMessageFunc: (OKMessageInfo: { image: string, buttonText: string, goTo: () => void }) => void
  ) {
    this.addClicks()
  }

  showOKMessage (OKMessageInfo: { image: string, buttonText: string, goTo: () => void }): void {
    this.showOKMessageFunc(OKMessageInfo)
    setTimeout(() => {
      this.soundManager.play('simple', require('../Sounds/Common/Notification.mp3'))
      doVibrate('short')
    }, 2500)
  }

  changeImage (backImage?: string, leftImage?: string, middleImage?: string, rightImage?: string, frontImage?: string, fullscreenObject?: string, fullscreenObjectL?: string, fullscreenObjectR?: string, borderImage?: string): void {
    if (backImage !== undefined && backImage !== '') {
      setTimeout(() => { this.blurredBackgroundFunc(backImage) }, 1000)
      if (!this.slide.backgroundImage.src.includes(backImage)) {
        this.slide.backgroundImageHelper.src = this.slide.backgroundImage.src
        this.slide.backgroundImageHelper.classList.remove('slide__background_hide')
        setTimeout(() => {
          this.slide.backgroundImage.src = backImage
          this.slide.backgroundImageHelper.classList.add('slide__background_hide')
        }, 500)
      } else {
        this.slide.backgroundImage.src = backImage
      }
    } else if (backImage === undefined) {
      this.slide.backgroundImage.display = 'none'
      this.slide.backgroundImage.setAttribute('src', require('../Images/UI/Transparent.png'))
    }
    if (leftImage !== undefined && leftImage !== '') {
      if (!this.slide.imageLeft.src.includes(leftImage)) {
        this.animateFunc(this.slide.imageLeft, 'fade-in-left-left', 550)
      }
      this.slide.imageLeft.src = leftImage
      this.slide.imageLeft.style.display = 'block'
    } else if (leftImage === undefined) {
      this.slide.imageLeft.display = 'none'
      this.slide.imageLeft.setAttribute('src', require('../Images/UI/Transparent.png'))
    }
    if (middleImage !== undefined && middleImage !== '') {
      if (!this.slide.imageMiddle.src.includes(middleImage)) {
        this.animateFunc(this.slide.imageMiddle, 'fade-in-left', 550)
      }
      this.slide.imageMiddle.src = middleImage
      this.slide.imageMiddle.style.display = 'block'
    } else if (middleImage === undefined) {
      this.slide.imageMiddle.display = 'none'
      this.slide.imageMiddle.setAttribute('src', require('../Images/UI/Transparent.png'))
    }
    if (rightImage !== undefined && rightImage !== '') {
      if (!this.slide.imageRight.src.includes(rightImage)) {
        this.animateFunc(this.slide.imageRight, 'fade-in-left-right', 550)
      }
      this.slide.imageRight.src = rightImage
      this.slide.imageRight.style.display = 'block'
    } else if (rightImage === undefined) {
      this.slide.imageRight.display = 'none'
      this.slide.imageRight.setAttribute('src', require('../Images/UI/Transparent.png'))
    }
    if (frontImage !== undefined && frontImage !== '') {
      if (!this.slide.imageFront.src.includes(frontImage)) {
        this.animateFunc(this.slide.imageFront, 'fade-in-left', 550)
      }
      this.slide.imageFront.src = frontImage
      this.slide.imageFront.style.display = 'block'
    } else if (frontImage === undefined) {
      this.slide.imageFront.display = 'none'
      this.slide.imageFront.setAttribute('src', require('../Images/UI/Transparent.png'))
    }
    if (fullscreenObject !== undefined && fullscreenObject !== '') {
      if (!this.slide.fullscreenObject.src.includes(fullscreenObject)) {
        this.animateFunc(this.slide.fullscreenObject, 'fade-in-left-FS', 550)
      }
      this.slide.fullscreenObject.src = fullscreenObject
      this.slide.fullscreenObject.style.display = 'block'
    } else if (fullscreenObject === undefined) {
      this.slide.fullscreenObject.display = 'none'
      this.slide.fullscreenObject.setAttribute('src', require('../Images/UI/Transparent.png'))
    }

    if (fullscreenObjectL !== undefined && fullscreenObjectL !== '') {
      if (!this.slide.fullscreenObjectL.src.includes(fullscreenObjectL)) {
        this.slide.fullscreenObjectL.display = 'none'
        this.animateFunc(this.slide.fullscreenObjectL, 'fade-in-left-left-FS', 550)
      }
      this.slide.fullscreenObjectL.src = fullscreenObjectL
      this.slide.fullscreenObjectL.style.display = 'block'
    } else if (fullscreenObjectL === undefined) {
      this.slide.fullscreenObjectL.display = 'none'
      this.slide.fullscreenObjectL.setAttribute('src', require('../Images/UI/Transparent.png'))
    }

    if (fullscreenObjectR !== undefined && fullscreenObjectR !== '') {
      if (!this.slide.fullscreenObjectR.src.includes(fullscreenObjectR)) {
        this.animateFunc(this.slide.fullscreenObjectR, 'fade-in-left-right-FS', 550)
      }
      this.slide.fullscreenObjectR.src = fullscreenObjectR
      this.slide.fullscreenObjectR.style.display = 'block'
    } else if (fullscreenObjectR === undefined) {
      this.slide.fullscreenObjectR.display = 'none'
      this.slide.fullscreenObjectR.setAttribute('src', require('../Images/UI/Transparent.png'))
    }

    if (borderImage !== undefined && borderImage !== '') {
      this.slide.border.src = borderImage
      this.slide.border.style.display = 'block'
      this.slide.border.style.opacity = '1'
    } else if (borderImage === undefined) {
      this.slide.border.style.opacity = '0'
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
      button.oncontextmenu = () => {}
    })
  }

  message (text: string, noSound?: boolean): void {
    if (noSound === false || noSound === undefined) {
      this.soundManager.play('simple', require('../Sounds/Common/Notification.mp3'))
    }
    doVibrate('double')
    this.slide.messageText.innerHTML = text
    this.slide.message.classList.add('slide__message_show')
  }

  parallax (side: string | undefined): void {
    this.slide.backgroundImage.classList.remove('parallaxLeft')
    this.slide.backgroundImage.classList.remove('parallaxRight')
    side?.toUpperCase() === 'left'.toUpperCase() && this.slide.backgroundImage.classList.add('parallaxLeft')
    side?.toUpperCase() === 'right'.toUpperCase() && this.slide.backgroundImage.classList.add('parallaxRight')
  }

  changeText (text: string): void {
    this.slide.text.innerText.replace(/\s/g, '').length >= 1 && (this.previousSlideText = this.slide.text.innerHTML)
    this.slide.text.style.display = 'none'
    const resultText = '<p>' + text
    this.slide.text.innerHTML = resultText
    const storyName = EStoriesEn[loadData(['LastSave_ScenarioInfo'])!.split('_')[0]]
    text.length >= 8 && setTimeout(() => {
      this.slide.text.style.display = 'block'
      this.slide.text.innerHTML = this.slide.text.innerHTML.replace('$Имя Игрока$', loadData([`${storyName}_Name`]))
    }, 10)
    // eslint-disable-next-line no-mixed-operators
    loadData(['Settings_TypingText']) === 'true' || loadData(['Settings_TypingText']) === null && (setTimeout(() => {
      typingText(this.slide.text)
    }, 280))
  }

  changeSpeaker (speakerText: string | undefined, speakerTextL: string | undefined, speakerTextR: string | undefined): void {
    this.slide.speaker.style.display = 'none'
    this.slide.speaker.classList.remove('slide__speaker-right')
    this.slide.speaker.classList.remove('slide__speaker-left')
    this.slide.text.classList.remove('slide__text-speech')
    this.slide.text.classList.remove('slide__text-speechBig')
    if (speakerText !== undefined && speakerText !== '') {
      const storyName = EStoriesEn[loadData(['LastSave_ScenarioInfo'])!.split('_')[0]]
      this.slide.speaker.innerText = speakerText.replace('$Имя Игрока$', loadData([`${storyName}_Name`])!)
      setTimeout(() => {
        this.slide.speaker.style.display = 'block'
        this.slide.speaker.classList.add('slide__speaker-left')
      }, 10)
      this.slide.text.classList.add('slide__text-speech')
      this.slide.text.innerHTML.length > 120 && this.slide.text.classList.add('slide__text-speechBig')
    } else if (speakerTextL !== undefined && speakerTextL !== '') {
      const storyName = EStoriesEn[loadData(['LastSave_ScenarioInfo'])!.split('_')[0]]
      this.slide.speaker.innerText = speakerTextL.replace('$Имя Игрока$', loadData([`${storyName}_Name`])!)
      setTimeout(() => {
        this.slide.speaker.style.display = 'block'
        this.slide.speaker.classList.add('slide__speaker-left')
      }, 10)
      this.slide.text.classList.add('slide__text-speech')
      this.slide.text.innerHTML.length > 120 && this.slide.text.classList.add('slide__text-speechBig')
    } else if (speakerTextR !== undefined && speakerTextL !== '') {
      const storyName = EStoriesEn[loadData(['LastSave_ScenarioInfo'])!.split('_')[0]]
      this.slide.speaker.innerText = speakerTextR.replace('$Имя Игрока$', loadData([`${storyName}_Name`])!)
      setTimeout(() => {
        this.slide.speaker.style.display = 'block'
        this.slide.speaker.classList.add('slide__speaker-right')
      }, 10)
      this.slide.text.classList.add('slide__text-speech')
      this.slide.text.innerHTML.length > 120 && this.slide.text.classList.add('slide__text-speechBig')
    } else {
      this.slide.speaker.style.display = 'none'
      this.slide.text.classList.remove('slide__text-speech')
    }
  }

  changeDarkSilhouette (status: boolean): void {
    if (status) {
      this.slide.imageFront.classList.add('image_silhouette')
      this.slide.fullscreenObject.classList.add('image_silhouette')
      this.slide.fullscreenObjectL.classList.add('image_silhouette')
      this.slide.fullscreenObjectR.classList.add('image_silhouette')
    } else {
      this.slide.imageFront.classList.remove('image_silhouette')
      this.slide.fullscreenObject.classList.remove('image_silhouette')
      this.slide.fullscreenObjectL.classList.remove('image_silhouette')
      this.slide.fullscreenObjectR.classList.remove('image_silhouette')
    }
  }

  changeGhostSilhouette (status: boolean): void {
    if (status) {
      this.slide.imageFront.classList.add('image_ghost')
      this.slide.fullscreenObject.classList.add('image_ghost')
      this.slide.fullscreenObjectL.classList.add('image_ghost')
      this.slide.fullscreenObjectR.classList.add('image_ghost')
    } else {
      this.slide.imageFront.classList.remove('image_ghost')
      this.slide.fullscreenObject.classList.remove('image_ghost')
      this.slide.fullscreenObjectL.classList.remove('image_ghost')
      this.slide.fullscreenObjectR.classList.remove('image_ghost')
    }
  }

  changeBlurredSilhouette (status: boolean): void {
    if (status) {
      this.slide.imageFront.classList.add('image_blurred')
      this.slide.fullscreenObject.classList.add('image_blurred')
      this.slide.fullscreenObjectL.classList.add('image_blurred')
      this.slide.fullscreenObjectR.classList.add('image_blurred')
    } else {
      this.slide.imageFront.classList.remove('image_blurred')
      this.slide.fullscreenObject.classList.remove('image_blurred')
      this.slide.fullscreenObjectL.classList.remove('image_blurred')
      this.slide.fullscreenObjectR.classList.remove('image_blurred')
    }
  }

  setButtonValues (buttons: IButton[]): void {
    this.resetButtonValues()
    if (buttons.length <= 1 && !buttons[0].gift) {
      this.slide.text.onclick = () => {
        buttons[0].func!()
        this.hideToolbar()
      }
      this.slide.fullscreenObject.onclick = () => {
        this.hideToolbar()
        buttons[0].func!()
      }
      this.forEachButton((button: HTMLElement) => {
        button.style.display = 'none'
      })
    } else {
      this.slide.fullscreenObject.onclick = () => {}
      const buttonsArray = this.getButtonsArray()
      buttons.forEach((button, index) => {
        if (!buttons[index].gift) {
          buttonsArray[index].innerHTML = buttons[index].text
          buttonsArray[index].onclick = () => {
            buttons[index].func!()
            this.hideToolbar()
          }
        } else {
          buttonsArray[index].innerHTML = '<p>' + buttons[index].text + `<img src="${require('../Images/UI/icon_gift.svg')}" class="icon_span" ${DESKTOPMODE && 'style="display: none;"'} ${ANDROIDMODE && 'style="display: none;"'}/></p>`
          buttonsArray[index].onclick = () => {
            showAd('medium', () => {
              buttons[index].func!()
              this.hideToolbar()
            })
          }
        }
        if (buttons[index].isActive === undefined || buttons[index].isActive!) {
          buttonsArray[index].style.display = 'inline'
        } else {
          buttonsArray[index].style.display = 'none'
          buttonsArray[index].innerText = buttons[index].text
        }
      })
    }
  }

  showAchievement (achievementInfo: { title: string, text: string, image: string }): void {
    this.slide.achievement.style.display = 'flex'
    this.slide.achievementTitle.innerText = achievementInfo.title
    this.slide.achievementText.innerText = achievementInfo.text
    this.slide.achievementImage.src = achievementInfo.image
    this.slide.achievement.classList.remove('slide__achievement_hide')
    this.slide.achievement.classList.add('slide__achievement_show')
    setTimeout(() => {
      this.slide.achievement.classList.add('slide__achievement_hide')
    }, 4000)
    setTimeout(() => {
      this.slide.achievement.style.display = 'none'
      this.slide.achievement.classList.remove('slide__achievement_hide')
    }, 4500)
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
      hideLoadingScreen()
      changeState('menu')
      setTimeout(() => { hideLoadingScreen() }, 1100)
    }

    this.slide.journalButton.onclick = () => {
      changeState('journal')
      this.renderJournal()
      this.journalElement.style.display = 'flex'
    }

    this.slide.inventoryButton.onclick = () => {
      changeState('inventory')
      this.renderInventory(EStoriesEn[loadData(['LastSave_ScenarioInfo'])!.split('_')[0]])
      this.inventoryElement.style.display = 'flex'
      this.slide.inventoryButton.classList.remove('pulsating-white')
    }
  }

  alertInventory (): void {
    this.slide.inventoryButton.classList.add('pulsating-white')
  }
}
