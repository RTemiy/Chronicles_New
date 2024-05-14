export default interface IStory {
  name: string
  video: string
  title: string
  description: string
  genre: string
  mature?: boolean
  status?: string
  chapters: IChapter[]
}

export interface IChapter {
  name: string
  image: any
  parts: IPart[]
}

export interface IPart {
  name: string
  code: string
  image: any
  loadingImage: string
  event: (
    storyName: string,
    chapterName: string,
    partName: string,
    code: string
  ) => void
}
