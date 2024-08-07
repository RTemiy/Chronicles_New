import { type EStoriesEn } from '../Utils/EStoriesNames'

export default interface IAchievement {
  name: string
  story: EStoriesEn
  title: string
  text: string
  image: string
  completion?: string
  unlocked?: boolean
}
