import domtoimage from 'dom-to-image-more'

export default async function saveScreenshot (element) {
  domtoimage.toPng(element, { height: element.scrollHeight, width: element.scrollWidth }).then(dataUrl => {
    const link = document.createElement('a')
    link.href = dataUrl
    link.download = 'profile.png'
    link.click()
  })
}
