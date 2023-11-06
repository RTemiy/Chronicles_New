import type IStory from '../Types/IStory'

export default class CStoriesManager {
  #stories: IStory[] = []
  render: any
  constructor (renderStories: any) {
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
      <img class="story story-${story.name}" src="${story.image}">
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

  getPartsHTML (storyName: string, chapterName: string): string {
    let result = ''
    this.#stories.forEach(story => {
      if (story.name === storyName) {
        story.chapters.forEach(chapter => {
          if (chapter.name === chapterName) {
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
    return result
  }
}
