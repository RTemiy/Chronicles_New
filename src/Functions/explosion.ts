export default function makeExplosion (
  element: HTMLElement,
  symbol: string[],
  duration: number = 1,
  amount: number = 20,
  range: number = 25,
  rotation: number = 20): void {
  const debrises: HTMLAnchorElement[] = []
  debrises.push(document.createElement('a'))
  for (let x = 1; x < amount; x++) {
    debrises.push(document.createElement('a'))
    const debris = debrises[x]
    debris.classList.add('debris')
    debris.innerHTML = symbol[Math.floor(Math.random() * (symbol.length))]
    const xPos = Math.random() < 0.5 ? Math.random() * -range * x : Math.random() * range * x
    const yPos = Math.random() < 0.5 ? Math.random() * -range * x : Math.random() * range * x
    const rotationDeg = Math.random() < 0.5 ? Math.random() * -rotation * x : Math.random() * rotation * x
    setTimeout(() => {
      debris.setAttribute('style', `
      opacity: 0;
      visibility: hidden;
      transition: all ${duration}s ease-in-out;
      transform: translate(
      ${xPos}px,
      ${yPos}px)
      rotate(${rotationDeg}deg);
    `)
    }, 0)
    element.appendChild(debris)
  }
  setTimeout(() => { debrises.forEach(el => { el.remove() }) }, duration * 1000)
}
