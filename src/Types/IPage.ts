import { type EStoriesEn } from '../Utils/EStoriesNames'

export interface IPage {
  story: EStoriesEn
  chapter: number
  part: number
  text: string
}
