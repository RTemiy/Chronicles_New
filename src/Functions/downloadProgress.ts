import { loadData } from './localStorageManager'

export default function downloadProgress (): void {
  const a = document.createElement('a')
  const file = new Blob([JSON.stringify(localStorage)], { type: 'application/json' })
  a.href = URL.createObjectURL(file)
  a.innerText = 'Скачать прогресс'
  a.download = String(loadData(['Profile', 'ID']))
  a.click()
}
