import importAllIDirectory from './importAllIDirectory'

export default function preCacheImages (
  elementPercent: HTMLElement,
  endFunc: () => void
): void {
  const allImages = importAllIDirectory(require.context('../Images/', true, /\.(png|jpe?g|svg)$/))
  const allSounds = importAllIDirectory(require.context('../Sounds/', true, /\.mp3$/))
  const allImagesAmount = Object.keys(allImages).length
  const allSoundsAmount = Object.keys(allSounds).length
  let allLoadedFilesAmount = 0
  for (const allImagesKey in allImages) {
    const img = new Image()
    img.onload = () => {
      allLoadedFilesAmount++
      const percent = Math.ceil((allLoadedFilesAmount / (allImagesAmount + allSoundsAmount)) * 100)
      elementPercent.innerText = 'Загрузка: ' + String(percent) + '%'
      allLoadedFilesAmount === allImagesAmount + allSoundsAmount && endFunc()
    }
    img.src = allImages[allImagesKey]
  }

  for (const allSoundsKey in allSounds) {
    const audio = new Audio(allSounds[allSoundsKey])
    audio.oncanplay = () => {
      allLoadedFilesAmount++
      const percent = Math.ceil((allLoadedFilesAmount / (allImagesAmount + allSoundsAmount)) * 100)
      elementPercent.innerText = 'Загрузка: ' + String(percent) + '%'
      allLoadedFilesAmount === allImagesAmount + allSoundsAmount && endFunc()
    }
  }
}
