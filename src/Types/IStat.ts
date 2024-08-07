import { type EStoriesEn } from '../Utils/EStoriesNames'

export default interface IStat {
  story?: EStoriesEn | string
  category: 'Choice' | 'Person' | 'Item' | 'Effect' | Omit<string, 'Choice' | 'Person' | 'Item' | 'Effect'>
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
}
