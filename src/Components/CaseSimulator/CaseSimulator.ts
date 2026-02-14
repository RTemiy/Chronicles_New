import CContainer from '../../Classes/CContainer'
import './CaseSimulator.scss'
import { type ICase, type ICaseItem, type TRarity } from '../../Types/ICaseItem'
import { ulCase } from './ulCase'

const CaseSimulator = new CContainer('case-simulator',
  `
  <div class="case-simulator__container">
    <div class="case-simulator__cases"></div>
    <div class="case-simulator__caseItems"></div>
    <div class="case-simulator__caseItemsRoll"></div>
  </div>
  <button class="case-simulator__back-button"></button>
  <button class="case-simulator__close-button"></button>
  <button class="case-simulator__choose-button">Открыть кейс</button>
  `,
  { name: 'cases', selector: '.case-simulator__cases' },
  { name: 'caseItems', selector: '.case-simulator__caseItems' },
  { name: 'chooseButton', selector: '.case-simulator__choose-button' },
  { name: 'roll', selector: '.case-simulator__caseItemsRoll' },
  { name: 'backButton', selector: '.case-simulator__back-button' },
  { name: 'closeButton', selector: '.case-simulator__close-button' }
)

const caseDatabase: ICase[] = [ulCase]

export function showCaseSimulator (): void {
  CaseSimulator.caseItems.style.display = 'none'
  CaseSimulator.chooseButton.style.display = 'none'
  CaseSimulator.roll.style.display = 'none'
  CaseSimulator.self.style.display = 'flex'
  showCases()
}

function showCases (): void {
  let casesHTML = ''
  caseDatabase.forEach(Case => {
    casesHTML += `
    <div class="case-simulator__case-cell">
      <img src="${Case.image}">
      <p>${Case.title}</p>
    </div>
    `
  })
  CaseSimulator.cases.innerHTML = casesHTML
  CaseSimulator.cases.querySelectorAll('.case-simulator__case-cell').forEach((el: { onclick: () => void }, index: number) => {
    el.onclick = () => { showCaseItems(index) }
  })

  CaseSimulator.cases.style.display = 'flex'
}

function showCaseItems (caseIndex: number): void {
  CaseSimulator.backButton.style.display = 'flex'
  CaseSimulator.cases.style.display = 'none'
  CaseSimulator.chooseButton.style.display = 'block'
  let caseItemsHTML = ''
  caseDatabase[caseIndex].caseItems.forEach(item => {
    caseItemsHTML += `
    <div class="case-simulator__caseItem">
      <p class="case-simulator__caseItem-rarity">${item.rarity}</p>
      <img src="${item.image}">
      <p class="case-simulator__caseItem-name">${item.title}</p>
    </div>
    `
  })
  CaseSimulator.chooseButton.onclick = () => { openCase(caseIndex) }
  CaseSimulator.caseItems.innerHTML = caseItemsHTML
  CaseSimulator.caseItems.style.display = 'flex'
}

function openCase (caseIndex: number): void {
  CaseSimulator.chooseButton.style.display = 'none'
  CaseSimulator.caseItems.style.display = 'none'
  const item = pickRandomItem(caseIndex)
  CaseSimulator.roll.innerHTML =
    `
    <p>Вы получаете</p>
    <img src="${item.image}">
    <p
    style='color:
${item.rarity === 'Обычный' ? 'gray' : ''}
${item.rarity === 'Необычный' ? 'white' : ''}
${item.rarity === 'Редкий' ? 'darkgreen' : ''}
${item.rarity === 'Легендарный' ? 'cadetblue' : ''}
${item.rarity === 'Эпический' ? 'purple' : ''}
${item.rarity === 'Экстраординарный' ? 'fuchsia' : ''}
'>${item.rarity}</p>
    <p>${item.title}</p>
    `
  CaseSimulator.roll.style.display = 'flex'
}

function pickRandomItem (caseIndex: number): ICaseItem {
  const allCaseItems: ICaseItem[] = []
  const rarityNumber = Math.floor(Math.random() * 100)
  let rarityGot: TRarity = 'Обычный'
  switch (true) {
    case rarityNumber < 2:
      rarityGot = 'Экстраординарный'
      break
    case rarityNumber < 10:
      rarityGot = 'Эпический'
      break
    case rarityNumber < 25:
      rarityGot = 'Легендарный'
      break
    case rarityNumber < 30:
      rarityGot = 'Редкий'
      break
    case rarityNumber < 50:
      rarityGot = 'Необычный'
      break
    case rarityNumber > 51:
      rarityGot = 'Обычный'
      break
  }

  caseDatabase[caseIndex].caseItems.forEach(item => {
    item.rarity === rarityGot && allCaseItems.push(item)
  })
  return allCaseItems[Math.floor(Math.random() * allCaseItems.length)]
}

function hideCaseSimulator (): void {
  CaseSimulator.self.style.display = 'none'
}

CaseSimulator.closeButton.onclick = hideCaseSimulator

CaseSimulator.backButton.onclick = () => {
  CaseSimulator.caseItems.style.display = 'none'
  CaseSimulator.chooseButton.style.display = 'none'
  CaseSimulator.roll.style.display = 'none'
  CaseSimulator.cases.style.display = 'flex'
  CaseSimulator.backButton.style.display = 'none'
}
