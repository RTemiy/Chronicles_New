export function animateBackForth (
  element: HTMLElement,
  className: string,
  duration: number
): void {
  const doAnimation = function (
    element: HTMLElement,
    className: string,
    duration: number
  ): void {
    element.classList.add(className)
    setTimeout(() => {
      element.classList.remove(className)
    }, duration)
  }
  doAnimation(element, className, duration)
}
