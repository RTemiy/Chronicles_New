import type IAchievement from '../Types/IAchievement'
import lock from '../Images/UI/Lock.png'

export default class CAchievementsManager {
  #achievements = {}
  readonly render: any
  constructor (renderFunc: any) {
    this.render = renderFunc
  }

  add (achievement: IAchievement): void {
    achievement.unlocked = false
    this.#achievements[achievement.story + '_' + achievement.name] = achievement
  }

  getAchievementsAmount (): string {
    let counter = 0
    let counterCompleted = 0
    for (const prop in this.#achievements) {
      counter++
      (Boolean(this.#achievements[prop].unlocked)) && counterCompleted++
    }
    return `${counterCompleted}/${counter}`
  }

  getAchievementsHTML (category?: string): string {
    let render = ''
    for (const prop in this.#achievements) {
      if (typeof category === 'undefined' || this.#achievements[prop].story === category) {
        render += `
      <div class="achievement show styled-border styled-background">
        <img class="achievement__image styled-border" src="${this.#achievements[prop].unlocked ? this.#achievements[prop].image : lock}">
        <p class="achievement__title">${this.#achievements[prop].title}</p>
        <p class="achievement__text">${this.#achievements[prop].text}</p>
      </div>
      `
      }
    }
    return render
  }
}
