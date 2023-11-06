export default class CContainer {
  [x: string]: any
  self = document.createElement('div')
  constructor (className: string, inner: string, ...elements: Array<{ name: string, selector: string }>) {
    this.self.setAttribute('class', className)
    document.body.appendChild(this.self)
    this.self.innerHTML = inner
    elements.forEach(el => {
      this[el.name] = this.self.querySelector(el.selector)
    })
  }
}
