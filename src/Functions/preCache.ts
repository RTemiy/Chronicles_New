import importAllIDirectory from './importAllIDirectory'

export default function preCacheImages (elementPercent: HTMLElement, endFunc: () => void): void {
  const allImages = importAllIDirectory(require.context('../Images/', true, /\.(png|jpe?g|svg)$/))
  const allImagesAmount = Object.keys(allImages).length
  let allLoadedFilesAmount = 0
  for (const allImagesKey in allImages) {
    const img = new Image()
    img.onload = () => {
      allLoadedFilesAmount++
      const percent = Math.ceil((allLoadedFilesAmount / (allImagesAmount)) * 100)
      elementPercent.innerText = 'Загрузка: ' + String(percent) + '%'
      allLoadedFilesAmount === allImagesAmount && endFunc()
    }
    img.src = allImages[allImagesKey]
  }
}
