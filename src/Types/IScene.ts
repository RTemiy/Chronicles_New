import type IStat from './IStat'
import { type EStoriesEn } from '../Utils/EStoriesNames'

export interface IButton {
  func?: () => void
  text: string
  goTo?: number
  isActive?: boolean
  gift?: boolean
}

export interface ICondition {
  condition: () => boolean
  goTo: number
}

export default interface IScene {
  text: string
  id: number
  buttons: IButton[]
  buttonsDefault?: IButton[]
  imageBack?: string | (() => string)
  imageLeft?: string
  imageMiddle?: string
  imageRight?: string
  imageFront?: string | (() => string)
  fullscreenObject?: string | (() => string)
  fullscreenObjectL?: string | (() => string)
  fullscreenObjectR?: string | (() => string)
  imageBorder?: string
  stats?: IStat[]
  achievement?: { story: EStoriesEn, name: string }
  music?: string
  ambient?: string
  simple?: string
  message?: string
  condition?: ICondition[]
  cutScene?: { video: string, goTo: number }
  beforeBegin?: () => void
  afterAll?: () => void
  speaker?: string
  speakerL?: string
  speakerR?: string
  darkSilhouette?: boolean
  ghostSilhouette?: boolean
  parallax?: string
  wardrobe?: { story: EStoriesEn, personId: string, goTo: number }
  smartphone?: { chatId: string, goTo: number }
  interruptiveFrame?: { goTo: number }
}
