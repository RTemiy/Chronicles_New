import { type IPage } from '../Types/IPage'
import { type EStoriesEn } from '../Utils/EStoriesNames'

export default class CJournal {
  #pages: IPage[] = []

  add (page: IPage): void {
    this.#pages.push(page)
  }

  getHTML (story: EStoriesEn, chapter: number, part: number): string {
    let result = ''
    this.#pages.forEach(page => {
      if (page.story === story && page.chapter <= chapter && page.part < part) {
        result +=
          `
        <div class="journal__part">
          <h3 class="journal__subtitle">Глава ${page.chapter} ${page.part === 0 ? 'Пролог' : `Часть ${page.part}`}</h3>
          <p class="journal__text">${page.text}</p>
        </div>
          `
      }
    })
    result === '' && (result = '<div class="journal__part"><p class="journal__text">По ходу прохождения истории здесь будет появляться информация о пройденных частях!</p></div>')
    return result
  }
}
