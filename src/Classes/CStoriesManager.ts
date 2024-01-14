import type IStory from '../Types/IStory'
import { loadData } from '../Functions/localStorageManager'

export default class CStoriesManager {
  #stories: IStory[] = []
  render: () => void
  constructor (renderStories: () => void) {
    this.render = renderStories
  }

  add (story: IStory): void {
    this.#stories.push(story)
  }

  getStoriesNames (): string[] {
    const res: string[] = []
    this.#stories.forEach(story => {
      res.push(story.name)
    })
    return res
  }

  getChapterNames (storyName: string): string[] {
    const res: string[] = []
    this.#stories.forEach(story => {
      if (story.name === storyName) {
        story.chapters.forEach(chapter => {
          res.push(chapter.name)
        })
      }
    })
    return res
  }

  getPartNames (storyName: string, chapterName: string): string[] {
    const res: string[] = []
    this.#stories.forEach(story => {
      if (story.name === storyName) {
        story.chapters.forEach(chapter => {
          if (chapter.name === chapterName) {
            chapter.parts.forEach(part => {
              res.push(part.name)
            })
          }
        })
      }
    })
    return res
  }

  getPartsInfo (): { allParts: number, completedParts: number, uncompletedParts: number } {
    let allParts = 0
    let completedParts = 0
    let uncompletedParts = 0
    this.#stories.forEach(story => {
      allParts -= 2
      story.chapters.forEach(chapter => {
        chapter.parts.forEach(part => {
          loadData([story.name, chapter.name, part.name, part.code, 'Unlocked']) === '1' && completedParts++
          allParts++
        })
      })
    })
    uncompletedParts = allParts - completedParts
    return { allParts, completedParts, uncompletedParts }
  }

  getPartProp (storyName: string, chapterName: string, partName: string, prop: string): any {
    let res: any
    this.#stories.forEach(story => {
      if (story.name === storyName) {
        story.chapters.forEach(chapter => {
          if (chapter.name === chapterName) {
            chapter.parts.forEach(part => {
              if (part.name === partName) {
                res = part[prop]
              }
            })
          }
        })
      }
    })
    return res
  }

  getStoriesHTML (): string {
    let result = ''
    this.#stories.forEach(story => {
      result += `
      <div class="story">
        <div class="story__image-container">
            <video autoplay muted loop class="story__image"><source src="${story.video}" type="video/mp4"/></video>
            ${(story.mature === true) ? '<p class="story__mature">18+</p>' : ''}
            ${(story.status !== undefined) ? '<p class="story__status">' + story.status + '</p>' : ''}
            <p class="story__genre">${story.genre}</p>
        </div>
        <p class="story__description">${story.description}</p>
        <p class="story__button">Читать</p>
      </div>
      
      `
    })
    return result
  }

  getChaptersHTML (storyName: string): string {
    let result = ''
    this.#stories.forEach(story => {
      if (story.name === storyName) {
        story.chapters.forEach(chapter => {
          result += `
                      <div class="chapter story-${story.name}">
                        <div class="chapter__container">
                            <img class="chapter__image" src="${chapter.image}">
                            <p class="chapter__name">${chapter.name}</p>
                        </div>
                      </div>
                    `
        })
      }
    })
    return result
  }

  getPartsHTML (storyName: string, chapterName: string): { innerHTML: string, index: number } {
    let result = ''
    let chapterIndex = 0
    this.#stories.forEach(story => {
      if (story.name === storyName) {
        story.chapters.forEach((chapter, index) => {
          if (chapter.name === chapterName) {
            chapterIndex = index
            chapter.parts.forEach(part => {
              result += `
                          <div class="part story-${story.name}">
                            <div class="part__container">
                              <img class="part__image" src="${part.image}">
                              <p class="part__name">${part.name}</p>
                            </div>
                          </div>
                        `
            })
          }
        })
      }
    })
    return { innerHTML: result, index: chapterIndex }
  }
}
