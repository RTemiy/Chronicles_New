export default interface IWardrobe {
  image: string
  title: string
  description: string
  cost: 'short' | 'medium' | 'long'
  unlocked: () => boolean
}
