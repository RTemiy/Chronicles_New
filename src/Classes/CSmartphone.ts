import type CContainer from './CContainer'
import { type IChat } from '../Types/IChat'
import { loadData } from '../Functions/localStorageManager';
import { EStoriesEn } from '../Utils/EStoriesNames';
import { profileManager } from '../Components/Profile/Profile';

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
      const storyName = EStoriesEn[loadData(['LastSave_ScenarioInfo'])!.split('_')[0]]
      let resultText = `<p class='smartphone-chat__message-senderName'>${message.senderName}</p><p class='smartphone-chat__message-text'>${message.text}</p>`
      resultText = resultText.replace('$Имя Игрока$', loadData([`${storyName}_Name`])!)
      messageElement.innerHTML = resultText
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

  private async waitForAnswer (messageElement: HTMLElement, answers: Array<{ text: string, goToAnchor: string, senderName: string }>): Promise<string> {
    return await new Promise<string>(resolve => {
      const answersContainer = document.createElement('div')
      answersContainer.classList.add('smartphone-chat__answers')

      answers.forEach(answer => {
        const answerButton = document.createElement('button')
        answerButton.classList.add('smartphone-chat__answer-button')
        answerButton.innerHTML = answer.text
        answerButton.onclick = () => {
          // Отображаем выбранный ответ как новое сообщение от пользователя
          this.renderMessage({ fellow: false, text: answer.text, senderName: answer.senderName })
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
    this.Smartphone.toolbar.classList.remove('smartphone-chat__toolbar_offline')
    this.Smartphone.toolbar.classList.add('smartphone-chat__toolbar_online')
    // eslint-disable-next-line @typescript-eslint/no-base-to-string,@typescript-eslint/restrict-plus-operands
    this.Smartphone.messages.style.backgroundImage = 'url("' + profileManager.findBanner(loadData(['Profile', 'Banner'])!).image + '")'
    // this.Smartphone.closeButton.style.display = 'none' // Кнопка скрывается через CSS (opacity: 0)

    // Добавляем обработчик клика для ускорения сообщений
    this.Smartphone.messages.onclick = () => {
      this.skipWait()
    }
  }

  private showTypingIndicator (show: boolean): void {
    const indicator = this.Smartphone.typingIndicator as HTMLElement
    if (indicator) {
      indicator.style.display = show ? 'flex' : 'none'
    }
  }

  private showCloseButton (callback: () => void): void {
    const closeButton = this.Smartphone.closeButton as HTMLImageElement
    closeButton.src = require('../Media/Images/UI/icon_cross.svg')
    this.Smartphone.toolbar.classList.add('smartphone-chat__toolbar_offline')
    this.Smartphone.toolbar.classList.remove('smartphone-chat__toolbar_online')
    // Добавляем класс для плавной анимации появления
    closeButton.classList.add('visible')

    closeButton.onclick = () => {
      this.Smartphone.self.style.display = 'none'
      this.Smartphone.typingIndicator.style.display = 'none'
      // Скрываем кнопку, убирая класс
      closeButton.classList.remove('visible')
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

      if (message.fellow) {
        this.showTypingIndicator(true)
        await new Promise(resolve => setTimeout(resolve, this.MESSAGE_DELAY_MS * 1.5))
        this.showTypingIndicator(false)
      } else {
        // Для сообщений игрока используем старую логику с возможностью пропуска
        await this.wait(this.MESSAGE_DELAY_MS)
      }

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
