import CContainer from '../../Classes/CContainer'
import './TextInput.scss'

export const TextInput = new CContainer(
  'text-input',
  `
  <div class="text-input__container">
  <p class="text-input__message"></p>
  <input placeholder="Введите текст" class="text-input__input" type="text">
  <button type="button" class="text-input__button">Ок</button>
  </div>
  `,
  { name: 'container', selector: '.text-input__container' },
  { name: 'message', selector: '.text-input__message' },
  { name: 'input', selector: '.text-input__input' },
  { name: 'button', selector: '.text-input__button' }
)

export function askForInput (message: string, callback: (value: string) => void): void {
  TextInput.message.innerText = message
  TextInput.input.value = ''
  TextInput.self.style.display = 'flex'
  validate()
  TextInput.button.onclick = () => {
    callback(TextInput.input.value)
    TextInput.self.style.display = 'none'
  }
}
const validatorExp = /^[а-яА-ЯёЁ]+$/

TextInput.input.oninput = () => {
  validate()
}

function validate (): void {
  if (validatorExp.test(TextInput.input.value) && TextInput.input.value.length <= 15) {
    TextInput.button.style.display = 'block'
  } else {
    TextInput.button.style.display = 'none'
  }
}