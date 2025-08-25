import MenuToolbar from '../Components/MenuToolbar/MenuToolbar'
import { Inventory } from '../Components/Inventory/Inventory'
import { Slide } from '../Components/Slide/Slide'
import { Journal } from '../Components/Journal/Journal';

let currentState: 'menu' | 'inventory' | 'slide' | 'journal' = 'menu'

export function initLastHash (): void {
  for (let x = 0; x < 100; x++) {
    history.pushState('', '', '')
  }
}

export function changeState (stateName: 'menu' | 'inventory' | 'slide' | 'journal'): void {
  currentState = stateName
}

export function backButtonEvent (): void {
  switch (currentState) {
    case 'menu':
      MenuToolbar.storiesButton.click()
      break
    case 'inventory':
      Inventory.closeInventoryButton.click()
      break
    case 'slide':
      Slide.inventoryButton.click()
      break
    case 'journal':
      Journal.closeJournalButton.click()
      break
  }
}

export function addlistenerandroidbackbutton (): void {
  window.addEventListener('popstate', () => {
    backButtonEvent()
  })
  initLastHash()
}
