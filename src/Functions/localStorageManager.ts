export function saveData (name: string[], values: any[], separator: string = '_'): void {
  let fullName = ''
  let fullValues = ''
  name.forEach((el, index) => {
    if (index !== name.length - 1) fullName += String(el) + separator
    else fullName += String(el)
  })
  values.forEach((el, index) => {
    if (index !== values.length - 1) fullValues += String(el) + separator
    else fullValues += String(el)
  })
  localStorage.setItem(fullName, fullValues)
}

export function loadData (name: string[], separator: string = '_'): string | null {
  let fullName = ''
  name.forEach((el, index) => {
    if (index !== name.length - 1) fullName += el + separator
    else fullName += el
  })
  return localStorage.getItem(fullName)
}
