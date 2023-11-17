import importAllIDirectory from './importAllIDirectory'

export default function preCacheImages (elementPercent: HTMLElement, endFunc: () => void): void {
  const allImages = importAllIDirectory(require.context('../Images/', true, /\.(png|jpe?g|svg)$/))
  const allSounds = importAllIDirectory(require.context('../Sounds/', true, /\.mp3$/))
  let allImagesAmount = 0
  let allSoundsAmount = 0
  let allLoadedFilesAmount = 0
  for (const allImagesKey in allImages) {
    const img = new Image()
    img.onload = () => {
      allLoadedFilesAmount++
      elementPercent.innerText = 'Загрузка: ' + String(allLoadedFilesAmount) + '/' + String(allImagesAmount + allSoundsAmount)
      allLoadedFilesAmount === allImagesAmount + allSoundsAmount && endFunc()
    }
    img.src = allImages[allImagesKey]
    allImagesAmount++
  }

  for (const allSoundsKey in allSounds) {
    const audio = new Audio(allSounds[allSoundsKey])
    audio.oncanplay = () => {
      allLoadedFilesAmount++
      elementPercent.innerText = 'Загрузка: ' + String(allLoadedFilesAmount) + '/' + String(allImagesAmount + allSoundsAmount)
      allLoadedFilesAmount === allImagesAmount + allSoundsAmount && endFunc()
    }
    allSoundsAmount++
  }
}
