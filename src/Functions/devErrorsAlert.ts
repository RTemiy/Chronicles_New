import { showMessage } from '../Components/MenuMessage/MenuMessage'

export function makeDevErrorAlerts (): void {
  const originalConsoleError = console.error

  console.error = (...args) => {
    showMessage(`Ошибка! <p><p><p> ${args[0]}`, 'Продолжить')
  }

  window.addEventListener('error', (event) => {
    if (event.message !== undefined){
      showMessage(`
Ошибка! 
<p><p><p><p><p>${event.message} 

<p><p><p>Файл: ${event.filename}: ${event.lineno}:${event.colno} 
<p><p><p>Слайд: ${document.querySelector('.console__slide-id')!.innerHTML!}
<p><p><p> <details><summary style="text-align: center;">Что дальше?</summary>
  <p>- Сделай скриншот и отправь его разработчику</p>
  <p>- Можешь попробовать при помощи консоли перейти на следующий/другие слайды</p>
</details>
`, 'Продолжить')
    }
  }, true)
}
