export interface IChat {
  avatar: string
  title: string
  messages: IChatMessage[]
  phoneImage?: string
  time?: string
  battery?: number
  wifi?: boolean
  func?: () => void
}

interface IChatMessage {
  fellow: boolean
  answers?: Array<{ text: string, goToAnchor: string }>
  goToAnchor?: string
  text?: string
  anchor?: string
  end?: boolean
  func?: () => void
}
