import type IStat from './IStat'
import { type EStoriesEn } from '../Utils/EStoriesNames'

export interface IButton {
  func?: () => void
  text: string
  goTo?: number
  isActive?: boolean
}

export interface ICondition {
  condition: () => boolean
  func: () => void
}

export default interface IScene {
  text: string
  id: number
  buttons: IButton[]
  buttonsDefault?: IButton[]
  imageBack?: string
  imageLeft?: string
  imageMiddle?: string
  imageRight?: string
  imageFront?: string
  imageBorder?: string
  stats?: IStat[]
  achievement?: { story: EStoriesEn, name: string }
  music?: string
  ambient?: string
  simple?: string
  message?: string
  condition?: ICondition[]
  cutScene?: string
  beforeBegin?: () => void
}
