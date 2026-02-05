import { type EStoriesEn } from '../Utils/EStoriesNames'

export default interface IStat {
  story?: EStoriesEn | string
  category: string
  id: string
  silent?: boolean
  idDescription?: string
  image?: string
  name?: string
  title?: string
  description?: string
  value?: number
  show?: number
  showValue?: boolean
  progressionBar?: boolean
  minValue?: number
  maxValue?: number
}
