export function initParticles (element: HTMLElement): Record<string, () => void> {
  return {
    enableParticles: () => {
      const particles = []
      for (let x = 0; x < 4; x++) {
        const particle = document.createElement('div')
        particle.classList.add(`stars${x}`)
        element.appendChild(particle)
        particles.push(particle)
      }
    }
  }
}
