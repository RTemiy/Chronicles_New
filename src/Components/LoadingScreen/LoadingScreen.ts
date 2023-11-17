import CContainer from '../../Classes/CContainer'
import './LoadingScreen.scss'

export const LoadingScreen = new CContainer('loading-screen',
  `
    <img class="loading-screen__background-blurred-image">
    <img class="loading-screen__background-image">
    <p class="loading-screen__percent">100%</p>
    <p class="loading-screen__continue-button">Нажмите, чтобы продолжить</p>
  `,
  { name: 'backgroundBlurredImage', selector: '.loading-screen__background-blurred-image' },
  { name: 'backgroundImage', selector: '.loading-screen__background-image' },
  { name: 'loadingPercent', selector: '.loading-screen__percent' },
  { name: 'continueButton', selector: '.loading-screen__continue-button' }
)

export const renderLoadingScreen = (backgroundImage: string, func: () => void): void => {
  LoadingScreen.self.style.display = 'grid'
  LoadingScreen.backgroundBlurredImage.src = backgroundImage
  LoadingScreen.backgroundImage.src = backgroundImage
  LoadingScreen.self.onclick = () => {
    func()
    LoadingScreen.self.onclick = () => {}
  }
}
