import CContainer from '../../Classes/CContainer'
import './LoadingScreen.scss'

export const LoadingScreen = new CContainer('loading-screen',
  `
    <img class="loading-screen__background-blurred-image-helper slide__background_hide">
    <img class="loading-screen__background-blurred-image">
    <div class="loading-screen__background-image-wrapper">
      <img class="loading-screen__background-image">
    </div>
    <p class="loading-screen__percent">100%</p>
    <p class="loading-screen__continue-button">Нажмите, чтобы<img src='${require('../../Images/UI/Transparent.png')}' class="loading-screen__tapImage loading-screen__tapImage_start"/> продолжить</p>
    <img class="loading-screen__logo" src='${require('../../Images/UI/logo.svg')}'>
  `,
  { name: 'backgroundBlurredImage', selector: '.loading-screen__background-blurred-image' },
  { name: 'backgroundImage', selector: '.loading-screen__background-image' },
  { name: 'backgroundBlurredImageHelper', selector: '.loading-screen__background-blurred-image-helper' },
  { name: 'logo', selector: '.loading-screen__logo' },
  { name: 'loadingPercent', selector: '.loading-screen__percent' },
  { name: 'continueButton', selector: '.loading-screen__continue-button' },
  { name: 'tapButton', selector: '.loading-screen__tapImage' }
)

let isShowingLoadingScreen: boolean = true

export const renderLoadingScreen = (backgroundImage: string, func: () => void): void => {
  isShowingLoadingScreen = true
  LoadingScreen.self.style.display = 'grid'
  LoadingScreen.backgroundBlurredImage.src = backgroundImage
  LoadingScreen.backgroundBlurredImage.style.display = 'block'
  LoadingScreen.backgroundImage.style.display = 'block'
  LoadingScreen.loadingPercent.style.display = 'none'
  LoadingScreen.continueButton.style.display = 'block'
  LoadingScreen.backgroundImage.src = backgroundImage
  LoadingScreen.self.onclick = () => {
    func()
    LoadingScreen.self.onclick = () => {}
    isShowingLoadingScreen = false
  }
}

export function setIsShowingLoadingScreenFalse (): void {
  isShowingLoadingScreen = false
}

export function hideLoadingScreen (): void {
  LoadingScreen.self.style.zIndex = '-1000'
  LoadingScreen.backgroundImage.src = require('../../Images/UI/Transparent.png')
  LoadingScreen.backgroundBlurredImage.src = require('../../Images/UI/Transparent.png')
  LoadingScreen.backgroundBlurredImage.style.display = 'none'
  LoadingScreen.backgroundImage.style.display = 'none'
  LoadingScreen.loadingPercent.style.display = 'none'
  LoadingScreen.continueButton.style.display = 'none'
  LoadingScreen.logo.style.display = 'none'
  LoadingScreen.backgroundBlurredImageHelper.style.display = 'none'
}

export function showBlurredBackground (backgroundImage: string): void {
  if (!isShowingLoadingScreen) {
    LoadingScreen.self.onclick = () => {}
    LoadingScreen.backgroundBlurredImage.style.display = 'block'
    LoadingScreen.self.style.zIndex = '-1000'
    LoadingScreen.backgroundImage.style.display = 'none'
    LoadingScreen.loadingPercent.style.display = 'none'
    LoadingScreen.continueButton.style.display = 'none'
    LoadingScreen.backgroundImage.style.display = 'none'
    LoadingScreen.backgroundImage.src = require('../../Images/UI/Transparent.png')
    LoadingScreen.backgroundBlurredImageHelper.style.display = 'block'
    if (!LoadingScreen.backgroundBlurredImage.src.includes(backgroundImage)) {
      LoadingScreen.backgroundBlurredImageHelper.style.display = 'block'
      LoadingScreen.backgroundBlurredImageHelper.classList.remove('slide__background_hide')
      setTimeout(() => {
        LoadingScreen.backgroundBlurredImage.src = backgroundImage
        LoadingScreen.backgroundBlurredImageHelper.classList.add('slide__background_hide')
        setTimeout(() => {
          LoadingScreen.backgroundBlurredImageHelper.src = backgroundImage
        }, 500)
      }, 500)
    }
  }
}
