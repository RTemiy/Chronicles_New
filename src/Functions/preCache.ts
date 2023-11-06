import importAllImages from './importAllImages'

export default function preCacheImages (elementPercent: HTMLElement, endFunc: any): void {
  const allImages = importAllImages(require.context('../Images/', true, /\.(png|jpe?g|svg)$/))
  let allImagesAmount = 0
  let allLoadedImagesAmount = 0
  for (const allImagesKey in allImages) {
    const img = new Image()
    img.onload = () => {
      allLoadedImagesAmount++
      elementPercent.innerText = 'Загрузка: ' + String(allLoadedImagesAmount) + '/' + String(allImagesAmount)
      allImagesAmount === allLoadedImagesAmount && endFunc()
    }
    img.src = allImages[allImagesKey]
    allImagesAmount++
  }
}
