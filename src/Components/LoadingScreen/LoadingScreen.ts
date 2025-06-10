import CContainer from '../../Classes/CContainer'
import './LoadingScreen.scss'

export const LoadingScreen = new CContainer('loading-screen',
  `
    <img class="loading-screen__background-blurred-image-helper slide__background_hide">
    <img class="loading-screen__background-blurred-image">
    <img class="loading-screen__background-image">
    <p class="loading-screen__percent">100%</p>
    <p class="loading-screen__continue-button">Нажмите, чтобы продолжить</p>
  `,
  { name: 'backgroundBlurredImage', selector: '.loading-screen__background-blurred-image' },
  { name: 'backgroundImage', selector: '.loading-screen__background-image' },
  { name: 'backgroundBlurredImageHelper', selector: '.loading-screen__background-blurred-image-helper' },
  { name: 'loadingPercent', selector: '.loading-screen__percent' },
  { name: 'continueButton', selector: '.loading-screen__continue-button' }
)

export let isShowingLoadingScreen: boolean = true

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

export function hideLoadingScreen (): void {
  LoadingScreen.self.style.zIndex = '-1000'
  LoadingScreen.backgroundBlurredImage.style.display = 'none'
  LoadingScreen.backgroundImage.style.display = 'none'
  LoadingScreen.loadingPercent.style.display = 'none'
  LoadingScreen.continueButton.style.display = 'none'
  LoadingScreen.backgroundBlurredImageHelper.style.display = 'none'
}

export function showBlurredBackground (backgroundImage: string): void {
  if (!isShowingLoadingScreen) {
    LoadingScreen.backgroundBlurredImage.style.display = 'block'
    LoadingScreen.self.style.zIndex = '-1000'
    LoadingScreen.backgroundImage.style.display = 'none'
    LoadingScreen.loadingPercent.style.display = 'none'
    LoadingScreen.continueButton.style.display = 'none'
    LoadingScreen.backgroundImage.style.display = 'block'
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

