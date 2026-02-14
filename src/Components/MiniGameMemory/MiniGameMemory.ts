import './MiniGameMemory.scss'
import CContainer from '../../Classes/CContainer'
import { showAd } from '../../Functions/advertisement'

const MiniGameMemory = new CContainer(
  'mini-game-memory',
  `
  <div class='mini-game-memory__container'>
    <button class='mini-game-memory__button' style='background-color: red'></button>
    <button class='mini-game-memory__button' style='background-color: purple'></button>
    <button class='mini-game-memory__button' style='background-color: darkgreen'></button>
    <button class='mini-game-memory__button' style='background-color: yellow'></button>
  </div>
  <div class='mini-game-memory__info-container'>
    <p class='mini-game-memory__lives-info'></p>
    <p class='mini-game-memory__wins-info'></p>
  </div>
  <button class='mini-game-memory__skip-button'>Пропустить за рекламу</button>
  `,
  { name: 'lives', selector: '.mini-game-memory__lives-info' },
  { name: 'skipButton', selector: '.mini-game-memory__skip-button' },
  { name: 'wins', selector: '.mini-game-memory__wins-info' })

let currentPath: any[] = []
let stockPath: any[] = []
let roundsWon: number
let roundsToWin: number
let pathAmount: number
let totalLives: number
let wastedLives: number
const buttons: any = MiniGameMemory.self.querySelectorAll('.mini-game-memory__button')
const buttonsAmount = buttons.length
let stockMiniGameInfo: { roundsInARowToWin: number, beginningPathAmount: number, lives: number }
let doBest: () => void
let doFail: () => void
let doEndgame: () => void
let gotFail: number

export function beginMiniGameMemory (miniGameInfo: {
  roundsInARowToWin: number
  beginningPathAmount: number
  lives: number
  bestAction?: () => void
  failAction?: () => void
  endgameAction?: () => void
}): void {
  gotFail = 0
  stockMiniGameInfo = miniGameInfo
  MiniGameMemory.self.style.display = 'flex'
  roundsWon = 0
  wastedLives = 0
  roundsToWin = miniGameInfo.roundsInARowToWin
  pathAmount = miniGameInfo.beginningPathAmount
  totalLives = miniGameInfo.lives
  miniGameInfo.bestAction && (doBest = miniGameInfo.bestAction)
  miniGameInfo.failAction && (doFail = miniGameInfo.failAction)
  miniGameInfo.endgameAction && (doEndgame = miniGameInfo.endgameAction)
  newPath(pathAmount)
  updateInfo()
}

function newPath (length: number): void {
  currentPath = []
  for (let x = 0; x < length; x++) {
    const currentButton = buttons[Math.floor(Math.random() * buttonsAmount)]
    currentPath.push(currentButton)
  }
  showPath()
  stockPath = []
  currentPath.forEach(element => {
    stockPath.push(element)
  })
}

function showPath (): void {
  currentPath.forEach((element, index) => {
    disableButtons()
    setTimeout(() => {
      element.classList.add('mini-game-memory__button_highlighted')
      setTimeout(() => {
        element.classList.remove('mini-game-memory__button_highlighted')
      }, 500)
    }, (1000 * index) + 500)
  })
  setTimeout(setButtonsState, 1000 * currentPath.length + 1)
}

function updateInfo (): void {
  MiniGameMemory.lives.innerHTML = `<span><img class="icon_span" src="${require('../../Media/Images/UI/icon_favourites.svg')}"></span> ${totalLives - wastedLives}/${totalLives}`
  MiniGameMemory.wins.innerHTML = `<span><img class="icon_span" src="${require('../../Media/Images/UI/icon_achievements.svg')}"></span> ${roundsWon}/${roundsToWin}`
}

function disableButtons (): void {
  buttons.forEach((button: { onclick: () => void }) => {
    button.onclick = () => {}
  })
}

function setButtonsState (): void {
  buttons.forEach((button: { onclick: () => void }) => {
    currentPath[0] === button && (button.onclick = correctButtonClick)
    currentPath[0] !== button && (button.onclick = incorrectButtonClick)
  })
}

function correctButtonClick (): void {
  const effectButton = currentPath[0]
  effectButton.classList.add('mini-game-memory__button_true')
  setTimeout(() => { effectButton.classList.remove('mini-game-memory__button_true') }, 500)
  currentPath.shift()
  setButtonsState()
  checkScore()
  updateInfo()
}

function checkScore (): void {
  if (currentPath.length <= 0) {
    buttons.forEach((element: { classList: { add: (arg0: string) => void, remove: (arg0: string) => void } }) => {
      element.classList.add('mini-game-memory__button_true')
      setTimeout(() => { element.classList.remove('mini-game-memory__button_true') }, 500)
    })
    roundsWon++
    newPath(pathAmount + roundsWon)
    updateInfo()
  }
  if (roundsWon >= roundsToWin) {
    wastedLives === 0 && doBest()
    doEndgame()
    MiniGameMemory.self.style.display = 'none'
  }
  if (totalLives - wastedLives <= 0) {
    gotFail >= 1 && doFail()
    gotFail++
    beginMiniGameMemory(stockMiniGameInfo)
  }
}

function incorrectButtonClick (): void {
  wastedLives++
  currentPath = []
  buttons.forEach((element: { classList: { add: (arg0: string) => void, remove: (arg0: string) => void } }) => {
    element.classList.add('mini-game-memory__button_false')
    setTimeout(() => { element.classList.remove('mini-game-memory__button_false') }, 500)
  })
  stockPath.forEach(element => {
    currentPath.push(element)
  })
  setTimeout(showPath, 1000)
  updateInfo()
  checkScore()
}

MiniGameMemory.skipButton.onclick = () => {
  showAd('medium', () => {
    doEndgame()
    MiniGameMemory.self.style.display = 'none'
  })
}
