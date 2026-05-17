// Укажите URL вашего сервера. Для локальной разработки это обычно localhost.
import { showMessage } from '../Components/MenuMessage/MenuMessage';

const API_BASE_URL = 'https://chroniclesgameapi.ru'

/**
 * Собирает все игровые данные из localStorage для синхронизации.
 * @returns {object} Объект с данными из localStorage.
 */
export function getGameDataFromLocalStorage () {
  const data = {}
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    data[key] = localStorage.getItem(key)
  }
  return data
}

// При использовании http-only cookie, управление токеном происходит автоматически в браузере,
// и эти функции больше не нужны для аутентификации.
// export const saveToken = (token) => { localStorage.setItem('authToken', token) }
// export const getToken = () => localStorage.getItem('authToken')
// export const removeToken = () => { localStorage.removeItem('authToken') }

/**
 * Регистрирует нового пользователя.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<boolean>} true в случае успеха
 */
export async function registerUser (email, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'omit' // Учетные данные не нужны для регистрации
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || 'Ошибка регистрации')
    }

    console.log('Пользователь успешно зарегистрирован!')
    return true
  } catch (error) {
    console.error('Ошибка при регистрации:', error)
    return false
  }
}

/**
 * Выполняет вход пользователя и сохраняет токен.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<object|null>} Данные пользователя или null в случае ошибки
 */
export async function loginUser (email, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include' // Включаем cookie в запрос
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || 'Неверные учетные данные')
    }
    // Сервер установит http-only cookie, токен больше не приходит в теле ответа.
    // Мы ожидаем только clientData.
    const { clientData } = await response.json()

    console.log('Вход выполнен успешно.')
    return { clientData: JSON.parse(clientData || '{}') }
  } catch (error) {
    console.error('Ошибка при входе:', error)
    return null
  }
}

/**
 * Проверяет статус аутентификации пользователя по cookie.
 * @returns {Promise<object|null>} Данные пользователя, если сессия активна, иначе null.
 */
export async function checkAuthStatus () {
  try {
    // Предполагается, что на сервере есть эндпоинт GET /auth/status,
    // который проверяет cookie и возвращает данные пользователя.
    const response = await fetch(`${API_BASE_URL}/auth/status`, {
      method: 'GET',
      credentials: 'include' // Обязательно для отправки cookie
    })

    if (!response.ok) {
      // Если сервер отвечает 401 или другой ошибкой, считаем, что пользователь не авторизован.
      return null
    }

    const { clientData } = await response.json() // Сервер должен вернуть данные пользователя.
    return { clientData: JSON.parse(clientData || '{}') }
  } catch (error) {
    console.error('Ошибка при проверке статуса аутентификации:', error)
    return null
  }
}

export async function getUserData () {
  try {
    const response = await fetch(`${API_BASE_URL}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        // Говорим серверу, что мы готовы принять JSON в ответ.
        Accept: 'application/json'
      }
    })

    if (!response.ok) {
      // Если сервер вернул 401/403, это значит, что пользователь не залогинен.
      // Пытаемся получить текст ошибки из ответа сервера.
      const errorData = await response.json().catch(() => ({ message: 'Не удалось получить текст ошибки' }))
      throw new Error(`Ошибка ${response.status}: ${errorData.message || response.statusText}`)
    }

    // Парсим тело ответа как JSON
    const userData = await response.json()

    return userData
  } catch (error) {
    console.error('Произошла ошибка при получении данных пользователя:', error)
    throw error
  }
}

/**
 * Обновляет данные пользователя (clientData) на сервере.
 * @param {object} dataToSave Объект с данными для сохранения.
 * @returns {Promise<boolean>}
 */
export async function updateUserData (dataToSave) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/me`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include', // Включаем cookie в запрос
      body: JSON.stringify({ clientData: dataToSave })
    })

    if (!response.ok) {
      if (response.status === 403) {
        console.error('Ошибка 403: Доступ запрещен. Вероятно, сессия истекла. Перезагрузка...')
        localStorage.removeItem('lastDataSyncTimestamp')
        location.reload()
      }
      throw new Error(`Не удалось обновить данные. Статус: ${response.status}`)
    }

    console.log('Данные пользователя обновлены.')
    return true
  } catch (error) {
    console.error('Ошибка обновления данных:', error)
    return false
  }
}

/**
 * Удаляет аккаунт текущего пользователя.
 * @returns {Promise<boolean>}
 */
export async function deleteUserAccount () {
  if (!confirm('Вы уверены, что хотите удалить свой аккаунт? Это действие необратимо.')) {
    return false
  }

  try {
    const response = await fetch(`${API_BASE_URL}/auth/account`, {
      method: 'DELETE',
      credentials: 'include' // Включаем cookie в запрос
    })

    if (!response.ok) throw new Error('Не удалось удалить аккаунт')

    // Сервер должен очистить cookie при удалении аккаунта.
    console.log('Аккаунт успешно удален.')
    // Здесь можно перенаправить пользователя на главную страницу
    // window.location.href = '/';
    return true
  } catch (error) {
    console.error('Ошибка удаления аккаунта:', error)
    return false
  }
}

/**
 * Выполняет выход пользователя из системы.
 * @returns {Promise<boolean>}
 */
export async function logoutUser () {
  try {
    // Сервер должен получить этот запрос и очистить http-only cookie.
    const response = await fetch(`${API_BASE_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include'
    })

    if (!response.ok) throw new Error('Не удалось выйти из системы')

    console.log('Выход из системы выполнен успешно.')
    // localStorage.clear()
    localStorage.removeItem('lastDataSyncTimestamp')
    location.reload()
    return true
  } catch (error) {
    console.error('Ошибка при выходе из системы:', error)
    return false
  }
}

/**
 * Отправляет новый отзыв на сервер.
 * @param {string} storyName Название истории
 * @param {number} rating Рейтинг от 1 до 5
 * @param {string} [text] Опциональный текст отзыва
 * @returns {Promise<boolean>}
 */
export async function submitReview (storyName, rating, text) {
  try {
    const response = await fetch(`${API_BASE_URL}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include', // Включаем cookie в запрос
      body: JSON.stringify({ story_name: storyName, rating, text })
    })

    if (response.status === 401) throw new Error('Для отправки отзыва необходимо авторизоваться.')
    if (!response.ok) throw new Error('Не удалось отправить отзыв')

    console.log('Отзыв успешно отправлен!')
    return true
  } catch (error) {
    console.error('Ошибка отправки отзыва:', error)
    return false
  }
}

export async function requestPasswordReset (email) { // теперь возвращает { success, message }
  try {
    const response = await fetch(`${API_BASE_URL}/auth/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })

    // Безопасно пытаемся получить JSON из ответа
    let data = {}
    const contentType = response.headers.get('content-type')
    if (contentType && contentType.includes('application/json')) {
      data = await response.json()
    } else {
      // Если ответ не JSON, пытаемся прочитать его как текст
      data.message = await response.text()
    }

    if (response.ok) {
      return { success: true, message: data.message }
    } else {
      // Для ошибок 5xx выводим более общее сообщение
      const errorMessage = response.status >= 500 ? 'На сервере произошла ошибка. Попробуйте позже.' : (data.message || 'Произошла ошибка. Попробуйте снова.')
      return { success: false, message: errorMessage }
    }
  } catch (error) {
    console.error('Ошибка при запросе на сброс пароля:', error)
    return { success: false, message: 'Не удалось подключиться к серверу. Проверьте ваше соединение.' }
  }
}
