import importAllIDirectory from './importAllIDirectory'

import { disableLoading, setPercent } from '../Components/PrecacheLoading/PrecacheLoading'

export default function preCacheImages (elementPercent: HTMLElement, endFunc: () => void): void {
  const allImages = {
    ...importAllIDirectory(require.context('../Media/Images/', true, /\.svg$/)),
    ...importAllIDirectory(require.context('../Media/Images/', true, /Story_Cover\.jpg$/)),
    ...importAllIDirectory(require.context('../Media/Images/', true, /Title\.png$/)),
    ...importAllIDirectory(require.context('../Media/Images/', true, /\.(png|jpe?g|svg)$/))
  }
  const allImagesAmount = Object.keys(allImages).length
  let allLoadedFilesAmount = 0
  for (const allImagesKey in allImages) {
    const img = new Image()
    img.onload = () => {
      allLoadedFilesAmount++
      const percent = Math.ceil((allLoadedFilesAmount / (allImagesAmount)) * 100)
      elementPercent.innerText = 'Загрузка: ' + String(percent) + '%'
      setPercent(`${allLoadedFilesAmount}/${allImagesAmount} (${percent}%)`)
      allLoadedFilesAmount === allImagesAmount && disableLoading()
    }
    img.src = allImages[allImagesKey]
  }
  endFunc()
}
