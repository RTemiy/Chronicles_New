import IStat from './IStat';
import {EStoriesEn} from '../Utils/EStoriesNames';

export interface IButton {
  func: () => void
  text: string
  isActive?: boolean
}

export interface ICondition {
  condition: () => boolean
  func: () => void
}

export default interface IScene {
  text: string
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
  beforeBegin?: () => void
}
