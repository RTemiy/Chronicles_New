export default interface IStory {
  name: string
  image: string
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
  event: any
}
