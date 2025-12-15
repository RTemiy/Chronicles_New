import type IAchievement from '../Types/IAchievement'
import { EStoriesAvailable, type EStoriesEn } from '../Utils/EStoriesNames'
import { loadData, saveData } from '../Functions/localStorageManager'
import { sendActivity } from '../Functions/GSAPI'
import { getCurrentEventImage } from '../Utils/eventManager';

export default class CAchievementsManager {
  #achievements: Record<string, IAchievement> = {}
  readonly render: () => void
  private csv: string = ''
  constructor (renderFunc: () => void) {
    this.render = renderFunc
  }

  add (achievement: IAchievement): void {
    achievement.unlocked = loadData(['Achievements', achievement.story, achievement.name]) === 'true'
    this.#achievements[achievement.story + '_' + achievement.name] = achievement
    this.csv += `${achievement.story},${achievement.name},${achievement.title}\n`
  }

  downloadCSV (): void {
    let csv = ''
    for (const achievementsKey in this.#achievements) {
      csv += `${this.#achievements[achievementsKey].story},${this.#achievements[achievementsKey].name},${this.#achievements[achievementsKey].title}\n`
    }
    const a = document.createElement('a')
    const file = new Blob([csv], { type: 'text/csv' })
    a.href = URL.createObjectURL(file)
    a.download = 'achievementsList.csv'
    a.click()
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

  updateAchievementsInfo (data: string[][]): void {
    data.forEach(a => {
      this.#achievements[`${a[0]}_${a[1]}`].completion = a[2]
    })
  }

  getAchievementsHTML (story?: string): string {
    let render = ''
    for (const prop in this.#achievements) {
      if (typeof story === 'undefined' || this.#achievements[prop].story === story) {
        EStoriesAvailable[this.#achievements[prop].story] === 1 && (render += `
      <div class="achievement story-${this.#achievements[prop].story} ${this.#achievements[prop].unlocked ? 'achievement_unlocked' : 'achievement_locked'}">
        <img class="achievement__image ${this.#achievements[prop].unlocked && 'shimmering_image'} " src="${this.#achievements[prop].unlocked ? this.#achievements[prop].image : getCurrentEventImage('icon_lock')}">
        <p class="achievement__title">${this.#achievements[prop].title}</p>
        <p class="achievement__text">${this.#achievements[prop].text}</p>
        ${this.#achievements[prop].completion !== undefined && this.#achievements[prop].completion !== '0,0%' ? `<p class="achievement__completion">Это достижение есть у ${this.#achievements[prop].completion} игроков</p>` : ''}
      </div>
      `)
      }
    }
    return render
  }
}
