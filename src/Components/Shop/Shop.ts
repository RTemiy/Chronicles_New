import CContainer from '../../Classes/CContainer'
import './Shop.scss'
import { shopItems } from '../../Utils/shopItems'
import { DesktopMode } from '../../Utils/technicalConsts'
import makeExplosion from '../../Functions/explosion'
import { MenuMessage } from '../MenuMessage/MenuMessage'

export const Shop = new CContainer(
  'shop',
  `
<p class="tab__title">${DesktopMode ? 'Клэймы' : 'Магазин'}</p>
<div class="shop__container">
  <p class='shop__category-title' >Одежда </p>
  <div class='shop__category-items' id='wardrobeCategory'></div>
</div>
<div class="shop__container">
  <p class='shop__category-title'>Интерьеры</p>
  <div class='shop__category-items' id='interiorCategory'></div>
</div>
`,
  { name: 'wardrobeCategory', selector: '#wardrobeCategory' },
  { name: 'interiorCategory', selector: '#interiorCategory' }
)

export function renderShop (): void {
  let wardrobeResult = ''
  let interiorResult = ''
  shopItems.forEach(item => {
    if (item.category === 'Гардероб') {
      wardrobeResult += `
    <div class='shop-item__container'>
      <p class='shop-item__title'>${item.title} <img src="${require('../../Images/UI/icon_info.svg')}" class="icon_span"></p>
      <p class='shop-item__cost' ${item.free ? 'style="display: none"' : item.available ? '' : 'style="display: none"'}>${item.cost}₽</p>
      <img class='shop-item__image ${item.free && item.available ? '' : item.available ? '' : 'unavailableItem'}' src='${item.image}'/>
      <div class='shop-item__descriptionContainer'><p>${item.description}</div>
      <p class='shop-item__buy' id='wardrobe_item_${item.id}'>${item.free && item.available ? 'Получить' : item.available ? 'Купить' : 'Недоступно'} </p>
    </div>
    `
    } else if (item.category === 'Интерьер') {
      interiorResult += `
    <div class='shop-item__container'>
      <p class='shop-item__title'>${item.title} <img src="${require('../../Images/UI/icon_info.svg')}" class="icon_span"></p>
      <p class='shop-item__cost' ${item.free ? 'style="display: none"' : item.available ? '' : 'style="display: none"'}>${item.cost}₽</p>
      <img class='shop-item__image ${item.free && item.available ? '' : item.available ? '' : 'unavailableItem'}' src='${item.image}'/>
      <div class='shop-item__descriptionContainer'><p>${item.description}</div>
      <p class='shop-item__buy' id='wardrobe_item_${item.id}'>${item.free && item.available ? 'Получить' : item.available ? 'Купить' : 'Недоступно'} </p>
    </div>
    `
    }
  })

  Shop.wardrobeCategory.innerHTML = wardrobeResult
  Shop.interiorCategory.innerHTML = interiorResult

  shopItems.forEach(item => {
    if (item.available && item.category === 'Гардероб') {
      item.free && (Shop.wardrobeCategory.querySelector(`#wardrobe_item_${item.id}`).onclick = () => {
        item.action()
        makeExplosion(MenuMessage.self, [`<img src="${require('../../Images/UI/icon_gift.svg')}" class="icon_span"/>`], 3, 50, 50, 30)
      })
    } else if (item.available && item.category === 'Интерьер') {
      item.free && (Shop.interiorCategory.querySelector(`#wardrobe_item_${item.id}`).onclick = () => {
        item.action()
        makeExplosion(MenuMessage.self, [`<img src="${require('../../Images/UI/icon_gift.svg')}" class="icon_span"/>`], 3, 50, 50, 30)
      })
    }
  })
}
