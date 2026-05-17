import './Auth.scss'
import CContainer from '../../Classes/CContainer'
import { getGameDataFromLocalStorage, loginUser, registerUser, requestPasswordReset, updateUserData } from '../../Functions/chroniclesServerAPI'

export const Auth = new CContainer('auth',
  `
    <div class="auth__modal">
        <div class="auth__tabs">
            <button class="auth__tab-button active" data-form="login">Вход</button>
            <button class="auth__tab-button" data-form="register">Регистрация</button>
            <button class="auth__tab-button" data-form="recover">Сброс</button>
        </div>

        <!-- Форма входа -->
        <form id="login-form" class="auth__form active">
            <input type="text" id="login-email" placeholder="Email" autocomplete="email"> 
            <input type="password" id="login-password" placeholder="Пароль" autocomplete="current-password">
            <div class="auth__message-container"></div>
            <button type="submit" class="auth__submit-button">Войти</button>
        </form>

        <!-- Форма регистрации -->
        <form id="register-form" class="auth__form">
            <input type="text" id="register-email" placeholder="Email" autocomplete="email">
            <input type="password" id="register-password" placeholder="Пароль" autocomplete="new-password">
            <div class="auth__message-container"></div>
            <button type="submit" class="auth__submit-button">Зарегистрироваться</button>
        </form>
        
        <!-- Форма восстановления пароля -->
        <form id="recover-form" class="auth__form">
            <input type="text" id="recover-email" placeholder="Email" autocomplete="email">
            <div class="auth__message-container"></div>
            <button type="submit" class="auth__submit-button">Восстановить</button>
        </form>

    </div>
`,
  { name: 'loginForm', selector: '#login-form' },
  { name: 'registerForm', selector: '#register-form' },
  { name: 'recoverForm', selector: '#recover-form' },
  { name: 'loginEmail', selector: '#login-email' },
  { name: 'loginPassword', selector: '#login-password' },
  { name: 'registerEmail', selector: '#register-email' },
  { name: 'registerPassword', selector: '#register-password' },
  { name: 'recoverEmail', selector: '#recover-email' }
)

// Создаем элемент для сообщений один раз
Auth.message = document.createElement('div')
Auth.message.className = 'auth__message'

const tabButtons = Auth.self.querySelectorAll<HTMLButtonElement>('.auth__tab-button')
const allInputs = Auth.self.querySelectorAll<HTMLInputElement>('input')

/**
 * Обрабатывает успешный вход в систему или проверку сессии.
 * @param {object} userData - Данные пользователя, полученные от сервера.
 */
export async function handleSuccessfulLogin (userData: object): Promise<void> {
  // Здесь можно обновить UI, например, отобразить имя пользователя в профиле.
  const localData = getGameDataFromLocalStorage()
  const LAST_SYNC_KEY = 'lastDataSyncTimestamp'
  const now = new Date().getTime()
  const success = await updateUserData(localData)
  if (success) {
    localStorage.setItem(LAST_SYNC_KEY, now.toString())
    console.log('Синхронизация завершена успешно.')
  }
  // то что сверху раскомментируем после нескольких обновлений
  Auth.self.style.display = 'none' // Скрываем модальное окно
}

function showMessage (text: string, isError: boolean = false): void {
  Auth.message.textContent = text
  Auth.message.style.visibility = 'visible'
  Auth.message.style.opacity = '1'
  Auth.message.style.color = isError ? 'LightPink' : 'lightgreen'
}

function clearValidation (): void {
  clearMessage()
  allInputs.forEach(input => {
    input.classList.remove('invalid')
    input.classList.remove('valid')
  })
}

function clearMessage (): void {
  Auth.message.textContent = ''
  Auth.message.style.visibility = 'hidden'
  Auth.message.style.opacity = '0'
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateEmail (input: HTMLInputElement): boolean {
  if (emailRegex.test(input.value)) {
    input.classList.remove('invalid')
    input.classList.add('valid')
    return true
  } else {
    input.classList.remove('valid')
    if (input.value.length > 0) { // Показываем ошибку только если что-то введено
      input.classList.add('invalid')
      showMessage('Пожалуйста, введите корректный email.', true)
    }
    return false
  }
}

function validatePassword (input: HTMLInputElement): boolean {
  if (input.value.length >= 6) {
    input.classList.remove('invalid')
    input.classList.add('valid')
    return true
  } else {
    input.classList.remove('valid')
    if (input.value.length > 0) { // Показываем ошибку только если что-то введено
      input.classList.add('invalid')
      showMessage('Пароль должен быть не менее 6 символов.', true)
    }
    return false
  }
}

// Переключение вкладок
tabButtons.forEach((button: HTMLButtonElement) => {
  button.addEventListener('click', () => {
    clearValidation()
    const formId = button.dataset.form

    // Переключаем активность кнопок
    tabButtons.forEach((btn: HTMLButtonElement) => { btn.classList.remove('active') })
    button.classList.add('active')

    // Показываем/скрываем формы
    if (formId === 'login') {
      Auth.loginForm.classList.add('active')
      Auth.registerForm.classList.remove('active')
      Auth.recoverForm.classList.remove('active')
      Auth.loginForm.querySelector('.auth__message-container').appendChild(Auth.message)
    } else if (formId === 'register') {
      Auth.loginForm.classList.remove('active')
      Auth.registerForm.classList.add('active')
      Auth.recoverForm.classList.remove('active')
      Auth.registerForm.querySelector('.auth__message-container').appendChild(Auth.message)
    } else if (formId === 'recover') {
      Auth.loginForm.classList.remove('active')
      Auth.registerForm.classList.remove('active')
      Auth.recoverForm.classList.add('active')
      Auth.recoverForm.querySelector('.auth__message-container').appendChild(Auth.message)
    }
  })
})

// Изначально добавляем сообщение в активную форму
Auth.loginForm.querySelector('.auth__message-container').appendChild(Auth.message)

// Обработка входа
Auth.loginForm.addEventListener('submit', async (e: Event) => {
  e.preventDefault()
  clearValidation()
  const emailInput = Auth.loginEmail as HTMLInputElement
  const passwordInput = Auth.loginPassword as HTMLInputElement

  // Финальная валидация перед отправкой
  const isEmailValid = validateEmail(emailInput)
  const isPasswordValid = validatePassword(passwordInput)
  if (!isEmailValid || !isPasswordValid) return

  // Проверяем, нужно ли синхронизировать данные после входа
  const shouldSyncData = Auth.self.dataset.shouldSync === 'true'

  const result: any = await loginUser(emailInput.value, passwordInput.value)
  if (result) {
    showMessage('Вход выполнен успешно!', false)

    if (shouldSyncData) {
      delete Auth.self.dataset.shouldSync // Очищаем флаг
    }

    setTimeout(() => {
      // Если от сервера пришли данные, обновляем localStorage и перезагружаем страницу
      if (result.clientData && Object.keys(result.clientData).length > 0) {
        localStorage.clear()
        for (const key in result.clientData) {
          localStorage.setItem(key, result.clientData[key])
        }
        location.reload()
      } else {
        // Если данных нет, просто продолжаем, синхронизируя текущие локальные данные
        handleSuccessfulLogin(result)
      }
    }, 1500) // Небольшая задержка, чтобы пользователь увидел сообщение
  } else {
    showMessage('Ошибка входа. Проверьте email и пароль.', true)
  }
})

// Обработка регистрации
Auth.registerForm.addEventListener('submit', async (e: Event) => {
  e.preventDefault()
  clearValidation()
  const emailInput = Auth.registerEmail as HTMLInputElement
  const passwordInput = Auth.registerPassword as HTMLInputElement

  // Финальная валидация перед отправкой
  const isEmailValid = validateEmail(emailInput)
  const isPasswordValid = validatePassword(passwordInput)
  if (!isEmailValid || !isPasswordValid) return

  const success = await registerUser(emailInput.value, passwordInput.value)
  if (success) {
    showMessage('Регистрация прошла успешно! Теперь вы можете войти.', false)
    // Можно автоматически входить или просто переключить на вкладку входа
    tabButtons[0].click() // Имитируем клик на вкладку "Вход"
  } else {
    showMessage('Ошибка регистрации. Возможно, этот email уже занят.', true)
  }
})

// Обработка восстановления пароля
Auth.recoverForm.addEventListener('submit', async (e: Event) => {
  e.preventDefault()
  clearValidation()
  const emailInput = Auth.recoverEmail as HTMLInputElement

  const isEmailValid = validateEmail(emailInput)
  if (!isEmailValid) return

  const result = await requestPasswordReset(emailInput.value)

  if (result.success) {
    showMessage(result.message, false)
  } else {
    showMessage(result.message, true)
  }
})

// Валидация в реальном времени
allInputs.forEach(input => {
  input.addEventListener('input', () => {
    // Очищаем общее сообщение об ошибке при начале ввода в любом поле
    clearMessage()
    if (input.id.includes('email')) {
      validateEmail(input as HTMLInputElement)
    }
    if (input.id.includes('password')) {
      validatePassword(input as HTMLInputElement)
    }
  })
})
