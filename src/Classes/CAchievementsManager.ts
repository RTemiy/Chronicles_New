import type IAchievement from '../Types/IAchievement'
import lock from '../Images/UI/Lock.png'
import { EStoriesAvailable, type EStoriesEn } from '../Utils/EStoriesNames';
import { loadData, saveData } from '../Functions/localStorageManager'
import { sendActivity } from '../Functions/GSAPI';

export default class CAchievementsManager {
  #achievements: Record<string, IAchievement> = {}
  readonly render: () => void
  constructor (renderFunc: () => void) {
    this.render = renderFunc
  }

  add (achievement: IAchievement): void {
    achievement.unlocked = loadData(['Achievements', achievement.story, achievement.name]) === 'true'
    this.#achievements[achievement.story + '_' + achievement.name] = achievement
  }

  isUnlocked (story: EStoriesEn, name: string): boolean {
    const result = this.#achievements[story + '_' + name].unlocked
    return !(!result || false)
  }

  getAchievementsAmount (story?: string): string {
    let counter = 0
    let counterCompleted = 0
    for (const prop in this.#achievements) {
      if (story != null) {
        this.#achievements[prop].story === story && EStoriesAvailable[this.#achievements[prop].story] === 1 && counter++
        this.#achievements[prop].story === story && EStoriesAvailable[this.#achievements[prop].story] === 1 && (Boolean(this.#achievements[prop].unlocked)) && counterCompleted++
      } else {
        EStoriesAvailable[this.#achievements[prop].story] === 1 && counter++
        EStoriesAvailable[this.#achievements[prop].story] === 1 && (Boolean(this.#achievements[prop].unlocked)) && counterCompleted++
      }
    }
    return `${counterCompleted}/${counter}`
  }

  unlock (story: EStoriesEn, name: string): { title: string, text: string, image: string } {
    const achievement = this.#achievements[story + '_' + name]
    achievement.unlocked = true
    saveData(['Achievements', story, name], [true])
    sendActivity(`Открывает достижение ${achievement.story}:${achievement.name}`)
    return {
      title: achievement.title,
      text: achievement.text,
      image: achievement.image
    }
  }

  getAchievementsHTML (story?: string): string {
    let render = ''
    for (const prop in this.#achievements) {
      if (typeof story === 'undefined' || this.#achievements[prop].story === story) {
        EStoriesAvailable[this.#achievements[prop].story] === 1 && (render += `
      <div class="achievement  story-${this.#achievements[prop].story}">
        <img class="achievement__image" src="${this.#achievements[prop].unlocked ? this.#achievements[prop].image : lock}">
        <p class="achievement__title">${this.#achievements[prop].title}</p>
        <p class="achievement__text">${this.#achievements[prop].text}</p>
      </div>
      `)
      }
    }
    return render
  }
}
