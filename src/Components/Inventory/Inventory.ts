import CContainer from '../../Classes/CContainer'
import { type EStoriesEn } from '../../Utils/EStoriesNames'
import './Inventory.scss'
import { statsManager } from '../../index'

export const Inventory = new CContainer('inventory',
  `
  <div class="inventory__persons"></div>
  <div class="inventory__info-block">
    <img class="inventory__info-image">
    <p class="inventory__info-title"></p>
    <p class="inventory__info-description"></p>
  </div>
  <div class="inventory__items"></div>
  <button type="button" class="inventory__close-button"></button>
  `,
  { name: 'persons', selector: '.inventory__persons' },
  { name: 'items', selector: '.inventory__items' },
  { name: 'infoImage', selector: '.inventory__info-image' },
  { name: 'infoTitle', selector: '.inventory__info-title' },
  { name: 'infoDescription', selector: '.inventory__info-description' },
  { name: 'closeInventoryButton', selector: '.inventory__close-button' }
)

export function renderInventory (story: EStoriesEn): void {
  const statsHTML = statsManager.getStatsHTML(story)
  Inventory.persons.innerHTML = statsHTML.persons
  Inventory.items.innerHTML = statsHTML.items
  Inventory.persons.querySelectorAll('.inventory__person-cell').forEach((element: { onclick: () => void, getAttribute: (arg0: string) => any }) => {
    element.onclick = () => {
      Inventory.infoImage.src = element.getAttribute('data-image')
      Inventory.infoTitle.innerHTML = element.getAttribute('data-title')
      Inventory.infoDescription.innerHTML = element.getAttribute('data-description')
    }
  })
  Inventory.items.querySelectorAll('.inventory__items-cell').forEach((element: { onclick: () => void, getAttribute: (arg0: string) => any }) => {
    element.onclick = () => {
      Inventory.infoImage.src = element.getAttribute('data-image')
      Inventory.infoTitle.innerHTML = element.getAttribute('data-title')
      Inventory.infoDescription.innerHTML = element.getAttribute('data-description')
    }
  })
}

Inventory.closeInventoryButton.onclick = () => {
  Inventory.self.style.display = 'none'
}