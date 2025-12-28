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

  id: number

  text: string
  message?: string
  buttons: IButton[]
  buttonsDefault?: IButton[]
  speaker?: string
  speakerL?: string
  speakerR?: string

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

  interruptiveFrame?: { goTo: number, timeMS?: number }
  OKMessage?: { image: string, goTo: number, buttonText: string }
  wardrobe?: { story: EStoriesEn, personId: string, goTo: number, food?: boolean }
  cutScene?: { video: string, goTo: number }
  smartphone?: { chatId: string, goTo: number }

  darkSilhouette?: boolean
  ghostSilhouette?: boolean
  blurredSilhouette?: boolean
  parallax?: string

  condition?: ICondition[]
  beforeBegin?: () => void
  afterAll?: () => void
}
