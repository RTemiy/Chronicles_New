import type IAchievement from '../Types/IAchievement'
import lock from '../Images/UI/Lock.png'
import { type StoriesEn } from '../Utils/StoriesNames'

export default class CAchievementsManager {
  #achievements: Record<string, IAchievement> = {}
  readonly render: any
  constructor (renderFunc: any) {
    this.render = renderFunc
  }

  add (achievement: IAchievement): void {
    achievement.unlocked = localStorage.getItem('Achievements_' + achievement.story + '_' + achievement.name) === 'true'
    this.#achievements[achievement.story + '_' + achievement.name] = achievement
  }

  getAchievementsAmount (story?: string): string {
    let counter = 0
    let counterCompleted = 0
    for (const prop in this.#achievements) {
      if (story != null) {
        this.#achievements[prop].story === story && counter++
        this.#achievements[prop].story === story && (Boolean(this.#achievements[prop].unlocked)) && counterCompleted++
      } else {
        counter++
        (Boolean(this.#achievements[prop].unlocked)) && counterCompleted++
      }
    }
    return `${counterCompleted}/${counter}`
  }

  unlock (story: StoriesEn, name: string): void {
    this.#achievements[story + '_' + name].unlocked = true
    localStorage.setItem('Achievements_' + story + '_' + name, String(true))
  }

  getAchievementsHTML (story?: string): string {
    let render = ''
    for (const prop in this.#achievements) {
      if (typeof story === 'undefined' || this.#achievements[prop].story === story) {
        render += `
      <div class="achievement  story-${this.#achievements[prop].story}">
        <img class="achievement__image" src="${this.#achievements[prop].unlocked ? this.#achievements[prop].image : lock}">
        <p class="achievement__title">${this.#achievements[prop].title}</p>
        <p class="achievement__text">${this.#achievements[prop].text}</p>
      </div>
      `
      }
    }
    return render
  }
}
