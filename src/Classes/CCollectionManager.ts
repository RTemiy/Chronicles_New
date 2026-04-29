import { EStoriesAvailable, type EStoriesEn } from '../Utils/EStoriesNames'
import { getCurrentEventImageSVG } from '../Utils/eventManager'
import type ICard from '../Types/ICard'

export default class CCollectionManager {
  #cards: Record<string, ICard> = {}
  readonly render: () => void

  constructor (renderFunc: () => void) {
    this.render = renderFunc
  }

  add (card: ICard): void {
    this.#cards[card.story + '_' + card.name] = card
  }

  isUnlocked (story: EStoriesEn, name: string): boolean {
    const result = this.#cards[story + '_' + name].unlockCondition()
    return !(!result || false)
  }

  getCardsAmount (story?: string): string {
    let counter = 0
    let counterCompleted = 0
    for (const prop in this.#cards) {
      if (story != null) {
        this.#cards[prop].story === story && EStoriesAvailable[this.#cards[prop].story] === 1 && counter++
        this.#cards[prop].story === story && EStoriesAvailable[this.#cards[prop].story] === 1 && (Boolean(this.#cards[prop].unlockCondition())) && counterCompleted++
      } else {
        EStoriesAvailable[this.#cards[prop].story] === 1 && counter++
        EStoriesAvailable[this.#cards[prop].story] === 1 && (Boolean(this.#cards[prop].unlockCondition())) && counterCompleted++
      }
    }
    return `${counterCompleted}/${counter}`
  }

  getCardsHTML (story?: string): string {
    let render = ''
    for (const prop in this.#cards) {
      if (typeof story === 'undefined' || this.#cards[prop].story === story) {
        EStoriesAvailable[this.#cards[prop].story] === 1 && (render += `
      <div class="card story-${this.#cards[prop].story} ${this.#cards[prop].unlockCondition() ? 'card_unlocked' : 'card_locked'}">
        <p class="card__title">${this.#cards[prop].title}</p>
        <img class="card__image ${this.#cards[prop].unlockCondition() && 'shimmering_image'} " src="${this.#cards[prop].unlockCondition() ? this.#cards[prop].image : getCurrentEventImageSVG('icon_lock')}">
        <p class="card__text">${this.#cards[prop].text}</p>
        <p class="card__description" ${this.#cards[prop].unlockCondition() ? '' : 'style="display: none;"'} ''>${this.#cards[prop].description}</p>
      </div>
      `)
      }
    }
    return render
  }
}
