import type CContainer from './CContainer'
import { type IChat } from '../Types/IChat'

export class CSmartphone {
  private chats: Record<string, IChat> = {}

  private messageTimer: NodeJS.Timeout | null = null
  private resolveCurrentWait: (() => void) | null = null
  private readonly MESSAGE_DELAY_MS = 1500

  constructor (private readonly Smartphone: CContainer) {
  }

  addChat (chatId: string, chatInfo: IChat): void {
    this.chats[chatId] = chatInfo
  }

  private readonly wait = async (ms: number): Promise<void> => {
    await new Promise<void>(resolve => {
      // Эта функция будет вызвана либо по таймауту, либо принудительно через skipWait
      const resolver = (): void => {
        if (this.messageTimer) {
          clearTimeout(this.messageTimer)
          this.messageTimer = null
        }
        this.resolveCurrentWait = null
        resolve()
      }

      this.resolveCurrentWait = resolver
      this.messageTimer = setTimeout(resolver, ms)
    })
  }

  private renderMessage (message: IChat['messages'][0]): HTMLElement {
    const messageElement = document.createElement('div')
    messageElement.classList.add('smartphone-chat__message')
    messageElement.classList.add(message.fellow ? 'smartphone-chat__message-fellow' : 'smartphone-chat__message-me')

    if (message.text) {
      messageElement.innerHTML = message.text
    }

    this.Smartphone.messages.appendChild(messageElement)
    this.Smartphone.messages.scrollTo(0, this.Smartphone.messages.scrollHeight)
    return messageElement
  }

  private skipWait (): void {
    if (this.resolveCurrentWait) {
      this.resolveCurrentWait()
    }
  }

  private async waitForAnswer (messageElement: HTMLElement, answers: Array<{ text: string, goToAnchor: string }>): Promise<string> {
    return await new Promise<string>(resolve => {
      const answersContainer = document.createElement('div')
      answersContainer.classList.add('smartphone-chat__answers')

      answers.forEach(answer => {
        const answerButton = document.createElement('button')
        answerButton.classList.add('smartphone-chat__answer-button')
        answerButton.innerHTML = answer.text
        answerButton.onclick = () => {
          // Отображаем выбранный ответ как новое сообщение от пользователя
          this.renderMessage({ fellow: false, text: answer.text })
          // Удаляем кнопки после выбора
          answersContainer.parentElement!.remove()
          // Возвращаем якорь для перехода
          resolve(answer.goToAnchor)
        }
        answersContainer.appendChild(answerButton)
      })

      messageElement.appendChild(answersContainer)
      this.Smartphone.messages.scrollTo(0, this.Smartphone.messages.scrollHeight)
    })
  }

  private setupChat (chatId: string): void {
    this.Smartphone.self.style.display = 'flex'
    const chat = this.chats[chatId]
    this.Smartphone.avatar.src = chat.avatar
    this.Smartphone.title.innerHTML = chat.title
    this.Smartphone.time.innerHTML = chat.time ?? ''
    this.Smartphone.battery.innerHTML = chat.battery?.toString() ?? ''
    this.Smartphone.messages.innerHTML = ''
    this.Smartphone.closeButton.style.display = 'none'

    // Добавляем обработчик клика для ускорения сообщений
    this.Smartphone.messages.onclick = () => {
      this.skipWait()
    }
  }

  private showCloseButton (callback: () => void): void {
    const closeButton = this.Smartphone.closeButton as HTMLImageElement
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    closeButton.src = require('../Images/UI/icon_exit.svg')
    closeButton.style.display = 'block'

    closeButton.onclick = () => {
      this.Smartphone.self.style.display = 'none'
      closeButton.style.display = 'none'
      callback()
    }
  }

  async showNewChat (chatId: string, callback: () => void): Promise<void> {
    this.setupChat(chatId)

    const { messages } = this.chats[chatId]
    const anchorMap: Record<string, number> = {}

    // Создаем карту якорей для быстрых переходов
    messages.forEach((message, index) => {
      if (message.anchor) {
        anchorMap[message.anchor] = index
      }
    })

    // Используем цикл с индексом для возможности "прыжков" по диалогу
    for (let i = 0; i < messages.length; i++) {
      const message = messages[i]

      await this.wait(this.MESSAGE_DELAY_MS)

      const messageElement = this.renderMessage(message)

      // Выполняем функцию, если она есть у сообщения
      if (message.func) {
        message.func()
      }

      // Если это последнее сообщение, прерываем цикл
      if (message.end === true) {
        break
      }

      let nextAnchor: string | undefined

      if (message.answers) {
        // Приостанавливаем выполнение до выбора ответа
        nextAnchor = await this.waitForAnswer(messageElement, message.answers)
        // Добавляем обязательную задержку после ответа игрока, имитируя ответ собеседника
        await new Promise(resolve => setTimeout(resolve, this.MESSAGE_DELAY_MS / 2))
      } else if (message.goToAnchor) {
        nextAnchor = message.goToAnchor
      }

      if (nextAnchor && anchorMap[nextAnchor] !== undefined) {
        i = anchorMap[nextAnchor] - 1 // -1, так как в конце цикла будет i++
      }
    }

    // Показываем кнопку "Закрыть" вместо автоматического закрытия чата
    this.showCloseButton(callback)
  }
}
