export function toggleFullscreen () {
  nw.Window.get().toggleFullscreen()
}

export function setWindowScale (value) {
  nw.Window.get().zoomLevel = value
}
