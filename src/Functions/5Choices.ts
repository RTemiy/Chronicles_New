import { loadData, saveData } from './localStorageManager'

export function choiceDone (index: number): void {
  saveData(['5Choices', String(index)], [1])
}

export function getChoice (index: number): boolean {
  return loadData(['5Choices', String(index)]) !== '1'
}

export function resetChoices (): void {
  for (let x = 0; x < 5; x++) {
    saveData(['5Choices', String(x)], [0])
  }
}

export function askedAmount (amount: number): boolean {
  let res = 0
  for (let x = 0; x < 5; x++) {
    loadData(['5Choices', String(x)]) === '1' && res++
  }
  return res === amount
}
