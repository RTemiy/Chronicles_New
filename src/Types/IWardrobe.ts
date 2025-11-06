export default interface IWardrobe {
  image: string
  title?: string
  description?: string
  cost?: 'short' | 'medium' | 'long'
  variation?: string
  originalId?: number
  unlocked: () => boolean
}
