import type IStory from '../Types/IStory'

export default class CStoriesManager {
  #stories: IStory[] = []
  renderStories: any
  constructor (renderStories: any) {
    this.renderStories = renderStories
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

  getPartEvent (storyName: string, chapterName: string, partName: string): any {
    this.#stories.forEach(story => {
      if (story.name === storyName) {
        story.chapters.forEach(chapter => {
          if (chapter.name === chapterName) {
            chapter.parts.forEach(part => {
              if (part.name === partName) {
                return part.event
              }
            })
          }
        })
      }
    })
  }

  getStoriesHTML (): string {
    let result = ''
    this.#stories.forEach(story => {
      result += `
      <img class="story styled-background styled-border" src="${story.image}">
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
        <div class="chapter styled-border styled-background">
          <div class="chapter__container styled-border">
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

  getPartsHTML (storyName: string, chapterName: string): string {
    let result = ''
    this.#stories.forEach(story => {
      if (story.name === storyName) {
        story.chapters.forEach(chapter => {
          if (chapter.name === chapterName) {
            chapter.parts.forEach(part => {
              result += `
                <div class="part styled-border styled-background">
                  <div class="part__container styled-border">
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
    return result
  }
}
