import { type EStoriesEn } from '../Utils/EStoriesNames'

export default interface ICard {
  name: string
  story: EStoriesEn
  title: string
  text: string
  image: string
  description: string
  unlockCondition: () => boolean
}
