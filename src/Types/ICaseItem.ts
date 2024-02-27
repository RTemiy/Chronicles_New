export type TRarity = 'Обычный' | 'Необычный' | 'Редкий' | 'Легендарный' | 'Эпический' | 'Экстраординарный'

export interface ICaseItem {
  image: string
  title: string
  rarity: TRarity
}

export interface ICase {
  image: string
  title: string
  caseItems: ICaseItem[]
}
